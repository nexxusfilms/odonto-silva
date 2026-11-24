import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { implante } from '../content/implante';

// Páginas públicas do site. Ao criar uma página nova, inclua aqui.
// /google-ads fica de fora (noindex); /implante-dentario entra depois da revisão.
const paginas = ['/', '/politica-de-privacidade', ...(implante.revisao ? [] : ['/implante-dentario'])];

export const GET: APIRoute = () => {
  const urls = paginas.map((p) => `  <url><loc>${new URL(p, site.url).toString()}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
