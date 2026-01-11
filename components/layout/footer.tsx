export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:py-8 px-4 md:px-8 max-w-screen-2xl">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <a
              href="https://youtube.com/@KevinYang"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              Kevin Yang
            </a>
          </p>
          <p className="text-xs text-muted-foreground/60">
            All trademarks are property of their respective owners.
          </p>
        </div>

        <p className="text-xs text-muted-foreground/60">
          Data updated January 2026
        </p>
      </div>
    </footer>
  );
}
