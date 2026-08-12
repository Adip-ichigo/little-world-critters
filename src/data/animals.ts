/**
 * ─────────────────────────────────────────────────────────────
 *  THE ONLY FILE YOU NEED TO EDIT TO ADD REAL PHOTOS & VIDEOS
 * ─────────────────────────────────────────────────────────────
 *
 * Media lives in the `public/` folder, so you can drop files in
 * through GitHub without touching any code:
 *
 *   public/assets/images/rabbit/rabbit1.jpg   (photo slot 1)
 *   public/assets/videos/rabbit/rabbit1.mp4   (video for slot 1)
 *
 * Paths are generated automatically from the animal `slug` and the
 * slot number below. If a file does not exist yet, the site shows a
 * tasteful placeholder instead — nothing breaks.
 *
 * To change how many slots an animal has, change `slots` (3 or 4).
 * To use a different image extension, change IMAGE_EXT below.
 */

export const IMAGE_EXT = "jpg"; // jpg | png | webp
export const VIDEO_EXT = "mp4";

export type MediaSlot = {
  /** 1-based slot index */
  index: number;
  /** e.g. /assets/images/rabbit/rabbit2.jpg */
  image: string;
  /** e.g. /assets/videos/rabbit/rabbit2.mp4 */
  video: string;
  /** e.g. "Rabbit 2" */
  label: string;
  /** Short warm message shown under the video */
  message: string;
};

export type Animal = {
  name: string;
  slug: string;
  /** Short title shown at the top of the animal's section */
  title: string;
  /** One-line personality note */
  personality: string;
  /** Number of photo/video slots (3 or 4) */
  slots: number;
};

export const animals: Animal[] = [
  {
    name: "Rabbit",
    slug: "rabbit",
    title: "Welcome to the Bunny Burrow",
    personality: "Gentle, soft, and always a little comforting.",
    slots: 4,
  },
  {
    name: "Cat",
    slug: "cat",
    title: "Welcome to the Sunlit Windowsill",
    personality: "Playful, confident, and mildly sarcastic.",
    slots: 4,
  },
  {
    name: "Dog",
    slug: "dog",
    title: "Welcome to the Happy Meadow",
    personality: "Energetic, affectionate, endlessly loving.",
    slots: 4,
  },
  {
    name: "Fox",
    slug: "fox",
    title: "Welcome to the Quiet Woods",
    personality: "Clever, confident, a little mysterious.",
    slots: 4,
  },
  {
    name: "Panda",
    slug: "panda",
    title: "Welcome to the Bamboo Grove",
    personality: "Calm, gentle, unhurried.",
    slots: 4,
  },
  {
    name: "Otter",
    slug: "otter",
    title: "Welcome to the River Bend",
    personality: "Chaotic, funny, entirely unserious.",
    slots: 4,
  },
  {
    name: "Deer",
    slug: "deer",
    title: "Welcome to the Morning Clearing",
    personality: "Gentle, sweet, peaceful.",
    slots: 4,
  },
  {
    name: "Mongoose",
    slug: "mongoose",
    title: "Welcome to the Warm Burrowlands",
    personality: "Brave, witty, quietly protective.",
    slots: 4,
  },
  {
    name: "Porcupine",
    slug: "porcupine",
    title: "Welcome to the Little Thicket",
    personality: "Quiet, shy, unexpectedly cute.",
    slots: 4,
  },
  {
    name: "Giraffe",
    slug: "giraffe",
    title: "Welcome to the Tall Canopy",
    personality: "Warm, optimistic, reassuring.",
    slots: 4,
  },
];

export function getAnimal(slug: string): Animal | undefined {
  return animals.find((a) => a.slug === slug);
}

export function getSlots(animal: Animal): MediaSlot[] {
  return Array.from({ length: animal.slots }, (_, i) => {
    const index = i + 1;
    return {
      index,
      image: `/assets/images/${animal.slug}/${animal.slug}${index}.${IMAGE_EXT}`,
      video: `/assets/videos/${animal.slug}/${animal.slug}${index}.${VIDEO_EXT}`,
      label: `${animal.name} ${index}`,
    };
  });
}
