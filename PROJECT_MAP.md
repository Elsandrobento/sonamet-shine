# 🗺️ SONAMET INDUSTRIAL S.A. — PROJECT MAP

Documento de referência da arquitetura do website da **Sonamet Industrial S.A.**.  
Serve para guiar futuras manutenções, edições de conteúdo, ajustes visuais e localização rápida de ficheiros.

---

## 📌 1. Visão Geral da Stack & Configurações

* **Framework:** [TanStack Start](https://tanstack.com/start) / React 19 / Vite 7 / TypeScript
* **Roteamento:** `@tanstack/react-router` (Baseado em ficheiros em `src/routes/`)
* **Estilos:** Tailwind CSS v3 + CSS Variables em `src/styles.css`
* **Animações:** `framer-motion` + `lucide-react` (Ícones)
* **Internacionalização (i18n):** `src/context/LanguageContext.tsx` (Português `pt` como padrão, Inglês `en`)
* **Repositório Git:** `https://github.com/Elsandrobento/sonamet-shine.git` (`main`)
* **Hospedagem:** Vercel (Continuous Deployment automático após push na branch `main`)

---

## 🧭 2. Mapa de Rotas & Páginas (`src/routes/`)

| Rota URL | Ficheiro Fonte | Título da Página | Resumo do Conteúdo & Secções Principais |
| :--- | :--- | :--- | :--- |
| `/` | [`index.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/routes/index.tsx) | *Início / Home* | Redirecionamento e visão geral inicial do portal. |
| `/about` | [`about.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/routes/about.tsx) | *A Empresa* | Hero, 4 Métricas (1998, 80 Ha, 1.039 M, 1.300+), 10 Capacidades Oficiais, Estrutura Acionista, Missão/Visão/Valores, Código de Ética e Equipa de Liderança executiva. |
| `/yard` | [`yard.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/routes/yard.tsx) | *O Estaleiro* | Hero Baía do Lobito, Principais Instalações (Yard 1, 2, 3, Cais, Oficinas), Spoolbase de 1.039 m, Posto Médico, Serviços ao Cliente e Botão Download Yard Layout. |
| `/projects` | [`projects.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/routes/projects.tsx) | *Projetos & Histórico* | Hero, Estatísticas ("Projects Delivered / Experience Proven"), Seletor de 3 Categorias (Águas Rasas, SPS & SURF, Outros Projetos), Diagrama de Evolução das Águas Rasas (1998–2026), e Métricas Subsea (Manifolds & Piles). |
| `/qhse` | [`qhse.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/routes/qhse.tsx) | *QHSE & Sustentabilidade* | Tripla Certificação ISO (9001, 14001, 45001), Slogan "Trabalhe com Segurança… Viva com Confiança!", Regras de Segurança, Programa C.A.R.E. e Grelha de Políticas Oficiais em PDF. |
| `/community` | [`community.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/routes/community.tsx) | *Comunidade* | Hero "Community Involvement", Programa de Controlo da Malária (MCP), 3 Pilares de Responsabilidade Social, Galerias Fotográficas (Doação de Sangue, Maternidade da Restinga, Politécnico Bela Vista, Doação de Medicamentos) e Centro de Formação (Training Center). |
| `/contact` | [`contact.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/routes/contact.tsx) | *Contactos* | Formulário de contacto comercial, contactos do Estaleiro no Lobito, escritório em Luanda e canais de recrutamento. |
| Root | [`__root.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/routes/__root.tsx) | *Layout Raiz* | Estrutura comum com `SiteHeader`, `SiteFooter`, `QuickAssist` e `LanguageProvider`. |

---

## 🧩 3. Componentes Globais (`src/components/`)

* [`SiteHeader.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/components/SiteHeader.tsx): Cabeçalho fixo com logotipo da Sonamet, navegação principal, seletor de idioma (PT/EN) e menu móvel responsivo.
* [`SiteFooter.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/components/SiteFooter.tsx): Rodapé institucional com links rápidos, certificações ISO, endereço em Lobito/Luanda e direitos de autor.
* [`Section.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/components/Section.tsx): Componentes reutilizáveis de estrutura:
  * `SectionHeader`: Títulos, subtítulos com suporte a alinhamento e classes personalizadas.
  * `PageHero`: Cabeçalhos de página com imagem de fundo e gradiente.
* [`LogoCloud.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/components/LogoCloud.tsx): Carrossel de logótipos de clientes e parceiros (TotalEnergies, Chevron, ExxonMobil, Azule Energy, Subsea7, etc.).
* [`Reveal.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/components/Reveal.tsx): Utilitário de animação de entrada com `framer-motion`.
* [`QuickAssist.tsx`](file:///c:/Users/elsan/Desktop/Sonamet/src/components/QuickAssist.tsx): Widget flutuante de assistência rápida.
* **Componentes Base UI (`src/components/ui/`):** Primitivos do design system baseados em Radix UI (Button, Card, Dialog, HoverCard, Tabs, etc.).

---

## 🎨 4. Guia Tipográfico & Estilos Globais (`src/styles.css`)

### 🔤 Escala Tipográfica Oficial (Brand Guide Sonamet)
Definida através de variáveis CSS em `src/styles.css`:

```css
:root {
  --font-size-h1: clamp(20pt, 2.2vw, 28pt);   /* Georgia Regular — Títulos principais de páginas */
  --font-size-h2: clamp(13pt, 1.4vw, 16pt);   /* Georgia Regular — Títulos de secções */
  --font-size-h3: clamp(10pt, 1vw, 11pt);     /* Verdana Bold — Subtítulos e cartões */
  --font-size-body: clamp(9pt, 1vw, 11pt);    /* Verdana Regular — Texto corrido (140–160% leading) */
  --font-size-caption: clamp(6.5pt, 0.7vw, 7.5pt); /* Verdana Regular — Legendas e notas */
}
```

### 🎨 Paleta de Cores Corporativas
* **Navy Profundo / Background:** `hsl(218, 55%, 15%)` / `#0f1b29`
* **Ouro Corporativo / Acentos:** `hsl(43, 74%, 49%)` / `#dba11f`
* **Card / Superfície Clara:** `hsl(0, 0%, 100%)` / `#ffffff`
* **Background Secundário:** `hsl(210, 20%, 98%)` / `#f8fafc`
* **Texto Primário:** `hsl(218, 55%, 15%)`
* **Texto Secundário / Muted:** `hsl(215, 16%, 47%)`

---

## 📁 5. Mapa de Imagens & Ficheiros de Mídia (`src/assets/`)

### 👥 Liderança & Institucional
* `PCA.png`: Foto do Presidente do Conselho de Administração (PCA).
* `team-jveeJZ0G.jpg` / `team-carlos-paixao.jpg` / `team-domingos-augusto.jpg` / `team-marcolino-trosso.jpg`: Fotografias da equipa de liderança.
* `join-venture.png` / `snt-acionistas.png`: Gráficos da estrutura acionista.
* `sonamet-logo.png` / `sonamet-logo-transparent.png`: Logótipos oficiais.

### 🏗️ Estaleiro & Spoolbase
* `yard-hero.jpg` / `foto-yard.jpg` / `yard-aerial-real.jpg`: Fotografias aéreas do estaleiro no Lobito.
* `spoolbase-photo.jpg`: Fotografia da linha de montagem da Spoolbase.
* `quay-2.jpg`: Fotografia do cais de acostagem.
* `medical-center.avif`: Centro médico do estaleiro.

### ⚓ Projetos & Offshore
* `projects-hero.jpg`: Imagem de topo da página de projetos.
* `shallow-water-timeline.png`: Diagrama de alta definição da evolução histórica de projetos de águas rasas.
* `category-shallow-water-new.jpg` / `category-sps-surf-new.jpg` / `category-others-new.png`: Imagens de capa das 3 categorias de projetos.
* `project-kaombo-new.jpg` / `project-clov-new.jpg` / `project-mafumeira-new.jpg` / `project-slgc-new.jpg` / `project-suction-piles-agogo.jpg`: Fotos de projetos específicos.

### 🤝 Responsabilidade Social & Comunidade
* `blood-donation-1.jpg` a `blood-donation-4.jpg`: 4 fotografias reais das campanhas de doação de sangue.
* `maternity-restinga-1.jpg` a `maternity-restinga-4.jpg`: 4 fotografias do restauro e blocos cirúrgicos da Maternidade da Restinga.
* `polytechnic-belavista-1.png` a `polytechnic-belavista-4.png`: 4 fotografias do Instituto Politécnico Pe. Martins Ferreira na Bela Vista (implantação, obras e conclusão).
* `medicines-donation-1.png` a `medicines-donation-4.jpg`: 4 fotografias reais das doações de fármacos e material cirúrgico a centros de saúde e hospitais.

---

## 📄 6. Documentos Oficiais em PDF (`public/documents/`)

| Ficheiro PDF | Nome da Política / Documento | Utilizado em |
| :--- | :--- | :--- |
| `SON-MGT-PL-001_QHSE_Policy.pdf` | Política de QHSE | `/qhse` |
| `SON-MGT-PL-003_Substance_Abuse_Policy.pdf` | Política de Abuso de Substâncias | `/qhse` |
| `SON-MGT-PL-004_Malaria_Control_Policy.pdf` | Política de Controlo da Malária | `/qhse` |
| `SON-MGT-PL-005_Smoking_Policy.pdf` | Política de Não Fumadores | `/qhse` |
| `SON-MGT-PL-008_Social_Responsibility_Policy.pdf` | Política de Responsabilidade Social | `/qhse` |
| `MINERAL_SOURCING_POLICY.pdf` | Política de Aprovisionamento Mineral | `/qhse` |
| `SONAMET_ISO_14001.pdf` | Certificado ISO 14001:2015 | `/qhse` |
| `SONAMET_ISO_45001.pdf` | Certificado ISO 45001:2018 | `/qhse` |
| `SONAMET_GOLDEN_RULES.pdf` | Regras de Segurança (Golden Rules) | `/qhse` |
| `SONAMET_CARE_PROGRAM.pdf` | Programa C.A.R.E. | `/qhse` |
| `Sonamet_Code_of_Business_Conduct_2024.pdf` | Código de Conduta Empresarial | `/about` |
| `SONA-YARD-FAB-2026.pdf` | Layout do Estaleiro (Yard Layout) | `/yard` |

---

## 🛠️ 7. Fluxo de Manutenção & Regras de Trabalho

1. **Idiomas (i18n):** Todo o texto deve usar a função `t("Texto PT", "Texto EN")` do hook `useLanguage()`, exceto slogans expressamente institucionais como *"Trabalhe com Segurança… Viva com Confiança!"*.
2. **Title Case:** Títulos e cabeçalhos devem seguir **Title Case** (primeira letra maiúscula por palavra), evitando textos em ALL-CAPS/caixa alta exceto nos pequenos badges/eyebrows.
3. **Formatação de Imagens:** Fotos em galerias de ações sociais usam `aspect-[4/3]`, `rounded-2xl` e `object-cover` (com `object-top` quando o enquadramento de retratos exigir).
4. **Deploy para Produção:** 
   * Compilação local de validação: `npm run build` ou `npx tsc --noEmit`.
   * Envio para Git/Vercel: Executar apenas mediante autorização explícita do utilizador.
