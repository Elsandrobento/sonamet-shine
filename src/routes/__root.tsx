import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sonamet — Construção, Fabricação e EPC/EPCI em Angola" },
      { name: "description", content: "Joint venture Sonangol & Subsea 7. Líder em fabricação offshore e projetos EPC/EPCI na Baía do Lobito, Angola, desde 1998." },
      { name: "author", content: "Sonamet" },
      { property: "og:title", content: "Sonamet — Construção, Fabricação e EPC/EPCI em Angola" },
      { property: "og:description", content: "Joint venture Sonangol & Subsea 7. Líder em fabricação offshore e projetos EPC/EPCI na Baía do Lobito, Angola, desde 1998." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Sonamet — Construção, Fabricação e EPC/EPCI em Angola" },
      { name: "twitter:description", content: "Joint venture Sonangol & Subsea 7. Líder em fabricação offshore e projetos EPC/EPCI na Baía do Lobito, Angola, desde 1998." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e989a04f-2759-4362-ac28-2c1214fdbbd9/id-preview-cb3152bf--a902ed75-8d0e-4c26-a603-e0afaa2fa919.lovable.app-1777836247995.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e989a04f-2759-4362-ac28-2c1214fdbbd9/id-preview-cb3152bf--a902ed75-8d0e-4c26-a603-e0afaa2fa919.lovable.app-1777836247995.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
