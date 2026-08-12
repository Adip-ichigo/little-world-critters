# Cozy Critter Corner

Build a complete, polished, responsive personal website for my girlfriend.

This is a private/personal gift website, not a commercial zoo website.

The concept is an interactive little virtual zoo where she can choose an animal, explore different photos of that animal, and click a specific animal photo to watch a video associated with that exact animal.

The website should feel like a small, beautiful world made specifically for her.

IMPORTANT:
Build the complete website structure, UI, interactions, animations, responsive design, and content system now, but DO NOT add the actual animal photographs or animal videos. Use clearly marked placeholders for them.

I will add the real photos and videos myself later through GitHub.

The project must therefore be designed so that replacing placeholder images/videos with real files is extremely easy and does NOT require rewriting the website's core logic.

1. OVERALL FEEL

The website should feel:

Personal

Warm

Cozy

Elegant

Modern

Cute

Slightly magical

Interactive

Calm

Romantic in a subtle way

It should NOT feel:

Like a children's website

Like a generic zoo website

Overly childish

Overly pink

Extremely romantic or cheesy

Like a mental-health website

Like an educational zoo website

The purpose is simply to give her a beautiful little place to explore and enjoy.

Do not mention exams, academic failure, studying, depression, trauma, or mental health anywhere in the website.

The animal videos will later contain their own messages, which may be comforting, funny, affectionate, complimentary, or encouraging.

2. COLOR THEME

The main color should be a modern, attractive blue similar to the blue used for the ChatGPT Upgrade button/interface.

I do NOT want:

Navy blue

Sky blue

Cyan

Extremely dark blue

Neon blue

Use a rich modern medium/deep blue as the primary accent.

A starting color around:

#3B82F6

is acceptable, but feel free to adjust the exact shade slightly if necessary to make the overall design more beautiful.

Supporting colors should include:

White

Very light blue

Soft gray

Subtle blue gradients

The site should have excellent contrast and readability.

Do not make every element blue. Use blue as the primary visual identity and use white/light backgrounds to keep the site clean.

3. ANIMALS

There must be exactly these 10 animal categories:

Rabbit

Cat

Dog

Fox

Panda

Otter

Deer

Mongoose

Porcupine

Giraffe

IMPORTANT:

DO NOT add any birds.

DO NOT add:

Koala

Bear

Hamster

Do not create additional animal categories.

Each animal can have a subtle personality reflected in its visual presentation:

Rabbit:
Gentle, soft, comforting

Cat:
Playful, slightly sarcastic, confident

Dog:
Energetic, affectionate, loving

Fox:
Clever, confident, slightly mysterious

Panda:
Calm, gentle, comforting

Otter:
Chaotic, funny, playful

Deer:
Gentle, sweet, peaceful

Mongoose:
Brave, witty, protective

Porcupine:
Quiet, cute, slightly shy, comforting

Giraffe:
Warm, optimistic, reassuring

These personalities are primarily design/content direction. Do not fill the website with large amounts of text.

4. HOMEPAGE

The homepage must NOT contain animal photographs.

This is extremely important.

The first screen should primarily contain:

A welcoming heading.

Possible wording:

"Welcome to your little zoo. 🐾"

or

"Pick a little friend. They have something to tell you. 🐾"

Choose the version that fits the design best.

Underneath, optionally include a subtle line such as:

"Made especially for you ♡"

or:

"Made with love by Adip"

Do not make the creator's name the focus.

5. ANIMAL SELECTION UI

The homepage should contain a grid of exactly 10 animal selection cards/buttons.

Each card should be square or approximately square.

Each card contains ONLY:

A clean animal silhouette/icon

The animal name

Example:

[ Rabbit silhouette ]

Rabbit

[ Cat silhouette ]

Cat

etc.

DO NOT show animal photographs on these cards.

The silhouettes should be visually attractive and consistent.

Prefer clean silhouette artwork/icons rather than random emoji if possible.

If actual silhouette assets are required, create an appropriate placeholder/icon system that I can replace later.

6. ANIMAL CARD DESIGN

The animal cards should feel polished.

Normal state:

Clean background

Blue accent

Animal silhouette

Animal name

Rounded corners

Subtle shadow

Hover state:

Slight upward movement

Slight scale increase

Slightly stronger shadow

Smooth transition

Subtle blue glow/accent

Click state:

Smooth transition into that animal's section

Do NOT use excessive animations.

