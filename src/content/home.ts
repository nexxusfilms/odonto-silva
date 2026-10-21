/**
 * Textos da página inicial.
 *
 * Voz: primeira pessoa, próxima, leve, clara e honesta (Manual da Marca +
 * Planejamento, seção 10). Antes de publicar, a Dra. Amanda revisa toda
 * frase técnica. Itens com `validar` aparecem marcados no site enquanto
 * `mostrarPendencias` estiver ligado (src/config/flags.ts).
 */

export const hero = {
  eyebrow: 'Odonto Silva · Dentista em Piraporinha, Diadema',
  titulo: ['Aqui, o seu tratamento', 'não muda de mão.'],
  texto:
    'Sou a Amanda, cirurgiã-dentista, e estou na clínica todos os dias. Quem avalia o seu caso sou eu. E sou eu que resolvo, acompanho e respondo suas dúvidas até o retorno.',
  ctaPrincipal: 'Agendar avaliação',
  ctaSecundario: 'Como é a primeira consulta',
  anotacao: 'oi, eu sou a Amanda',
  foto: {
    label: 'FOTO DA DENTISTA',
    dica: 'Retrato vertical da Dra. Amanda no consultório, luz natural, olhando para a câmera.',
    alt: 'Dra. Amanda, cirurgiã-dentista da Odonto Silva, no consultório em Piraporinha, Diadema',
  },
};

export const sobre = {
  kicker: 'Quem cuida de você',
  titulo: 'Oi, eu sou a',
  tituloDestaque: 'Amanda.',
  paragrafos: [
    'Estou na Odonto Silva todos os dias. Parece detalhe, mas para quem está sentado na cadeira isso muda bastante coisa.',
    'Quem começa o seu tratamento é quem termina. Se o caso permite, o problema é tratado quando aparece, sem ficar empurrando para outra data. E, entre uma consulta e outra, se surgir alguma dúvida, você sabe para quem perguntar.',
    'Gosto de explicar antes de fazer. Sem “dentês”, sem pressa e sem julgar ninguém por quanto tempo ficou sem vir.',
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
    alt: 'Dra. Amanda explicando um tratamento com um modelo anatômico',
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
    alt: 'Dra. Amanda conversando com uma paciente na cadeira do consultório',
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
    'Para quem fica ansioso só de pensar em dentista, ajuda saber como é o lugar. O consultório fica em Piraporinha, Diadema.',
  fotos: [
    {
      label: 'FOTO DO CONSULTÓRIO',
      dica: 'Sala de atendimento inteira, luz natural, cadeira e bancada organizadas.',
      alt: 'Sala de atendimento da Odonto Silva',
    },
    {
      label: 'FOTO DA RECEPÇÃO',
      dica: 'Recepção/sala de espera.',
      alt: 'Recepção da Odonto Silva',
    },
    {
      label: 'FOTO DA FACHADA',
      dica: 'Fachada de frente, de dia, com a identificação visível. Ajuda quem chega pela primeira vez.',
      alt: 'Fachada da Odonto Silva em Piraporinha, Diadema',
    },
    {
      label: 'FOTO DE DETALHE',
      dica: 'Biossegurança: instrumentais embalados, autoclave, materiais organizados.',
      alt: 'Instrumentais esterilizados e embalados no consultório',
    },
  ],
};

export const credenciais = {
  kicker: 'Formação',
  titulo: 'Quem assina o seu tratamento',
  intro:
    'Pela norma do conselho de odontologia, todo tratamento leva o nome, o CRO e a especialidade de quem fez. Estes são os meus.',
  // Preencher só com informações comprovadas. Remover linhas que não se aplicam.
  itens: [
    { termo: 'Graduação', valor: '[INSERIR INSTITUIÇÃO E ANO DE FORMAÇÃO]' },
    { termo: 'Especialização', valor: '[INSERIR, SE HOUVER RQE]' },
    { termo: 'Cursos e atualizações', valor: '[INSERIR CURSOS, CONGRESSOS OU REMOVER]' },
    { termo: 'Associações', valor: '[INSERIR OU REMOVER]' },
  ],
};

export const avaliacoes = {
  titulo: 'O que dizem os pacientes',
  texto:
    'As avaliações ficam no Google, escritas pelos próprios pacientes, sem filtro meu. Vale ler antes de marcar.',
  cta: 'Ler avaliações no Google',
  pedido: 'Já se consultou comigo? Sua avaliação no Google ajuda outras pessoas do bairro a escolher.',
  ctaPedido: 'Deixar uma avaliação',
  // Depoimentos no site são zona cinza na norma do CFO (Planejamento, seção 4).
  // Só ativar com depoimentos reais, autorizados e após validar com o CRO-SP.
  depoimentosPlaceholder: '[INSERIR DEPOIMENTOS REAIS · somente após validar com o CRO-SP]',
};

export const ctaFinal = {
  titulo: ['Quer entender', 'o que o seu caso precisa?'],
  texto:
    'Me manda uma mensagem contando o que está te incomodando, ou só que faz tempo. A gente marca uma avaliação e conversa com calma.',
  cta: 'Agendar pelo WhatsApp',
};
