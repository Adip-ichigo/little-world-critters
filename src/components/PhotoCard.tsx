import { useState } from "react";
import { Play, ImageIcon } from "lucide-react";
import type { MediaSlot } from "@/data/animals";

type Props = {
  slot: MediaSlot;
  animalName: string;
  delay?: number;
  onOpen: (slot: MediaSlot) => void;
};

export function PhotoCard({ slot, animalName, delay = 0, onOpen }: Props) {
  const [missing, setMissing] = useState(false);

  return (
    <button
      onClick={() => onOpen(slot)}
      style={{ animationDelay: `${delay}ms` }}
      className="animate-rise group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border/70 bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {missing ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-soft p-6 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
            <ImageIcon className="h-6 w-6" />
          </span>
          <span className="font-display text-lg text-foreground">Photo slot {slot.index}</span>
          <span className="max-w-[90%] break-all text-[11px] leading-relaxed text-muted-foreground">
            {slot.image}
          </span>
        </div>
      ) : (
        <img
          src={slot.image}
          alt={`${animalName} ${slot.index}`}
          loading="lazy"
          decoding="async"
          onError={() => setMissing(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-foreground/70 to-transparent px-4 pb-4 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-sm font-medium text-background">
          {animalName} {slot.index}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft">
          <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
        </span>
      </div>

      <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-primary shadow-soft transition-transform duration-300 group-hover:scale-110 sm:hidden">
        <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
      </span>
    </button>
  );
}
