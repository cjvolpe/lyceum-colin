// builtin

// external

// internal
import { TestRanking } from "./implementations/test.js";
import type { RelevanceRanking } from "./relevance.js";


let relevance: RelevanceRanking;

if (process.env.NODE_ENV === "test") {
    relevance = new TestRanking();
} else {
    throw new Error("This application isn't meant to be run outside of test mode!");
}

export { relevance };