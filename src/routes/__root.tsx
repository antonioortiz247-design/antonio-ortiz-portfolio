import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0f" },
      { title: "Antonio Ortiz — Publicista | Marketing Digital | Branding & Contenido Creativo" },
      {
        name: "description",
        content:
          "Portafolio de Antonio Ortiz — branding, marketing digital, contenido visual y comunicación creativa. Proyectos digitales, identidad visual y materiales para marcas, negocios y comunicación institucional.",
      },
      { name: "author", content: "Antonio Ortiz" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Antonio Ortiz" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Antonio Ortiz — Publicista | Marketing Digital | Branding & Contenido Creativo" },
      { name: "twitter:title", content: "Antonio Ortiz — Publicista | Marketing Digital | Branding & Contenido Creativo" },
      { property: "og:description", content: "Branding, marketing digital, contenido visual y comunicación creativa." },
      { name: "twitter:description", content: "Branding, marketing digital, contenido visual y comunicación creativa." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8d6ed608-a38c-4969-9630-322af4dd061a/id-preview-4f916a0a--70afa254-2710-41cc-b0ce-bd0a11c70d1b.lovable.app-1778809620802.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8d6ed608-a38c-4969-9630-322af4dd061a/id-preview-4f916a0a--70afa254-2710-41cc-b0ce-bd0a11c70d1b.lovable.app-1778809620802.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if ('noModule' in HTMLScriptElement.prototype) document.documentElement.classList.add('tss-module')",
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
