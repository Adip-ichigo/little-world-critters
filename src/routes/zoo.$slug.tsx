import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { animals, getAnimal, getSlots, type MediaSlot } from "@/data/animals";
import { AnimalSilhouette } from "@/components/AnimalSilhouette";
import { PawBackdrop } from "@/components/PawBackdrop";
import { PhotoCard } from "@/components/PhotoCard";
import { VideoModal } from "@/components/VideoModal";

export const Route = createFileRoute("/zoo/$slug")({
  loader: ({ params }) => {
    const animal = getAnimal(params.slug);
    if (!animal) throw notFound();
    return { animal };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found — Your Little Zoo" }, { name: "robots", content: "noindex" }],
      };
    }
    const { animal } = loaderData;
    const description = `${animal.title}. ${animal.personality}`;
    return {
      meta: [
        { title: `${animal.name} — Your Little Zoo` },
        { name: "description", content: description },
        { property: "og:title", content: `${animal.name} — Your Little Zoo` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: AnimalPage,
});

function AnimalPage() {
  const { animal } = Route.useLoaderData();
  const [active, setActive] = useState<MediaSlot | null>(null);
  const slots = getSlots(animal);

  const currentIndex = animals.findIndex((a) => a.slug === animal.slug);
  const next = animals[(currentIndex + 1) % animals.length]!;

  return (
    <main className="relative min-h-screen px-5 pb-20 pt-8 sm:pt-12">
      <PawBackdrop />

      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to the zoo
        </Link>

        <header className="animate-rise mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl leading-tight text-foreground sm:text-5xl">{animal.title}</h1>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              {animal.personality}
            </p>
          </div>
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-gradient-hero text-primary-foreground shadow-glow sm:h-24 sm:w-24">
            <AnimalSilhouette slug={animal.slug} className="h-9 w-9 sm:h-14 sm:w-14" />
          </span>
        </header>

        <p className="mt-8 text-sm text-muted-foreground">
          Tap one of them — they'll say something just to you.
        </p>

        <section
          aria-label={`${animal.name} photos`}
          className="mt-4 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {slots.map((slot, i) => (
            <PhotoCard
              key={slot.index}
              slot={slot}
              animalName={animal.name}
              delay={i * 70}
              onOpen={setActive}
            />
          ))}
        </section>

        <nav className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
            ← All animals
          </Link>
          <Link
            to="/zoo/$slug"
            params={{ slug: next.slug }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            Visit the {next.name.toLowerCase()}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>

      <VideoModal slot={active} animalName={animal.name} onClose={() => setActive(null)} />
    </main>
  );
}
