"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-brand-gradient">Award</span>
            <span className="text-foreground">Flow</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/transfer-matrix"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Transfer Matrix
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