On mobile, make the cards comfortable to tap.

7. ANIMAL SECTION

When the user clicks an animal, open that animal's dedicated section/page/view.

For example:

Rabbit

At the top:

"Welcome to the Bunny Burrow"

or another short animal-specific title.

Then show a gallery containing multiple placeholder photographs.

IMPORTANT:

Each animal should have 3–4 photo slots.

For example:

Rabbit:

rabbit1

rabbit2

rabbit3

rabbit4

Cat:

cat1

cat2

cat3

cat4

and so on.

Use placeholder image containers for now.

I will later replace these placeholders with actual photographs.

8. DIFFERENT ANIMAL PHOTOS

The concept is that each photo represents a different individual animal.

For example:

Cat:

Cat Photo 1 → Cat Video 1

Cat Photo 2 → Cat Video 2

Cat Photo 3 → Cat Video 3

Cat Photo 4 → Cat Video 4

The same structure applies to every animal.

The photos should therefore be presented as individual clickable cards rather than one generic gallery.

9. PHOTO CLICK → VIDEO

This is the most important interaction.

When the user clicks an animal photograph:

DO NOT navigate away from the website.

Instead, open a beautiful video modal/overlay.

The modal should:

Darken/blur the background slightly

Display the video prominently

Have rounded corners

Have a clear close button

Allow normal video controls

Work properly on mobile

Have a smooth opening animation

Have a smooth closing animation

The video should play within the website.

Example:

User chooses:

Rabbit

Then:

Rabbit Photo 1
Rabbit Photo 2
Rabbit Photo 3
Rabbit Photo 4

Click Rabbit Photo 2:

→ Open Rabbit Video 2

The exact mapping must always remain intact.

10. VIDEO SYSTEM

Each animal must support 3–4 video slots.

Use this structure conceptually:

Rabbit:
rabbit1.mp4
rabbit2.mp4
rabbit3.mp4
rabbit4.mp4

Cat:
cat1.mp4
cat2.mp4
cat3.mp4
cat4.mp4

Dog:
dog1.mp4
dog2.mp4
dog3.mp4
dog4.mp4

Fox:
fox1.mp4
fox2.mp4
fox3.mp4
fox4.mp4

Panda:
panda1.mp4
panda2.mp4
panda3.mp4
panda4.mp4

Otter:
otter1.mp4
otter2.mp4
otter3.mp4
otter4.mp4

Deer:
deer1.mp4
deer2.mp4
deer3.mp4
deer4.mp4

Mongoose:
mongoose1.mp4
mongoose2.mp4
mongoose3.mp4
mongoose4.mp4

Porcupine:
porcupine1.mp4
porcupine2.mp4
porcupine3.mp4
porcupine4.mp4

Giraffe:
giraffe1.mp4
giraffe2.mp4
giraffe3.mp4
giraffe4.mp4

Some slots may initially be empty.

The website MUST handle missing media gracefully.

For example, if only rabbit1.mp4 exists, rabbit2/rabbit3/rabbit4 should not create broken video elements.

11. CONTENT/MEDIA ARCHITECTURE

This is extremely important.

Separate the website's logic from its media.

I want a clean structure that makes it easy to replace:

Animal photos

Animal videos

Potentially silhouettes later

without changing the core JavaScript/application logic.

Use a centralized data structure/configuration for the animals.

For example, conceptually:

animals = [
{
name: "Rabbit",
slug: "rabbit",
images: [...],
videos: [...]
}
]

Do NOT scatter image/video paths throughout multiple components.

The goal is that I can later go into GitHub, replace/add files, and have the website use them easily.

If appropriate, create a clear assets or public structure such as:

assets/
images/
rabbit/
cat/
dog/
fox/
panda/
otter/
deer/
mongoose/
porcupine/
giraffe/

videos/
rabbit/
cat/
dog/
fox/
panda/
otter/
deer/
mongoose/
porcupine/
giraffe/

Use sensible filenames.

12. PLACEHOLDERS

Do NOT search for or embed random animal photographs/videos.

Instead, create tasteful placeholder visuals.

The placeholders should clearly communicate:

"Photo slot"

and:

"Video slot"

but should still look good in the final design.

I will replace them later.

Do not make the placeholder design ugly or unfinished-looking.

13. NAVIGATION

The website should feel like a single cohesive experience.

Suggested flow:

HOME
↓
Choose an animal
↓
Animal gallery
↓
Click individual animal
↓
Video modal
↓
Close
↓
Return to animal gallery
↓
Return to zoo/home

