import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, CalendarDays, Compass, GraduationCap, Hammer, Instagram, Library } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Today", icon: CalendarDays },
  { to: "/roadmap", label: "Roadmap", icon: Compass },
  { to: "/projects", label: "Projects", icon: Hammer },
  { to: "/guide", label: "Playbook", icon: BookOpen },
  { to: "/university", label: "Uni", icon: GraduationCap },
  { to: "/resources", label: "Links", icon: Library },
] as const;

const SOCIAL_LINKS = [
  { href: "https://x.com/elyoryusufov", label: "X" },
  { href: "https://www.instagram.com/elyor_yusufov25/", label: "Instagram" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto flex min-h-dvh max-w-6xl">
        <aside className="hidden w-56 shrink-0 flex-col border-r border-border px-4 py-6 md:flex">
          <Link to="/" className="mb-8 block">
            <div className="font-display text-2xl tracking-tight text-primary">Foundry</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">AI engineer · 2 years</div>
          </Link>
          <nav className="flex flex-1 flex-col gap-1">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm transition-colors",
                    active ? "bg-raised text-fg" : "text-muted hover:bg-raised/60 hover:text-fg",
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 border-t border-border pt-4">
            <p className="text-[11px] leading-relaxed text-muted">Built by Elyor Yusufov · 3 hours a day, Monday–Friday</p>
            <nav aria-label="Elyor Yusufov social profiles" className="mt-3 flex gap-4 text-xs text-muted">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-primary">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-border px-4 py-3 md:hidden">
            <div>
              <div className="font-display text-lg text-primary">Foundry</div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted">2-year AI path</div>
            </div>
            <nav aria-label="Elyor Yusufov social profiles" className="flex items-center gap-3 text-xs text-muted">
              <a href={SOCIAL_LINKS[0].href} target="_blank" rel="noreferrer" className="min-h-11 inline-flex items-center hover:text-primary">X</a>
              <a href={SOCIAL_LINKS[1].href} target="_blank" rel="noreferrer" aria-label="Instagram" className="min-h-11 inline-flex items-center hover:text-primary">
                <Instagram className="size-4" aria-hidden="true" />
              </a>
            </nav>
          </header>
          <main className="flex-1 px-4 py-6 pb-24 md:px-8 md:pb-10">{children}</main>
        </div>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-6 border-t border-border bg-bg/95 backdrop-blur md:hidden">
        {NAV.map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-0.5 text-[10px]",
                active ? "text-primary" : "text-muted",
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
