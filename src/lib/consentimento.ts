/**
 * Consentimento de cookies (LGPD) ligado ao Google Consent Mode v2.
 *
 * O padrão "tudo negado" é definido no <head> (Base.astro), antes do GTM.
 * Aqui ficam a leitura/gravação da escolha e o envio do `consent update`.
 * As tags do GTM só gravam cookies depois que a pessoa aceita
 * (ver docs/rastreamento.md).
 */

export const CHAVE_CONSENTIMENTO = 'odontosilva_consentimento_v1';
/** Depois de 12 meses o aviso aparece de novo. */
const VALIDADE_MS = 365 * 24 * 60 * 60 * 1000;

export interface Escolha {
  estatistica: boolean;
  anuncios: boolean;
  data: string;
}

type Gtag = (...args: unknown[]) => void;

export function lerEscolha(): Escolha | null {
  try {
    const c = JSON.parse(localStorage.getItem(CHAVE_CONSENTIMENTO) ?? 'null') as Escolha | null;
    if (!c || Date.now() - Date.parse(c.data) > VALIDADE_MS) return null;
    return c;
  } catch {
    return null;
  }
}

export function salvarEscolha(estatistica: boolean, anuncios: boolean) {
  const escolha: Escolha = { estatistica, anuncios, data: new Date().toISOString() };
  try {
    localStorage.setItem(CHAVE_CONSENTIMENTO, JSON.stringify(escolha));
  } catch {
    // Navegação privada ou armazenamento bloqueado: vale só para esta visita.
  }

  window.dataLayer = window.dataLayer || [];
  const gtag: Gtag = function () {
    // O Consent Mode exige o objeto `arguments`, não um array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments as unknown as Record<string, unknown>);
  };
  const v = (ok: boolean) => (ok ? 'granted' : 'denied');
  gtag('consent', 'update', {
    analytics_storage: v(estatistica),
    ad_storage: v(anuncios),
    ad_user_data: v(anuncios),
    ad_personalization: v(anuncios),
  });
  window.dataLayer.push({
    event: 'consentimento_atualizado',
    consentimento_estatistica: estatistica ? 'sim' : 'nao',
    consentimento_anuncios: anuncios ? 'sim' : 'nao',
  });
  return escolha;
}