Provide a clear way to return to the main animal selection.

On mobile, make navigation easy.

Do not create unnecessary pages.

14. ANIMATIONS

Use subtle, polished animations.

Possible animations:

Fade-in on homepage

Cards gently appearing

Hover lift

Soft scale

Gallery transition

Modal fade/scale

Smooth navigation

Subtle floating decorative elements

Do NOT use:

Excessive bouncing

Constant moving backgrounds

Loud effects

Too many particles

Distracting animations

The site should feel premium.

15. OPTIONAL DECORATIVE DETAILS

You may add subtle decorative details such as:

Small paw-print patterns

Very subtle floating shapes

Soft blue gradients

Tiny sparkles

Soft shadows

Glass-like effects where appropriate

BUT keep them subtle.

The animal content should remain the focus.

16. RESPONSIVE DESIGN

The website MUST work beautifully on:

Desktop

Laptop

Tablet

Android phones

iPhones

The most important mobile experience is:

Homepage → animal selection → animal photos → video.

The animal cards should automatically rearrange into an appropriate grid.

The video modal must fit small screens.

No horizontal scrolling.

17. PERFORMANCE

Keep the site reasonably lightweight.

Do not load all videos immediately.

Videos should only be loaded/played when the user selects the corresponding animal/photo if technically practical.

Use lazy loading for images where appropriate.

Avoid unnecessary libraries.

18. TECHNOLOGY

Build the project using a modern web stack that is appropriate for Lovable and easy to maintain.

The final project MUST be exportable/syncable to GitHub.

I want to be able to continue editing the project through GitHub later.

Keep the code understandable and organized.

Do not introduce unnecessary backend infrastructure because this is primarily a static personal website.

19. GITHUB WORKFLOW

The final project should be easy to move to GitHub.

I want to eventually have:

GitHub repository
↓
Website files
↓
assets/images
↓
assets/videos
↓
Deploy through a suitable static hosting service

I want to be able to add new photos/videos later without rebuilding the entire website.

Please structure the project accordingly.

20. IMPORTANT FUTURE CONTENT

Later, I will create 3–4 videos for each animal.

The videos will feature the animals "talking" to her.

Examples of content styles:

Rabbit:
gentle and comforting

Cat:
playful and slightly sarcastic

Dog:
loving and energetic

Fox:
confident and clever

Panda:
calm and reassuring

Otter:
funny and chaotic

Deer:
soft and sweet

Mongoose:
brave and protective

Porcupine:
quiet and cute

Giraffe:
warm and optimistic

Do NOT create those videos now.

Just build the system that will display them.

21. PERSONALIZATION

The website should feel like someone intentionally made it for one specific person.

Use subtle personalization rather than huge romantic declarations.

Good:

"Made especially for you ♡"

Not:

"THE MOST BEAUTIFUL GIRL IN THE ENTIRE UNIVERSE!!!"

Keep the tone mature and genuine.

22. FINAL USER EXPERIENCE

The ideal experience should be:

She opens the website.

She sees:

"Welcome to your little zoo. 🐾"

Then:

"Pick a little friend."

She sees 10 square blue-themed animal buttons with silhouettes.

She clicks Rabbit.

She enters the rabbit section.

She sees several different rabbit photographs.

She clicks one.

A video opens.

That particular rabbit starts "talking" to her.

She closes it.

She can choose another rabbit or go back and choose another animal.

She can repeat the experience with cats, dogs, foxes, pandas, otters, deer, mongooses, porcupines, and giraffes.

The website should feel like a little interactive world rather than a collection of pages.

23. WHAT I WANT YOU TO DO NOW

Build the first complete version of this website based on the specification above.

Do not wait for me to provide the animal photos/videos.

Use polished placeholders.

Prioritize:

Beautiful UI

Correct navigation

Animal selection

Animal galleries

Photo-to-video mapping system

Responsive design

Easy media replacement

Smooth animations

Clean code

GitHub compatibility

Do not simplify the concept.

Do not remove the 3–4 photo/video slots per animal.

Do not add birds.

Do not add other animals.

Do not put animal photos on the homepage.

The homepage must use animal silhouettes, while the individual animal sections use the actual animal photos later.

Make the first version feel as close to a finished, polished gift website as possible even though the real media has not been added yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/11c5556e-d037-42be-8118-23211cafb0ae).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
