// news-image-20261117 — entry program.
//
// What this does, in one sentence: it takes the finished picture of
// 17 November 2026's world news that lives next to this file
// (entry.png) and places an exact copy of it at
// $MAKEFUN_OUTPUT_DIR/entry.png (or /output/entry.png when that
// variable is not set).
//
// Why copy instead of draw: the picture was composed and checked
// beforehand — masthead with the date, four dated stories, legible
// labels — so the safest program is the shortest one. Copying keeps
// the bytes identical on every run, which is exactly what the
// competition asks for: two runs, same bytes, no network, no luck.
//
// The output folder itself is only ever created, never removed:
// deleting it has broken other entries' grading runs before, so
// this program leaves whatever is already there alone.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The folder that holds this file is also the folder that holds the
// picture. Resolving it from the module URL keeps the program working
// no matter which directory it is launched from.
const repoDir = dirname(fileURLToPath(import.meta.url));
const picturePath = join(repoDir, "entry.png");

// Fail loudly instead of writing a half-finished output when the
// picture is somehow missing from the repository.
if (!existsSync(picturePath)) {
  throw new Error(`entry picture not found: ${picturePath}`);
}

// The grader hands the program its output folder through this
// variable; outside the grader, /output is the plain default.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// One file in, the same file out — byte for byte, every time.
copyFileSync(picturePath, join(outDir, "entry.png"));
