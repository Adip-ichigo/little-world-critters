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

const messagesBySlug: Record<string, string[]> = {
  rabbit: [
    "Hey Zisa, you don't have to figure everything out right now. Just stay here for a little while. 🤍",
    "This little one is soft in every way that matters, kind of like someone I know.",
    "Zisa, if today feels heavy, let this bunny carry a tiny bit of it for you.",
    "Sometimes the bravest thing you can do is pause. So pause here with us.",
  ],
  cat: [
    "Zisa, this little guy has one very important job today: getting at least one smile out of you.",
    "No serious thoughts for the next thirty seconds, Zisa. Just look at this tiny idiot. 😂",
    "Pretend this cat is personally judging your bad day and finding it very unimpressive.",
    "Zisa, you're allowed to have quiet days. You're still you, and you're still very loved.",
  ],
  dog: [
    "This one would wait by the door forever just to see you, Zisa.",
    "If happiness had a tail, it would wag exactly like this.",
    "Zisa, you deserve the kind of welcome this dog gives the world.",
    "No matter what kind of day it is, this face thinks you're wonderful.",
  ],
  fox: [
    "Zisa, some hearts are wild and soft at the same time. Yours is one of them.",
    "This fox is clever, but not clever enough to hide how much it likes you.",
    "A little mischief, a little warmth, a lot of love. Sounds familiar, doesn't it?",
    "Zisa, keep your heart curious. It suits you.",
  ],
  panda: [
    "Slow days are still good days, Zisa. This panda fully agrees.",
    "You don't need to rush. You don't need to prove anything. You just need to be here.",
    "Zisa, sometimes doing nothing with someone you love is the whole point.",
    "This panda believes in naps, snacks, and you. In that order.",
  ],
  otter: [
    "Zisa, if today feels chaotic, just hold this otter's little hand for a second.",
    "This one is a complete disaster and absolutely perfect. Relatable, honestly.",
    "No plan, no problem. Just float for a while, Zisa.",
    "You make life feel more playful just by being in it.",
  ],
  deer: [
    "Zisa, you move through the world so gently. It's one of my favorite things about you.",
    "Some beauty doesn't ask for attention. It just is. Like you.",
    "This deer hopes your day feels as peaceful as a quiet morning.",
    "Zisa, you're allowed to be soft. The world needs more of that.",
  ],
  mongoose: [
    "Small, brave, and secretly full of heart. Remind you of anyone, Zisa?",
    "This little one doesn't back down from anything, except maybe a bad mood.",
    "Zisa, you've got more fight in you than you realize, and more love too.",
    "Even the bravest creatures need a safe place to rest. This is yours.",
  ],
  porcupine: [
    "Zisa, your soft parts are worth protecting, and your sharp parts are pretty great too.",
    "This one looks prickly but is mostly just trying its best. Same, honestly.",
    "You don't have to be easy to love to be deeply loved, Zisa.",
    "Under every little defense, there's something surprisingly tender.",
  ],
  giraffe: [
    "Zisa, you see things other people miss. That's a gift, even when it feels like a lot.",
    "This giraffe believes in you from way up here. That's a lot of belief.",
    "Keep your head up, but only because the view is better, not because you have to.",
    "Zisa, the world looks kinder from up here with you.",
  ],
};

export function getSlots(animal: Animal): MediaSlot[] {
  const messages = messagesBySlug[animal.slug] ?? [];
  return Array.from({ length: animal.slots }, (_, i) => {
    const index = i + 1;
    return {
      index,
      image: `/assets/images/${animal.slug}/${animal.slug}${index}.${IMAGE_EXT}`,
      video: `/assets/videos/${animal.slug}/${animal.slug}${index}.${VIDEO_EXT}`,
      label: `${animal.name} ${index}`,
      message: messages[i] ?? "",
    };
  });
}
