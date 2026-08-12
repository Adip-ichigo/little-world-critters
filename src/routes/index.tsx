import { createFileRoute, Link } from "@tanstack/react-router";
import { animals } from "@/data/animals";
import { AnimalSilhouette } from "@/components/AnimalSilhouette";
import { PawBackdrop } from "@/components/PawBackdrop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Little Zoo — a small world made for you" },
      {
        name: "description",
        content:
          "A tiny, cozy virtual zoo. Pick a little friend and see what they have to say.",
      },
      { property: "og:title", content: "Your Little Zoo" },
      {
        property: "og:description",
        content: "Pick a little friend. They have something to tell you.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen px-5 pb-20 pt-16 sm:pt-24">
      <PawBackdrop />

      <header className="animate-rise mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
          Ten little friends are waiting
        </span>
        <h1 className="mt-6 text-4xl leading-tight text-foreground sm:text-6xl">
          Welcome to your little zoo. <span className="whitespace-nowrap">🐾</span>
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Pick a little friend. They have something to tell you.
        </p>
        <p className="mt-2 text-sm text-muted-foreground/80">Made especially for you ♡</p>
      </header>

      <section
        aria-label="Choose an animal"
        className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5"
      >
        {animals.map((animal, i) => (
          <Link
            key={animal.slug}
            to="/zoo/$slug"
            params={{ slug: animal.slug }}
            style={{ animationDelay: `${80 + i * 55}ms` }}
            className="animate-rise group flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-border/70 bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/30 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-20 sm:w-20">
              <AnimalSilhouette slug={animal.slug} className="h-9 w-9 sm:h-11 sm:w-11" />
            </span>
            <span className="text-sm font-semibold text-foreground sm:text-base">
              {animal.name}
            </span>
          </Link>
        ))}
      </section>

      <footer className="mx-auto mt-16 max-w-3xl text-center text-xs text-muted-foreground/70">
        Made with love by Adip
      </footer>
    </main>
  );
}
