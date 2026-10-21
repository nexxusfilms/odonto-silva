/**
 * Dúvidas frequentes. Nascem das dores e objeções do público
 * (Planejamento, seção 9): medo, culpa por ter adiado, medo de ser
 * “empurrado” para tratamento caro, falta de clareza, troca de dentista.
 */

export interface Pergunta {
  pergunta: string;
  resposta: string;
  ativo: boolean;
  validar?: string;
}

export const faqIntro = {
  kicker: 'Dúvidas',
  titulo: 'Antes de marcar, talvez você queira saber',
  rodape: 'Ficou outra dúvida? Pode me perguntar no WhatsApp.',
};

export const faq: Pergunta[] = [
  {
    pergunta: 'Tenho medo de dentista. Como vai ser?',
    resposta:
      'Me conta isso logo no começo, de verdade. Eu explico cada etapa antes de fazer e a gente vai no seu ritmo. Medo de dentista é comum e não é bobagem. Por isso aqui ninguém vai te assustar para convencer de nada.',
    ativo: true,
    validar: 'Se houver combinado de pausa durante o atendimento, mencionar aqui',
  },
  {
    pergunta: 'Faz anos que não vou ao dentista. Vou levar bronca?',
    resposta:
      'Não. Faz tempo? Sem culpa. A gente começa pela avaliação, vê como está tudo e monta um plano por partes, sem tentar resolver tudo de uma vez.',
    ativo: true,
  },
  {
    pergunta: 'Como é a primeira consulta?',
    resposta:
      'É uma consulta de avaliação. Eu pergunto o que te trouxe, examino, explico o que encontrei e, se precisar de tratamento, mostro o plano: o que fazer, por quê e em que ordem. Você sai sabendo o que tem, mesmo que decida começar depois.',
    ativo: true,
    validar: 'Confirmar duração média e se o plano é entregue por escrito',
  },
  {
    pergunta: 'Por que não tem preço no site?',
    resposta:
      'Porque o valor depende do que o seu caso precisa, e isso só a avaliação mostra. Um preço de tabela aqui seria um chute. Os valores a gente conversa em particular, com o plano explicado na sua frente. As normas do conselho de odontologia também não permitem usar preço como chamariz.',
    ativo: true,
  },
  {
    pergunta: 'Vou ser empurrado para um tratamento caro?',
    resposta:
      'Não é assim que eu trabalho. Eu explico o que é necessário agora, o que pode esperar e o que é opcional. A decisão é sua, com tempo para pensar.',
    ativo: true,
  },
  {
    pergunta: 'Vou ser atendido por outro dentista no meio do tratamento?',
    resposta:
      'Não. Eu estou na clínica todos os dias, e quem começa o seu tratamento é quem termina.',
    ativo: true,
  },
  {
    pergunta: 'Minha gengiva sangra quando escovo. É normal?',
    resposta:
      'É comum, mas não é normal. Sangramento costuma indicar que a gengiva está inflamada, e vale uma avaliação para entender a causa. Não precisa se assustar, mas também não vale deixar para depois.',
    ativo: true,
  },
  {
    pergunta: 'Atende urgência?',
    resposta:
      'Se você estiver com dor ou quebrou um dente, me chama no WhatsApp. Como estou aqui todos os dias, quando o caso permite, a gente resolve no mesmo atendimento.',
    ativo: true,
    validar: 'Confirmar atendimento de urgência e horários',
  },
  {
    pergunta: 'E se eu tiver uma dúvida depois da consulta?',
    resposta:
      'Pode perguntar. Ficou sensível, esqueceu alguma orientação, quer confirmar algo: as dúvidas entre uma consulta e outra têm para quem ir.',
    ativo: true,
  },
  {
    pergunta: 'Atende crianças?',
    resposta: '[INSERIR RESPOSTA]',
    ativo: false,
    validar: 'Confirmar se atende crianças',
  },
];
