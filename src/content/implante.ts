/**
 * Textos da página /implante-dentario (destino do grupo "G5 — Implante /
 * Protocolo" do Google Ads). Copy-base do Daniel (Nexxus), 24/11/2026.
 *
 * Regras da página: sem menu e sem links para outras páginas; o único
 * caminho é o WhatsApp. Mesma voz da página inicial (Dra. Amanda em
 * primeira pessoa, sem "dentês").
 *
 * `revisao: true` enquanto a Dra. Amanda não responder os itens
 * `confirmar`: as marcações CONFIRMAR aparecem na página e ela fica fora do
 * Google (noindex) e do sitemap. Nada disso pode ir ao ar sem resposta dela.
 */

export const implante = {
  revisao: false,

  /**
   * Respostas da Dra. Amanda (24/11/2026): a avaliação é com ela e a parte
   * cirúrgica fica com implantodontistas que atendem na clínica.
   * Sem os nomes deles, a página não cita implantodontista nem especialista
   * (o conselho exige nome, CRO e RQE para isso): fala em "dentistas da
   * equipe". Se os dados chegarem, preencher `cirurgioes` e ajustar o texto.
   */
  cirurgioes: [] as { nome: string; cro: string; rqe?: string }[],
  /** Atendimento só particular (sem convênio). */
  soParticular: true,

  mensagem: 'Oi, Dra. Amanda! Vim pelo Google e quero agendar uma avaliação para implante.',

  seo: {
    titulo: 'Implante dentário e prótese protocolo em Piraporinha | Odonto Silva',
    descricao:
      'Avaliação para implante e prótese protocolo em Piraporinha, zona sul de SP. Plano explicado antes de começar. Agende pelo WhatsApp.',
  },

  hero: {
    eyebrow: 'Odonto Silva · Piraporinha, São Paulo',
    titulo: ['Implante dentário e prótese protocolo', 'em Piraporinha'],
    texto:
      'Tudo começa pela avaliação. Você sai sabendo se o implante é indicado no seu caso, como seria o tratamento e em quantas etapas, antes de decidir qualquer coisa.',
    ctaPrincipal: 'Agendar avaliação para implante',
    secundario: { texto: 'Como funciona o tratamento', href: '#como-funciona' },
  },

  diferenca: {
    kicker: 'Implante ou protocolo',
    titulo: 'Implante e protocolo, sem “dentês”',
    itens: [
      {
        termo: 'Implante dentário',
        texto:
          'Repõe um dente. Um pino vai no osso e, em cima dele, entra a coroa, que é o dente que aparece.',
      },
      {
        termo: 'Prótese protocolo',
        texto:
          'É para quem perdeu todos os dentes de cima ou de baixo, ou quase todos. Uma prótese fixa fica presa em alguns implantes. Ela não sai na hora de comer, e você não tira para dormir.',
      },
    ],
    fecho:
      'A clínica faz os dois, em cima e embaixo. Qual faz sentido para você, só a avaliação mostra. É por isso que nada começa sem ela.',
  },

  etapas: {
    kicker: 'Como funciona',
    titulo: 'Do primeiro contato ao acompanhamento',
    intro: 'Sem mistério sobre o que acontece em cada etapa, do WhatsApp até a prótese no lugar.',
    anotacao: 'tudo aqui na clínica',
    itens: [
      {
        titulo: 'Conversa no WhatsApp',
        texto: 'Você conta o que procura e a gente marca a avaliação.',
      },
      {
        titulo: 'Avaliação',
        texto:
          'Eu examino e escuto o que você espera. Para ver o osso e as raízes, peço um exame de imagem, feito em uma clínica de radiologia. Com ele em mãos, a gente segue.',
      },
      {
        titulo: 'Plano explicado',
        texto:
          'Mostro o que encontrei, o que precisa ser feito, em que ordem e quanto tempo leva. Os valores a gente conversa em particular, com o plano na mão.',
      },
      {
        titulo: 'Cirurgia do implante',
        texto: 'É feita aqui no consultório, com anestesia local, por um dentista da equipe que faz a parte cirúrgica.',
      },
      {
        titulo: 'Cicatrização e prótese',
        texto:
          'Depois do tempo de cicatrização que o seu caso pedir, entra a coroa ou a prótese protocolo. No protocolo, você não fica sem dentes: usa uma prótese provisória enquanto cicatriza. No implante de um dente, isso depende do caso.',
      },
      {
        titulo: 'Acompanhamento',
        texto: 'Cada fase termina com a próxima já marcada. Entre uma consulta e outra, as dúvidas têm para quem ir.',
      },
    ],
    cta: 'Quero começar pela avaliação',
  },

  quemCuida: {
    kicker: 'Quem cuida do seu caso',
    titulo: 'Do começo ao fim, no mesmo lugar.',
    texto:
      'A avaliação começa comigo, a Dra. Amanda. A parte cirúrgica é feita por dentistas da equipe que atendem aqui na Odonto Silva. Eu acompanho você em todas as etapas, e você não precisa ir a outro endereço para a cirurgia.',
  },

  preco: {
    titulo: 'Por que não tem preço na página',
    texto:
      'O valor depende do que o seu caso precisa: quantos implantes, que tipo de prótese, se precisa de algum preparo antes. Isso só a avaliação mostra. As normas do conselho de odontologia também não permitem usar preço como chamariz.',
    pagamento: 'Aceitamos dinheiro, Pix, cartão de débito e de crédito.',
  },

  duvidas: {
    kicker: 'Dúvidas',
    titulo: 'O que costumam me perguntar sobre implante',
    rodape: 'Ficou outra dúvida? Pode me perguntar no WhatsApp.',
    itens: [
      {
        pergunta: 'O implante dói?',
        resposta:
          'A cirurgia é feita com anestesia local. Depois dela, é comum ficar um tempo sensível, e eu explico o que fazer em casa para passar por essa fase com tranquilidade. Medo de dentista é real: me conta isso logo no começo.',
      },
      {
        pergunta: 'Quanto tempo leva o tratamento?',
        resposta:
          'Depende do caso: da cicatrização, do tipo de prótese e de precisar ou não de preparo antes. Na avaliação eu te digo o prazo do seu caso.',
      },
      {
        pergunta: 'Qualquer pessoa pode fazer implante?',
        resposta:
          'Nem sempre, e é para isso que serve a avaliação. Ela mostra se o implante é indicado para você, se precisa de algum preparo antes ou se outra opção faz mais sentido.',
      },
      {
        pergunta: 'Vou ser empurrado para um tratamento caro?',
        resposta:
          'Não é assim que eu trabalho. Eu explico o que é necessário agora, o que pode esperar e o que é opcional. A decisão é sua, com tempo para pensar.',
      },
    ],
    // Entra só quando `soParticular` for true.
    convenio: {
      pergunta: 'Atende convênio?',
      resposta:
        'O atendimento é particular. Os valores a gente conversa com o plano na mão, e você decide com calma. Aceitamos dinheiro, Pix, cartão de débito e de crédito.',
    },
  },

  final: {
    titulo: ['Quer saber se o implante', 'é para você?'],
    texto: 'Me manda uma mensagem contando o que você procura. A gente marca a avaliação e conversa com calma.',
    cta: 'Agendar avaliação pelo WhatsApp',
  },
};
