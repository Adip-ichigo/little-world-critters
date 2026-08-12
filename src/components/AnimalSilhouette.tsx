/**
 * Simple, consistent animal silhouettes drawn as inline SVG.
 * To swap in your own artwork later, replace the path data below
 * (or render an <img> here) — nothing else in the app needs to change.
 */

type Props = { slug: string; className?: string };

const paths: Record<string, string> = {
  rabbit:
    "M34 6c3 0 5 4 5 12 0 6-1 11-3 14 6 4 10 11 10 18 0 9-7 14-16 14s-16-5-16-14c0-7 4-14 10-18-2-3-3-8-3-14C21 10 23 6 26 6c3 0 4 4 4 11h0c0-7 1-11 4-11z",
  cat: "M14 16l3 12c3-2 7-3 13-3s10 1 13 3l3-12-9 6c-2-1-4-1-7-1s-5 0-7 1l-9-6zM30 27c-10 0-17 6-17 14 0 8 7 13 17 13s17-5 17-13c0-8-7-14-17-14z",
  dog: "M13 14c4-2 7 1 9 5 2-1 5-2 8-2s6 1 8 2c2-4 5-7 9-5 3 2 2 8 0 12 2 3 3 7 3 11 0 9-8 15-20 15s-20-6-20-15c0-4 1-8 3-11-2-4-3-10 0-12z",
  fox: "M10 12l10 8c3-1 6-2 10-2s7 1 10 2l10-8-2 14c2 3 3 6 3 10 0 9-9 16-21 16S9 45 9 36c0-4 1-7 3-10L10 12z",
  panda:
    "M15 14c4 0 7 3 7 7 2-1 5-1 8-1s6 0 8 1c0-4 3-7 7-7s8 4 8 9-3 8-6 9c1 2 1 4 1 6 0 10-8 16-18 16s-18-6-18-16c0-2 0-4 1-6-3-1-6-4-6-9s4-9 8-9z",
  otter:
    "M30 8c8 0 13 6 13 14 0 3-1 6-2 8 5 4 8 9 8 14 0 8-8 12-19 12S11 52 11 44c0-5 3-10 8-14-1-2-2-5-2-8 0-8 5-14 13-14z",
  deer: "M12 6c3 5 5 8 9 10l1 4c-2 2-3 5-3 9 0 3 1 6 2 8-4 4-6 9-6 14 0 7 7 11 15 11s15-4 15-11c0-5-2-10-6-14 1-2 2-5 2-8 0-4-1-7-3-9l1-4c4-2 6-5 9-10-5 2-8 3-12 3-2 0-4 1-6 3-2-2-4-3-6-3-4 0-7-1-12-3z",
  mongoose:
    "M8 40c0-12 8-20 18-20 3 0 6 1 8 2 2-4 5-7 9-7 5 0 9 4 9 9 0 4-2 7-6 9 3 4 4 9 4 13 0 5-4 8-11 8H18c-6 0-10-4-10-14z",
  porcupine:
    "M8 44c0-4 1-8 3-11l-4-8 8 4 1-8 5 7 4-7 3 7 5-6 3 7 6-5 1 7 7-3-3 8c2 3 3 6 3 11 0 6-6 10-21 10S8 50 8 44z",
  giraffe:
    "M22 8c0-3 2-5 5-5s5 2 5 5v3c5 2 8 6 8 12v10c6 3 9 8 9 14 0 6-5 9-12 9H23c-7 0-12-3-12-9 0-6 3-11 9-14V23c0-6 3-10 8-12V8z",
};

export function AnimalSilhouette({ slug, className }: Props) {
  const d = paths[slug] ?? paths["rabbit"];
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true" fill="currentColor">
      <path d={d} />
    </svg>
  );
}
