import { site, isFilled } from '../config/site';
import { faq } from '../content/faq';
import { tratamentos } from '../content/tratamentos';

/** Remove chaves vazias ou com placeholder para não publicar dados falsos. */
function clean<T>(obj: T): T {
  if (Array.isArray(obj))
    return obj
      .filter((v) => !(typeof v === 'string' && !isFilled(v)))
      .map(clean)
      .filter((v) => v !== undefined) as T;
  if (obj && typeof obj === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === 'string' && !isFilled(v)) continue;
      const c = clean(v);
      if (c === undefined) continue;
      if (typeof c === 'object' && c !== null && Object.keys(c).length === 0) continue;
      out[k] = c;
    }
    return out as T;
  }
  return obj;
}

export function dentistSchema() {
  const p = site.profissional;
  const e = site.endereco;
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: `${site.marca} · ${p.nome}`,
    url: site.url,
    image: `${site.url}${site.seo.ogImage}`,
    telephone: site.telefone,
    priceRange: undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: e.rua,
      addressLocality: e.cidade,
      addressRegion: e.uf,
      postalCode: e.cep,
      addressCountry: 'BR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: e.geo.lat, longitude: e.geo.lng },
    openingHoursSpecification: site.horarios
      .filter((h) => 'abre' in h)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.diasSchema,
        opens: h.abre,
        closes: h.fecha,
      })),
    areaServed: [`${e.bairro}, ${e.cidade}`, e.cidade],
    sameAs: [site.links.instagram, site.links.googlePerfil],
    employee: {
      '@type': 'Person',
      name: isFilled(p.nomeCompleto) ? p.nomeCompleto : p.nome,
      jobTitle: p.profissao,
      identifier: isFilled(p.cro) ? `CRO-SP ${p.cro}` : undefined,
    },
    availableService: tratamentos
      .filter((t) => t.ativo)
      .map((t) => ({ '@type': 'MedicalProcedure', name: t.nome, description: t.resumo })),
  });
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq
      .filter((f) => f.ativo && isFilled(f.resposta))
      .map((f) => ({
        '@type': 'Question',
        name: f.pergunta,
        acceptedAnswer: { '@type': 'Answer', text: f.resposta },
      })),
  };
}
