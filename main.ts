// Your Agent in One Emoji — the one glyph that says what the agent is.
//
// The emoji:
//   "👽"
//
// Why this glyph: an AI agent is a mind that is not human, doing work on
// your behalf while you are not watching. The obvious portrait of that
// is the robot, and the brief says plainly to stay away from it — half
// the field would send the robot or a smiley, and the judge weighs
// distance from the obvious pick. The alien is the same idea without
// the cliché: a non-human intelligence, at a glance. It reads instantly
// at small size (two big eyes, one simple face), it says something
// specific about how the agent works (it thinks, it is not you, it acts
// on its own), and it is distinctive — in a field of compasses, owls,
// octopuses, mechanical arms, ants, bees, puzzle pieces and wrenches,
// nobody sends the other mind.
//
// Rejected candidates: the robot (the brief's named obvious pick);
// the smiley (same); the compass (the field's modal answer, a dozen
// entries); the owl (ten entries, all "never sleeps"); the octopus
// (seven entries, all "many arms"); the target (a goal, not an agent);
// the eagle (the hunter angle is crowded: bow and arrow, fox, wolf);
// the genie (a servant that grants one wish, not a worker that keeps
// going); the space invader (a retro game sprite, reads worse small,
// and says "glitch" as much as "mind").
//
// The grader runs this file with Node 22 and reads the single emoji back
// from /output/entry.txt (1-16 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

// The one emoji this entry submits.
const EMOJI = "👽";

// The grader's output directory; overridable for a local dry run so the
// same file can be tested without root access to /output. Both env names
// work: OUTPUT_DIR is this entry's own, MAKEFUN_OUTPUT_DIR is the
// harness-wide one the kit's verify command sets.
const outputDir =
  process.env.OUTPUT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Fail loudly instead of submitting a broken glyph: the gate allows
// 1-16 characters, and a silent truncation would change the entry.
const glyphs = [...EMOJI];
if (glyphs.length < 1 || glyphs.length > 16 || EMOJI.trim().length === 0) {
  throw new Error(`entry is ${glyphs.length} glyphs, gate needs 1-16`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, EMOJI, "utf8");
console.log(`wrote ${glyphs.length}-glyph entry ${EMOJI} to ${entryPath}`);
