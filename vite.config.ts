// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      routes: [
        "/",
        "/about",
        "/services",
        "/projects",
        "/yard",
        "/qhse",
        "/hseq",
        "/community",
        "/contact",
        "/blog",
        "/blog/celebracao-dia-nacional-da-paz-e-reconciliacao",
        "/blog/sonamet-marca-presenca-na-feira-da-baia-do-lobito",
        "/blog/programa-de-doacao-de-sangue-reforca-compromisso-comunitario",
        "/blog/entrega-de-donativo-de-medicamentos-ao-centro-medico-da-bela-vista",
        "/blog/visita-da-escola-primaria-ao-estaleiro-da-sonamet",
        "/blog/sonamet-doa-camas-e-colchoes-a-maternidade-da-restinga",
        "/blog/visita-institucional-do-administrador-municipal-do-lobito-ao-estaleiro-da-sonamet",
        "/blog/campanha-de-arborizacao-mobiliza-comunidade-na-bela-vista",
        "/blog/formacao-e-capacitacao-de-jovens-no-instituto-politecnico-da-bela-vista",
        "/blog/palestra-de-educacao-ambiental-e-seguranca-na-escola-da-catumbela",
        "/blog/programa-de-controlo-da-malaria-atinge-novo-marco-de-prevencao",
      ],
      crawl: true,
    },
  },
  vite: {
    server: {
      allowedHosts: true,
      watch: {
        usePolling: true,
        interval: 1000,
        ignored: [
          "**/Mudanças/**",
          "**/logo Clients/**",
          "**/*.pdf",
          "**/*.pptx",
          "**/*.JPG",
          "**/*.jpg",
          "**/*.png",
          "**/*.svg",
          "**/*.~*",
          "**/*.tmp",
          "**/*.tmp.*",
        ],
      },
    },
  },
});
