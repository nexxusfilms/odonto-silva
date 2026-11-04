/**
 * Textos da página /google-ads (destino das campanhas do Google Ads).
 *
 * É a mesma página inicial, só com títulos escritos nos termos que as
 * pessoas pesquisam ("dentista em Piraporinha", "limpeza dental"...), a
 * pedido do gestor de tráfego. A página não entra no Google orgânico
 * (noindex) para não competir com a inicial.
 */

export const heroAds = {
  titulo: ['Dentista em Piraporinha:', 'avaliação, tratamento e acompanhamento com a Dra. Amanda'],
  // Vira o H2 do topo.
  texto:
    'Dor, limpeza, estética ou urgência? Agende sua consulta na Odonto Silva: quem atende você do início ao fim sou eu.',
  ctaPrincipal: 'Agendar avaliação pelo WhatsApp',
};

export const tratamentosAds = {
  titulo: 'Dentista em Piraporinha para consulta, limpeza e tratamento dental',
  // Título de cada tratamento nesta página, pelo `slug` de tratamentos.ts.
  nomes: {
    avaliacao: 'Consulta com dentista em Piraporinha: avaliação e plano de tratamento',
    'limpeza-e-prevencao': 'Limpeza dental e consulta com dentista em Piraporinha',
    gengiva: 'Gengiva sangrando? Tratamento de gengiva em Piraporinha',
    'clareamento-dental': 'Clareamento dental em Piraporinha, com avaliação antes',
    estetica: 'Estética do sorriso em Piraporinha',
    urgencias: 'Dentista de urgência em Piraporinha: dor, dente quebrado ou restauração que caiu?',
    siso: 'Dente do siso: avaliação com dentista em Piraporinha',
    'mau-halito': 'Mau hálito: avaliação com dentista em Piraporinha',
    criancas: 'Dentista para crianças em Piraporinha',
  } as Record<string, string>,
};
