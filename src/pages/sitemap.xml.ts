import type { APIRoute } from 'astro';
import { site } from '../config/site';

// Páginas públicas do site. Ao criar uma página nova, inclua aqui.
const paginas = ['/', '/politica-de-privacidade'];

export const GET: APIRoute = () => {
  const urls = paginas.map((p) => `  <url><loc>${new URL(p, site.url).toString()}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
