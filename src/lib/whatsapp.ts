import { site, isFilled } from '../config/site';

/**
 * Monta o link do WhatsApp. Enquanto o número não for preenchido,
 * o link aponta para a seção de contato para não gerar link quebrado.
 */
export function whatsappHref(message: string = site.mensagemWhatsapp): string {
  if (!isFilled(site.whatsapp)) return '#contato';
  const number = site.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const whatsappIsExternal = () => isFilled(site.whatsapp);
