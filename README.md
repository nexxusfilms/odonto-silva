# Odonto Silva · site institucional

Site da Dra. Amanda (Odonto Silva, Piraporinha, São Paulo). Feito em [Astro](https://astro.build):
gera HTML estático, sem JavaScript desnecessário. Fontes de verdade:
**Manual da Marca** (identidade) e **Planejamento Estratégico de Marketing** (posicionamento, público, tom de voz).

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/ para publicar (Vercel, Netlify, Hostinger etc.)
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| CRO, endereço, WhatsApp, horários, redes, SEO | `src/config/site.ts` |
| Itens do menu | `src/config/nav.ts` |
| Marcações “VALIDAR” visíveis no site | `src/config/flags.ts` (`mostrarPendencias: false` antes de publicar) |
| Textos da página | `src/content/home.ts` |
| Tratamentos (adicionar, esconder com `ativo: false`) | `src/content/tratamentos.ts` |
| Dúvidas frequentes | `src/content/faq.ts` |
| Cores e tipografia | `src/styles/tokens.css` |

### Colocar as fotos reais

1. Salve a foto em `src/assets/fotos/` (JPG grande, de preferência 2000px no lado maior).
2. No componente da seção, troque `undefined` pelo import. Exemplo em `src/components/sections/Hero.astro`:
   ```ts
   import fotoHero from '../../assets/fotos/dra-amanda-hero.jpg';
   ```
3. Pronto. O Astro gera AVIF/WebP em vários tamanhos e o layout não muda (as proporções são fixas).

| Espaço | Seção | Proporção |
| --- | --- | --- |
| Retrato da Dra. Amanda | Hero | 4:5 vertical |
| Dra. Amanda explicando (modelo anatômico) | Sobre | 3:4 vertical |
| Conversa na cadeira (sem procedimento) | Diferenciais | 4:3 |
| Sala de atendimento | Consultório | 4:3 |
| Recepção | Consultório | 4:5 |
| Fachada | Consultório | 3:2 |
| Detalhe de biossegurança | Consultório | 1:1 |
| Imagem de compartilhamento | `public/og-image.jpg` | 1200×630 |

Orientação do Planejamento: rosto, mãos e consultório reais, luz natural, sem banco de imagem.
Nada de boca aberta em procedimento (norma do CFO).

## Pendências (precisam da Dra. Amanda)

**Dados**: nome completo, nº do CRO-SP, especialidade/RQE (se houver), inscrição da clínica no CRO-SP e
responsável técnico, endereço, CEP, ponto de referência, WhatsApp, telefone, horários, Instagram,
link do perfil e das avaliações no Google, mapa incorporado, domínio, e-mail para LGPD, formação e cursos.

**Validar conteúdo** (aparecem marcados em amarelo no site):
- Escopo: clínica geral com parte estética e encaminhamento de outras especialidades.
- Como funciona a consulta de avaliação (duração, plano por escrito?).
- Procedimentos estéticos oferecidos.
- Atendimento de urgência e horários.
- Siso: extração feita na clínica ou encaminhada?
- Atende crianças? (tratamento e pergunta do FAQ estão desligados com `ativo: false`).
- Combinado de pausa para pacientes com medo (só mencionar se for prática real).
- Revisão técnica de todas as frases clínicas (Manual: “toda frase técnica é revisada por você”).

**CRO-SP**: depoimentos no site são zona cinza na norma. A seção só tem o espaço reservado e leva o
paciente às avaliações públicas do Google. Ativar depoimentos apenas após validação.

## Decisões de projeto

- **Headline** nasce da tese do Planejamento: “o seu tratamento não muda de mão”.
- **Como funciona**: a pincelada azul do Manual atravessa as seis etapas, desenhando o posicionamento
  (a mesma dentista do começo ao fim).
- **Linhas cruzando o canto das fotos**, **rabisco rosa**, **arco** e **pinceladas**: extraídos do Manual.
- **Botões em rosa profundo (#C4085A)**: o rosa #F70B6E com texto branco não passa no contraste WCAG para
  texto pequeno; ele fica nas formas, destaques e títulos grandes (como o Planejamento recomenda).
- **Sem preço, promessa, superlativo ou urgência** (Res. CFO 196/2019 e tom de voz do Manual).
- **Schema.org** (`Dentist` + `FAQPage`) ignora automaticamente qualquer campo ainda com placeholder.
