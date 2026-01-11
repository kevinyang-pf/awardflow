import Link from "next/link";
import { programs, partners, relationships } from "@/data/transfer-partners";

export default function Home() {
  const airlineCount = partners.filter((p) => p.type === "airline").length;
  const hotelCount = partners.filter((p) => p.type === "hotel").length;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-gradient py-24 md:py-32">
        <div className="container max-w-screen-2xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              MAXIMIZE YOUR POINTS
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Explore transfer partner relationships between credit card
              programs and airline & hotel loyalty programs. Find the best
              transfer ratios and unlock more value from your points.
            </p>
            <Link
              href="/transfer-matrix"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-white text-[var(--color-brand-secondary)] hover:bg-white/90 transition-colors"
            >
              View Transfer Matrix
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -right-10 top-40 w-60 h-60 rounded-full bg-white/5" />
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)]">
                {programs.length}
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">
                Card Programs
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)]">
                {airlineCount}
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">
                Airline Partners
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)]">
                {hotelCount}
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">
                Hotel Partners
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)]">
                {relationships.length}
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">
                Transfer Options
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-screen-2xl px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
            Supported Programs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {programs.map((program) => (
              <div
                key={program.id}
                className="flex flex-col items-center p-4 rounded-lg bg-background border border-border/50"
              >
                <div
                  className="w-10 h-10 rounded-full mb-3"
                  style={{ backgroundColor: program.color }}
                />
                <span className="text-sm font-medium text-center">
                  {program.shortName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-screen-2xl px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Ready to explore?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Click on any program to see all its transfer partners, or click on a
            partner to see which cards transfer to it.
          </p>
          <Link
            href="/transfer-matrix"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-brand-gradient text-white hover:opacity-90 transition-opacity"
          >
            Open Transfer Matrix
          </Link>
        </div>
      </section>
    </div>
  );
}
