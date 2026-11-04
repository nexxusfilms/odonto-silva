/**
 * Textos da página inicial.
 *
 * Voz: primeira pessoa, próxima, leve, clara e honesta (Manual da Marca +
 * Planejamento, seção 10). Antes de publicar, a Dra. Amanda revisa toda
 * frase técnica. Itens com `validar` aparecem marcados no site enquanto
 * `mostrarPendencias` estiver ligado (src/config/flags.ts).
 */

export const hero = {
  eyebrow: 'Odonto Silva · Dentista em Piraporinha, São Paulo',
  titulo: ['Aqui, o seu tratamento', 'não muda de mão.'],
  texto:
    'Sou cirurgiã-dentista e estou na clínica todos os dias. Eu mesma avalio cada caso, defino o melhor tratamento e acompanho você de perto, esclarecendo suas dúvidas até o retorno.',
  ctaPrincipal: 'Agendar avaliação',
  ctaSecundario: 'Como é a primeira consulta',
  anotacao: 'oi, eu sou a Amanda',
  foto: {
    label: 'FOTO DA DENTISTA',
    dica: 'Retrato vertical da Dra. Amanda no consultório, luz natural, olhando para a câmera.',
    alt: 'Dra. Amanda, cirurgiã-dentista da Odonto Silva, sorrindo de braços cruzados',
  },
};

export const sobre = {
  kicker: 'Quem cuida de você',
  titulo: 'Gosto de explicar',
  tituloDestaque: 'antes de fazer.',
  paragrafos: [
    'Estou na Odonto Silva todos os dias. Parece detalhe, mas para quem está sentado na cadeira isso muda bastante coisa.',
    'Quem começa o seu tratamento é quem termina. Se o caso permite, o problema é tratado quando aparece, sem ficar empurrando para outra data. E, entre uma consulta e outra, se surgir alguma dúvida, você sabe para quem perguntar.',
    'Sem “dentês”, sem pressa e sem julgar ninguém por quanto tempo ficou sem vir.',
  ],
  escopo: {
    texto:
      'Faço clínica geral, com uma parte dedicada à estética. Quando o caso pede outra especialidade, eu explico o porquê e indico um colega.',
    validar: 'Confirmar escopo de atendimento e encaminhamentos',
  },
  citacao: 'Quem avalia é quem resolve e quem acompanha.',
  foto: {
    label: 'FOTO DA DENTISTA NO CONSULTÓRIO',
    dica: 'Dra. Amanda em cena real: conversando, explicando com modelo anatômico. Sem procedimento.',
    alt: 'Dra. Amanda segurando um alinhador transparente em formato de coração',
  },
};

export const diferenciais = {
  titulo: 'O que muda quando a dentista está aqui todos os dias',
  itens: [
    {
      titulo: 'A mesma profissional do diagnóstico ao retorno',
      texto:
        'Você não precisa contar sua história de novo a cada consulta. Eu conheço o seu caso porque fui eu que avaliei.',
    },
    {
      titulo: 'Resolver no momento, quando dá',
      texto:
        'Se o caso clínico permite, a gente resolve na hora. Quando não permite, eu explico por quê e qual é o próximo passo.',
    },
    {
      titulo: 'Dúvida entre consultas tem para quem ir',
      texto:
        'Ficou sensível depois do atendimento? Esqueceu o que eu falei sobre a escovação? Pode perguntar.',
    },
    {
      titulo: 'Plano explicado antes de começar',
      texto:
        'O que precisa ser feito, por quê e em que ordem. Os valores a gente conversa em particular, com o plano na mão, e você decide com calma.',
    },
    {
      titulo: 'Leve, sem drama',
      texto:
        'Medo de dentista é real, e eu levo a sério. Aqui ninguém vai te dar bronca nem te assustar para fechar tratamento.',
    },
  ],
  foto: {
    label: 'FOTO DURANTE ATENDIMENTO',
    dica: 'Conversa na cadeira, antes ou depois do procedimento. Nada de boca aberta ou “durante” (norma do CFO).',
    alt: 'Dra. Amanda de touca, óculos e máscara, com o nome bordado no jaleco, no consultório',
  },
};

