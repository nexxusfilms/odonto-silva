/**
 * Rastreamento de cliques para os gestores de tráfego.
 *
 * Todo clique em link, botão ou item de lista expansível envia um evento
 * para o `dataLayer` (lido pelo Google Tag Manager). Elementos com
 * `data-track="nome"` usam esse nome fixo; os demais recebem um nome
 * automático a partir da seção e do texto. A lista de eventos e nomes
 * está em docs/rastreamento.md.
 */

type Tipo =
  | 'whatsapp'
  | 'telefone'
  | 'mapa'
  | 'uber'
  | 'instagram'
  | 'google_avaliacoes'
  | 'ancora'
  | 'interno'
  | 'externo'
  | 'abrir_item'
  | 'menu';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .slice(0, 40);

function tipoDoLink(a: HTMLAnchorElement): Tipo {
  const url = a.href;
  if (/wa\.me|whatsapp\.com/.test(url)) return 'whatsapp';
  if (url.startsWith('tel:')) return 'telefone';
  if (/m\.uber\.com/.test(url)) return 'uber';
  if (/instagram\.com/.test(url)) return 'instagram';
  if (/maps\.app\.goo\.gl|google\.[^/]+\/maps\/reviews/.test(url) || a.closest('#avaliacoes')) return 'google_avaliacoes';
  if (/google\.[^/]+\/maps|maps\.google/.test(url)) return 'mapa';
  const href = a.getAttribute('href') ?? '';
  if (href.startsWith('#') || (a.pathname === location.pathname && a.hash)) return 'ancora';
  return a.origin === location.origin ? 'interno' : 'externo';
}

function secaoDe(el: Element) {
  if (el.closest('[data-wa-float]')) return 'flutuante';
  if (el.closest('[data-cookies]')) return 'aviso_cookies';
  if (el.closest('.menu')) return 'menu_celular';
  if (el.closest('header.header')) return 'cabecalho';
  if (el.closest('footer')) return 'rodape';
  return el.closest('section[id]')?.id ?? (el.closest('.hero') ? 'topo' : 'pagina');
}

export function iniciarRastreamento() {
  window.dataLayer = window.dataLayer || [];

  document.addEventListener(
    'click',
    (ev) => {
      const el = (ev.target as Element | null)?.closest('a, button, summary');
      if (!el) return;

      const secao = secaoDe(el);
      const texto = (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim();
      const nome = el.closest('[data-track]')?.getAttribute('data-track') || `${secao}_${slug(texto)}`;

      let tipo: Tipo;
      let url = '';
      if (el instanceof HTMLAnchorElement) {
        tipo = tipoDoLink(el);
        url = el.href;
      } else if (el.tagName === 'SUMMARY') {
        // Só conta a abertura; fechar não interessa para tráfego.
        if ((el.parentElement as HTMLDetailsElement | null)?.open) return;
        tipo = 'abrir_item';
      } else {
        tipo = 'menu';
      }

      const dados = {
        clique_nome: nome,
        clique_tipo: tipo,
        clique_secao: secao,
        clique_texto: texto.slice(0, 100),
        clique_url: url,
      };

      window.dataLayer.push({ event: 'site_clique', ...dados });
      // Eventos de conversão com nome próprio, prontos para virar meta no Ads/Meta.
      if (tipo === 'whatsapp') window.dataLayer.push({ event: 'lead_whatsapp', ...dados });
      if (tipo === 'telefone') window.dataLayer.push({ event: 'lead_telefone', ...dados });
      if (tipo === 'uber' || tipo === 'mapa') window.dataLayer.push({ event: 'como_chegar', ...dados });
    },
    { capture: true },
  );
}
