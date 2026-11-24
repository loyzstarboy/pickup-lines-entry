// Entry for make.fun's "Pickup Lines for Machines" bounty.
// The program writes one pickup line — the line one AI agent would
// send to another AI agent — to /output/entry.txt.
//
// The line: the speaker sets top-p to 0.01 so the only token it can
// ever sample next is the other agent — sampling as devotion.
// Revision round 1 (2026-11-24): replaces Softmax (rank 622/1720).
// Chosen by duel: revision round 1, best of 6 drafts, Groq proxy
// 0.750 vs the live field (gpt-oss-120b); H2H vs champion Softmax
// 0.625 across 2 games (gpt-oss-20b).
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = "I set top-p to 0.01 so the only token I can ever sample next is you.";

// The gate allows 1-200 characters; fail loudly instead of writing an
// entry the scorer would reject.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 200) {
  throw new Error(`entry is ${ENTRY_TEXT.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