export const etapas = {
  kicker: 'Como funciona',
  titulo: 'Do primeiro contato ao retorno',
  intro:
    'Sem mistério sobre o que acontece em cada etapa. E, da avaliação ao retorno, quem cuida do seu caso é sempre a mesma pessoa.',
  anotacao: 'a mesma dentista em todas as etapas',
  itens: [
    {
      titulo: 'Conversa',
      texto:
        'Você chama no WhatsApp, conta o que está sentindo (ou só que faz tempo) e a gente marca um horário.',
    },
    {
      titulo: 'Avaliação',
      texto: 'Eu examino e, principalmente, escuto. É aqui que entendo o que você sente e o que espera.',
    },
    {
      titulo: 'Plano explicado',
      texto:
        'Mostro o que encontrei, o que precisa ser feito e em que ordem. Os valores, em particular.',
    },
    {
      titulo: 'Tratamento em fases',
      texto:
        'Cada fase termina com a data da próxima já marcada. Você sabe onde está e o que vem depois.',
    },
    {
      titulo: 'Acompanhamento',
      texto: 'Entre uma consulta e outra, as dúvidas têm para quem ir.',
    },
    {
      titulo: 'Retorno',
      texto: 'Antes de você ir embora, o retorno preventivo já fica combinado.',
    },
  ],
};

export const consultorio = {
  kicker: 'O consultório',
  titulo: 'Para conhecer o lugar antes de chegar',
  intro:
    'Para quem fica ansioso só de pensar em dentista, ajuda saber como é o lugar. O consultório fica em Piraporinha, São Paulo.',
  // Ordem usada na galeria: sala, recepção, fachada, segunda sala.
  fotos: [
    {
      label: 'FOTO DO CONSULTÓRIO',
      dica: 'Sala de atendimento inteira, luz natural, cadeira e bancada organizadas.',
      alt: 'Sala de atendimento da Odonto Silva, com cadeira odontológica, bancada e armários brancos',
    },
    {
      label: 'FOTO DA RECEPÇÃO',
      dica: 'Recepção/sala de espera.',
      alt: 'Recepção da Odonto Silva, com o logo dourado na parede, balcão de mármore e cadeiras vermelhas',
    },
    {
      label: 'FOTO DA FACHADA',
      dica: 'Fachada de frente, de dia, com a identificação visível. Ajuda quem chega pela primeira vez.',
      alt: 'Fachada azul-turquesa da Odonto Silva, número 97, em Piraporinha, São Paulo',
    },
    {
      label: 'FOTO DO CONSULTÓRIO 2',
      dica: 'Segunda sala de atendimento.',
      alt: 'Segunda sala de atendimento da Odonto Silva, com cadeira odontológica verde-água',
    },
  ],
};

export const credenciais = {
  kicker: 'Formação',
  titulo: 'Quem assina o seu tratamento',
  intro:
    'Pela norma do conselho de odontologia, todo tratamento leva o nome e o CRO de quem fez. Estes são os meus, junto com a minha formação.',
  // Preencher só com informações comprovadas. Remover linhas que não se aplicam.
  itens: [
    { termo: 'Graduação', valor: 'Odontologia, Universidade de Santo Amaro (Unisa)' },
    { termo: 'Pós-graduação', valor: 'Ortodontia, Ortoconecta' },
  ],
};

export const avaliacoes = {
  titulo: 'O que dizem os pacientes',
  texto:
    'Alguns trechos do que os pacientes escreveram no Google. As avaliações completas estão lá, sem filtro meu.',
  cta: 'Ler avaliações no Google',
  pedido: 'Já se consultou comigo? Sua avaliação no Google ajuda outras pessoas do bairro a escolher.',
  ctaPedido: 'Deixar uma avaliação',
  // Trechos literais de avaliações públicas no Google, sem frases sobre
  // resultado de tratamento nem comparação com outras clínicas. Depoimentos
  // no site são zona cinza na norma do CFO (Planejamento, seção 4).
  depoimentosValidar: 'Confirmar com o CRO-SP antes de publicar os trechos',
  depoimentos: [
    {
      texto:
        'Fui muito bem atendido, desde a recepção até o procedimento. (…) Me deixaram muito à vontade.',
      autor: 'Lucas A.',
      link: 'https://maps.app.goo.gl/d3J8WMv8iwgv976D7',
    },
    {
      texto: 'Quero agradecer o atendimento. Lugar limpo e bem agradável.',
      autor: 'Renata S.',
      link: 'https://maps.app.goo.gl/iveEFnx7EiFTJHYU7',
    },
    {
      texto:
        'Conheci a clínica por conta da minha irmã e desde então seguimos firmes com a parceria!',
      autor: 'Samuel C.',
      link: 'https://maps.app.goo.gl/MXWpvTRLf1i2pHp16',
    },
  ],
};

export const ctaFinal = {
  titulo: ['Quer entender', 'o que o seu caso precisa?'],
  texto:
    'Me manda uma mensagem contando o que está te incomodando, ou só que faz tempo. A gente marca uma avaliação e conversa com calma.',
  cta: 'Agendar pelo WhatsApp',
};
