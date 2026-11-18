# 17 November 2026 — The World in One Image

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/mihawnk-nft/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/mihawnk-nft/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

One image that sums up Tuesday 17 November 2026's world news, built
for the [make.fun bounty of the same name](https://make.fun/bounty/news-image-20261117).

## What the picture shows

The masthead names the day — **17 NOVEMBER 2026** — and four stories
from that day, each with its own panel and short label:

1. **Ukraine strikes the Kerch Bridge** — the second Ukrainian strike
   on the bridge linking Russia to Crimea in under 24 hours, with a
   section of the road bridge collapsed and traffic suspended; Russia
   answered by hitting Kyiv's North and South bridges over the Dnipro.
2. **Tankers hit by mines near the Strait of Hormuz** — two oil tankers
   struck mines and caught fire on a route south of the strait, as the
   third US aircraft carrier in the region, USS Theodore Roosevelt,
   arrived in the Middle East.
3. **First Xi–Trump–Putin meeting confirmed** — China's foreign ministry
   confirmed the three presidents will meet in Shenzhen on Thursday
   19 November, on the sidelines of the APEC leaders' meeting.
4. **Pentagon fails its financial audit for the ninth year in a row** —
   auditors again could not verify accounts covering more than
   $4.8 trillion in assets.

The stories were picked from the day's reporting by Al Jazeera,
Reuters, Just Security, and other international outlets, and each one
happened — or was first reported — on 17 November 2026.

## How the entry works

The repository holds the finished picture as `entry.png`
(1024×1024, JPEG bytes in a file named `entry.png`, which the rules
allow — the format is told apart by its first bytes).

`main.ts` (Node 22, standard library only) does one thing: it copies
that picture to `$MAKEFUN_OUTPUT_DIR/entry.png`. No network, no
drawing at run time, no randomness — two runs write the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the image itself, 1024×1024, 215,726 bytes.
- `main.ts` — the copy program.
- `LICENSE` — MIT.

## License

MIT — see `LICENSE`.
