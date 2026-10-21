/**
 * Tratamentos.
 *
 * Fonte: Planejamento (clínica geral com parte estética; temas do
 * calendário editorial) e Manual da Marca (clareamento). Nenhuma promessa
 * de resultado (Res. CFO 196/2019). Para adicionar um tratamento, copie um
 * bloco. Para esconder sem apagar, use `ativo: false`.
 */

export interface Tratamento {
  slug: string;
  nome: string;
  resumo: string;
  quando: string;
  beneficio: string;
  ativo: boolean;
  validar?: string;
}

export const tratamentosIntro = {
  kicker: 'Tratamentos',
  titulo: 'Em que eu posso te ajudar',
  intro:
    'Clínica geral, com uma parte dedicada à estética. Todo caso começa pela avaliação: é ela que diz o que faz sentido para você.',
};

export const tratamentos: Tratamento[] = [
  {
    slug: 'avaliacao',
    nome: 'Consulta de avaliação',
    resumo: 'O começo de tudo: exame, conversa e um plano de tratamento explicado.',
    quando: 'Primeira vez aqui, ou faz tempo desde a última consulta.',
    beneficio:
      'Você sai sabendo o que tem, o que precisa e em que ordem, antes de decidir qualquer coisa.',
    ativo: true,
    validar: 'Confirmar como a avaliação funciona hoje e se o plano é entregue por escrito',
  },
  {
    slug: 'limpeza-e-prevencao',
    nome: 'Limpeza e prevenção',
    resumo: 'Limpeza profissional, check-up e orientação de escovação para o dia a dia.',
    quando: 'Faz tempo da última limpeza? Sem culpa, é por aí que a gente recomeça.',
    beneficio: 'Encontrar cedo o que ainda é simples de resolver, e manter a rotina com retorno combinado.',
    ativo: true,
  },
  {
    slug: 'gengiva',
    nome: 'Gengiva',
    resumo: 'Sangrou ao escovar? Não é frescura da sua gengiva.',
    quando: 'Gengiva que sangra, incha ou fica sensível.',
    beneficio: 'Entender a causa do sangramento e saber exatamente como cuidar em casa.',
    ativo: true,
  },
  {
    slug: 'clareamento-dental',
    nome: 'Clareamento dental',
    resumo: 'Dentes mais claros, com indicação e acompanhamento.',
    quando: 'Manchas ou dentes amarelados que incomodam você.',
    beneficio: 'Saber antes se o clareamento é indicado no seu caso e o que esperar dele, de forma realista.',
    ativo: true,
  },
  {
    slug: 'estetica',
    nome: 'Estética do sorriso',
    resumo: 'Ajustes no sorriso planejados com calma, buscando um resultado natural.',
    quando: 'Algo no seu sorriso incomoda e você quer entender as opções.',
    beneficio: 'Um plano estético explicado em fases, sem pressa para decidir.',
    ativo: true,
    validar: 'Listar quais procedimentos estéticos são feitos na clínica',
  },
  {
    slug: 'urgencias',
    nome: 'Urgências',
    resumo: 'Dor, dente quebrado, restauração que caiu.',
    quando: 'Quando não dá para esperar.',
    beneficio:
      'Como estou aqui todos os dias, quando o caso permite, a gente resolve no mesmo atendimento.',
    ativo: true,
    validar: 'Confirmar se atende urgência e em quais horários',
  },
  {
    slug: 'siso',
    nome: 'Dente do siso',
    resumo: 'Avaliação do siso: se precisa sair, quando e por quê.',
    quando: 'Dor no fundo da boca, siso nascendo ou indicação de outro profissional.',
    beneficio: 'Decidir com informação, sem susto.',
    ativo: true,
    validar: 'Confirmar se a extração é feita na clínica ou encaminhada',
  },
  {
    slug: 'mau-halito',
    nome: 'Mau hálito',
    resumo: 'Investigar de onde vem. Muitas vezes a causa está na própria boca.',
    quando: 'Quando o hálito incomoda você ou alguém já comentou.',
    beneficio: 'Entender a causa e o que fazer no dia a dia, sem constrangimento.',
    ativo: true,
  },
  {
    slug: 'criancas',
    nome: 'Atendimento para crianças',
    resumo: 'Primeira consulta, prevenção e hábitos desde cedo.',
    quando: 'Para famílias que querem a mesma dentista para todos em casa.',
    beneficio: 'Continuidade: a profissional que cuida dos pais acompanha os filhos.',
    // Planejamento: “vale se você atende crianças”. Ativar só após confirmar.
    ativo: false,
    validar: 'Confirmar se atende crianças',
  },
];
