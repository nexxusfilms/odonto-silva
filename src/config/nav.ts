export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Consultório', href: '#consultorio' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];

// Páginas que têm todas as seções acima; nelas o menu rola na própria página.
const paginasCompletas = ['/', '/google-ads'];

/** Prefixo dos links do menu: vazio nas páginas completas, "/" nas demais. */
export const baseDoMenu = (pathname: string) =>
  paginasCompletas.includes(pathname.replace(/(.)\/$/, '$1')) ? '' : '/';
