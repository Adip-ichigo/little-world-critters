# Adding your photos and videos

Nothing in the code needs to change — just drop files here with the right names.

## Photos

```
public/assets/images/<animal>/<animal><number>.jpg
```

Examples:

```
public/assets/images/rabbit/rabbit1.jpg
public/assets/images/rabbit/rabbit2.jpg
public/assets/images/cat/cat1.jpg
```

## Videos

```
public/assets/videos/<animal>/<animal><number>.mp4
```

Examples:

```
public/assets/videos/rabbit/rabbit1.mp4
public/assets/videos/cat/cat3.mp4
```

Photo `N` always opens video `N` for the same animal, so `rabbit2.jpg` opens
`rabbit2.mp4`.

## Animals and slots

The 10 animals: rabbit, cat, dog, fox, panda, otter, deer, mongoose,
porcupine, giraffe — each with 4 slots (1–4).

Missing files are fine: the site shows a clean placeholder instead of breaking.

## Changing things

- Number of slots, titles, personality lines, or file extension:
  edit `src/data/animals.ts` (the only config file).
- Silhouette artwork: edit `src/components/AnimalSilhouette.tsx`.
