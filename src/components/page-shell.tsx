import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh overflow-x-clip bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brick focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileBar />
    </div>
  );
}
