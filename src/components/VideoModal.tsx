import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { MediaSlot } from "@/data/animals";

type Props = {
  slot: MediaSlot | null;
  animalName: string;
  onClose: () => void;
};

export function VideoModal({ slot, animalName, onClose }: Props) {
  const [failed, setFailed] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setFailed(false);
  }, [slot?.video]);

  useEffect(() => {
    if (!slot) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [slot, onClose]);

  if (!slot) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${animalName} ${slot.index} video`}
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="animate-scale-in glass-panel relative w-full max-w-3xl overflow-hidden rounded-3xl p-2 shadow-glow sm:p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/85 text-foreground shadow-soft transition hover:bg-background hover:scale-105"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-hidden rounded-2xl bg-secondary">
          {failed ? (
            <div className="flex aspect-video flex-col items-center justify-center gap-2 px-6 text-center">
              <p className="font-display text-xl text-foreground">
                This little one is still finding their words
              </p>
              <p className="text-sm text-muted-foreground">
                Video slot: <code className="text-primary">{slot.video}</code>
              </p>
            </div>
          ) : (
            <video
              key={slot.video}
              src={slot.video}
              controls
              autoPlay
              playsInline
              preload="metadata"
              onError={() => setFailed(true)}
              className="aspect-video h-auto max-h-[75vh] w-full bg-black"
            />
          )}
        </div>

        <p className="px-3 py-3 text-center text-sm text-muted-foreground">
          {animalName} {slot.index}
        </p>

        {slot.message && (
          <p className="animate-fade-in-up px-4 pb-5 text-center text-base font-medium leading-relaxed text-foreground sm:px-6 sm:pb-6 sm:text-lg">
            {slot.message}
          </p>
        )}
      </div>
    </div>
  );
}
