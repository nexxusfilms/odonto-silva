/**
 * Dados da clínica e da profissional.
 *
 * Tudo o que estiver entre colchetes é PLACEHOLDER e precisa ser
 * substituído antes de publicar. O helper `isFilled()` impede que
 * placeholders entrem no Schema.org e em links reais.
 */

export const site = {
  // [CONFIRMAR DOMÍNIO] Trocar aqui e em astro.config.mjs.
  url: 'https://www.odontosilva.com.br',
  lang: 'pt-BR',

  marca: 'Odonto Silva',
  profissional: {
    nome: 'Dra. Amanda',
    nomeCompleto: '[INSERIR NOME COMPLETO DA DRA. AMANDA]',
    profissao: 'Cirurgiã-dentista',
    cro: '[INSERIR Nº CRO-SP]',
    // Só preencher se houver RQE (especialidade registrada no CRO).
    especialidade: '[INSERIR ESPECIALIDADE, SE HOUVER RQE]',
  },

  // Inscrição da clínica (pessoa jurídica) e responsável técnico, exigidos
  // pela Res. CFO 196/2019 na publicidade de clínicas.
  clinica: {
    inscricaoCro: '[INSERIR Nº DE INSCRIÇÃO DA CLÍNICA NO CRO-SP]',
    responsavelTecnico: '[INSERIR RESPONSÁVEL TÉCNICO E CRO]',
  },

  endereco: {
    rua: '[INSERIR ENDEREÇO]',
    bairro: 'Piraporinha',
    cidade: 'Diadema',
    uf: 'SP',
    cep: '[INSERIR CEP]',
    referencia: '[INSERIR PONTO DE REFERÊNCIA]',
  },

  // Somente números, com DDI e DDD. Ex.: 5511999999999
  whatsapp: '[INSERIR WHATSAPP]',
  telefone: '[INSERIR TELEFONE]',

  horarios: [
    { dias: 'Segunda a sexta', horas: '[INSERIR HORÁRIO]' },
    { dias: 'Sábado', horas: '[INSERIR HORÁRIO OU REMOVER]' },
  ],

  links: {
    instagram: '[INSERIR LINK DO INSTAGRAM]',
    instagramUser: '[@INSERIR]',
    googlePerfil: '[INSERIR LINK DO PERFIL NO GOOGLE]',
    googleAvaliacoes: '[INSERIR LINK DAS AVALIAÇÕES NO GOOGLE]',
    // Link "compartilhar > incorporar mapa" do Google Maps (só a URL do src).
    mapaEmbed: '[INSERIR URL DO MAPA INCORPORADO]',
  },

  // Mensagem padrão que abre no WhatsApp.
  mensagemWhatsapp: 'Oi, Dra. Amanda! Vim pelo site e gostaria de agendar uma avaliação.',

  seo: {
    titulo: 'Dra. Amanda | Odonto Silva · Dentista em Piraporinha, Diadema',
    descricao:
      'Consultório da Dra. Amanda em Piraporinha, Diadema. A mesma dentista do primeiro exame ao retorno: avaliação com plano explicado, limpeza, gengiva, clareamento e urgências. Agende pelo WhatsApp.',
    ogImage: '/og-image.jpg', // [INSERIR IMAGEM 1200x630 COM FOTO REAL]
  },
} as const;

export const isFilled = (value?: string | null): value is string =>
  !!value && !value.trim().startsWith('[') && !value.includes('[INSERIR');

export const enderecoCompleto = () => {
  const e = site.endereco;
  return [e.rua, `${e.bairro}, ${e.cidade} - ${e.uf}`, e.cep].filter(Boolean).join(' · ');
};
