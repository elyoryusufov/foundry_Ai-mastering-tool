import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppShell } from "@/components/app-shell";
import appCss from "../styles.css?url";

const APP_NAME = "Foundry AI";
const SEO_DESCRIPTION =
  "Foundry AI is Elyor Yusufov's self-directed, two-year roadmap for learning AI engineering from the fundamentals to building real systems.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP_NAME,
  description: SEO_DESCRIPTION,
  creator: {
    "@type": "Person",
    name: "Elyor Yusufov",
    sameAs: ["https://x.com/elyoryusufov", "https://www.instagram.com/elyor_yusufov25/"],
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Foundry AI | Elyor Yusufov — AI Engineering Learning Roadmap" },
      { name: "description", content: SEO_DESCRIPTION },
      { name: "author", content: "Elyor Yusufov" },
      { name: "keywords", content: "Foundry AI, Elyor Yusufov, AI engineering, learn AI, AI learning roadmap" },
      { name: "theme-color", content: "#0c0e12" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <AuthProvider>
          <AppShell>
            <Outlet />
          </AppShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
