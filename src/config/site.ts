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
    nomeCompleto: 'Amanda Amabile Silva',
    profissao: 'Cirurgiã-dentista',
    cro: '145931',
    // Sem registro de especialista (RQE) no CRO: o CFO não permite usar
    // "especialista". Se o registro sair, trocar aqui e preencher `rqe`.
    especialidade: 'Pós-graduação em Ortodontia',
    rqe: '',
  },

  // Inscrição da clínica (pessoa jurídica) e responsável técnico, exigidos
  // pela Res. CFO 196/2019 na publicidade de clínicas.
  clinica: {
    inscricaoCro: '[INSERIR Nº DE INSCRIÇÃO DA CLÍNICA NO CRO-SP]',
    responsavelTecnico: '[INSERIR RESPONSÁVEL TÉCNICO E CRO]',
  },

  endereco: {
    rua: 'R. Domingos Afonso Sertão, 97',
    // Conforme o perfil da clínica no Google (CEP 04914 é da capital, zona sul).
    bairro: 'Piraporinha',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '04914-000',
    referencia: 'Em frente à Academia FitClass',
    // Coordenadas do pino da clínica no Google Maps (usadas no botão do Uber e no Schema.org).
    geo: { lat: -23.673476, lng: -46.7432316 },
  },

  // Somente números, com DDI e DDD. Ex.: 5511999999999
  whatsapp: '5511981982422',
  telefone: '(11) 98198-2422',

  // Conforme o perfil da clínica no Google. `dias` e `abre`/`fecha` alimentam o Schema.org.
  horarios: [
    {
      dias: 'Segunda a sexta',
      horas: '9h às 18h',
      diasSchema: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      abre: '09:00',
      fecha: '18:00',
    },
    { dias: 'Sábado', horas: '9h às 13h', diasSchema: ['Saturday'], abre: '09:00', fecha: '13:00' },
    { dias: 'Domingo', horas: 'Fechado' },
  ],

  links: {
    instagram: 'https://www.instagram.com/odontosilva/',
    instagramUser: '@odontosilva',
    googlePerfil: 'https://maps.app.goo.gl/e4PNuXCWJLFSk5826',
    googleAvaliacoes: 'https://maps.app.goo.gl/e4PNuXCWJLFSk5826',
    // Link "compartilhar > incorporar mapa" do Google Maps (só a URL do src).
    mapaEmbed: 'https://maps.google.com/maps?q=Odonto%20Silva%2C%20R.%20Domingos%20Afonso%20Sert%C3%A3o%2C%2097%2C%20S%C3%A3o%20Paulo&z=17&output=embed',
  },

  // Google Tag Manager (formato GTM-XXXXXXX). Enquanto vazio, os cliques já
  // vão para o dataLayer, mas nenhuma ferramenta externa é carregada.
  rastreamento: {
    gtmId: '[INSERIR ID DO GOOGLE TAG MANAGER]',
  },

  // Mensagem padrão que abre no WhatsApp.
  mensagemWhatsapp: 'Oi, Dra. Amanda! Vim pelo site e gostaria de agendar uma avaliação.',

  seo: {
    titulo: 'Dra. Amanda | Odonto Silva · Dentista em Piraporinha, São Paulo',
    descricao:
      'Consultório da Dra. Amanda em Piraporinha, zona sul de São Paulo. A mesma dentista do primeiro exame ao retorno: avaliação com plano explicado, limpeza, gengiva, clareamento e urgências. Agende pelo WhatsApp.',
    ogImage: '/og-image.jpg', // [INSERIR IMAGEM 1200x630 COM FOTO REAL]
  },
} as const;

export const isFilled = (value?: string | null): value is string =>
  !!value && !value.trim().startsWith('[') && !value.includes('[INSERIR');

export const enderecoCompleto = () => {
  const e = site.endereco;
  return [e.rua, `${e.bairro}, ${e.cidade} - ${e.uf}`, e.cep].filter(Boolean).join(' · ');
};
