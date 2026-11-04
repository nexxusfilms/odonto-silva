# Rastreamento de cliques: guia para os gestores de tráfego

Todo clique em botão, link ou item expansível do site gera um evento no `dataLayer`. O Google Tag Manager lê esse `dataLayer`, e a partir dele GA4, Google Ads e Meta Pixel podem ser configurados.

## Como ativar

O contêiner **GTM-5BXTVN6M** já está instalado em todas as páginas (`rastreamento.gtmId` em `src/config/site.ts`). O site usa o carregador padrão do GTM, logo depois do Consent Mode.

Não é preciso colar o `gtag('js', ...)` no site: GA4 e Google Ads são configurados como tags dentro do GTM.

## Página das campanhas: /google-ads

`https://www.odontosilva.com.br/google-ads` é a página inicial com títulos nos termos de busca ("dentista em Piraporinha", "limpeza dental", "dentista de urgência"...). Os textos ficam em `src/content/google-ads.ts`.

- Use essa URL como página final dos anúncios do Google Ads.
- Ela tem `noindex` e não está no sitemap, para não competir no Google orgânico com a página inicial.
- Os botões têm os mesmos nomes (`clique_nome`) da página inicial. Para separar os resultados, use a variável **Page Path** do GTM (`/google-ads`).
- O menu rola dentro da própria página, então o visitante não sai dela.

## Eventos

| Evento | Quando dispara | Uso sugerido |
| --- | --- | --- |
| `site_clique` | Qualquer clique em botão, link ou item que abre (tratamentos e dúvidas) | Relatórios de engajamento por botão |
| `lead_whatsapp` | Clique em qualquer botão que abre o WhatsApp | **Conversão principal** (Google Ads, Meta, GA4) |
| `lead_telefone` | Clique em link de telefone (`tel:`) | Conversão secundária |
| `como_chegar` | Clique em "Abrir no Google Maps" ou "Chamar um Uber" | Intenção de visita |

`lead_whatsapp`, `lead_telefone` e `como_chegar` também disparam `site_clique`. Para não contar a conversão em dobro, use só um dos dois eventos em cada meta.

## Parâmetros (variáveis da camada de dados no GTM)

| Parâmetro | O que traz | Exemplo |
| --- | --- | --- |
| `clique_nome` | Nome fixo do botão (tabela abaixo) | `topo_agendar_whatsapp` |
| `clique_tipo` | `whatsapp`, `telefone`, `mapa`, `uber`, `instagram`, `google_avaliacoes`, `ancora`, `interno`, `externo`, `abrir_item`, `menu` | `whatsapp` |
| `clique_secao` | Onde o botão está | `tratamentos` |
| `clique_texto` | Texto do botão | `Agendar avaliação` |
| `clique_url` | Destino do link | `https://wa.me/55...` |

## Nomes fixos dos botões

Esses nomes não mudam se o texto do botão mudar.

| `clique_nome` | Botão |
| --- | --- |
| `cabecalho_logo` | Logo no topo |
| `cabecalho_agendar_whatsapp` | "Agendar consulta" no cabeçalho |
| `menu_agendar_whatsapp` | "Agendar pelo WhatsApp" no menu do celular |
| `topo_agendar_whatsapp` | "Agendar avaliação" no topo da página |
| `topo_como_funciona` | "Como é a primeira consulta" |
| `flutuante_whatsapp` | Botão flutuante do WhatsApp |
| `como_funciona_whatsapp` | "Começar pela conversa" |
| `tratamento_<tratamento>_abrir` | Abrir um tratamento (ex.: `tratamento_clareamento-dental_abrir`) |
| `tratamento_<tratamento>_whatsapp` | "Perguntar sobre isso no WhatsApp" dentro de um tratamento |
| `como_chegar_google_maps` | "Abrir no Google Maps" |
| `como_chegar_uber` | "Chamar um Uber até aqui" |
| `como_chegar_whatsapp` | "Pedir a localização no WhatsApp" |
| `avaliacoes_ler_google` | "Ler avaliações no Google" |
| `avaliacao_<n>_google` | Link de cada trecho de avaliação (1, 2, 3) |
| `avaliacoes_deixar_google` | "Deixar uma avaliação" |
| `duvidas_whatsapp` | "Mandar minha dúvida" |
| `duvida_<n>_abrir` | Abrir a dúvida número n |
| `final_agendar_whatsapp` | "Agendar pelo WhatsApp" no fim da página |
| `rodape_whatsapp` | WhatsApp no rodapé |
| `rodape_instagram` | Instagram no rodapé |
| `rodape_google` | "Avaliações no Google" no rodapé |
| `rodape_preferencias_cookies` | "Preferências de cookies" no rodapé |
| `cookies_aceitar` / `cookies_recusar` | Botões do aviso de cookies |
| `cookies_personalizar` / `cookies_salvar` | Abrir as opções e salvar a escolha no aviso de cookies |

Os botões sem nome fixo, como os links do menu, recebem nome automático no formato seção + texto. Exemplos: `cabecalho_sobre`, `rodape_politica_de_privacidade`.

Para dar nome fixo a um botão novo: use `track="nome"` no componente `Button` ou `data-track="nome"` em qualquer link.

## Configuração mínima no GTM

1. **Variáveis:** crie uma "Variável da camada de dados" para cada parâmetro (`clique_nome`, `clique_tipo`, `clique_secao`, `clique_texto`, `clique_url`).
2. **Acionador:** crie um "Evento personalizado" com nome `lead_whatsapp`.
3. **Tags:** use esse acionador em três tags:
   - GA4: evento `generate_lead`, com `clique_nome` como parâmetro;
   - conversão do Google Ads;
   - Meta Pixel: evento `Contact` ou `Lead`.
4. Para um relatório geral de cliques, crie um acionador `site_clique` ligado a uma tag de evento GA4.

## LGPD e consentimento

O site já tem aviso de cookies ligado ao **Google Consent Mode v2**:

- Antes do GTM carregar, tudo começa **negado** (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`).
- Quando a pessoa escolhe, o site envia `consent update` e o evento `consentimento_atualizado`, com `consentimento_estatistica` e `consentimento_anuncios` (`sim` ou `nao`).
- A escolha fica guardada por 12 meses. Em visitas seguintes, ela é aplicada antes do GTM, sem mostrar o aviso de novo.
- O aviso tem três categorias: necessários, estatísticas e anúncios. Ele pode ser reaberto pelo link "Preferências de cookies" no rodapé.

O que configurar no GTM:

1. **Tags do Google (GA4 e Google Ads):** já respeitam o Consent Mode sozinhas. Sem consentimento, enviam só sinais sem cookie.
2. **Meta Pixel e outras tags que não são do Google:** em Configurações avançadas → Configurações de consentimento, marque "Exigir consentimento adicional" com `ad_storage`. Assim a tag só dispara depois do aceite.
3. Para disparar o Pixel logo após o aceite na primeira visita, inclua também o acionador de evento personalizado `consentimento_atualizado`.
4. Nas configurações do contêiner, ative a "Visão geral do consentimento" para conferir cada tag.

A política de privacidade (`/politica-de-privacidade#cookies`) já cita Google Analytics, Google Ads e Meta. Se entrar outra ferramenta, ela precisa ser acrescentada lá.
