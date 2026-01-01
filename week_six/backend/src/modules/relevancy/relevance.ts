// builtin

// external

// internal
import type { Poem, Process } from "../../globals/types.js";


export interface RelevanceRanking {
    rankByRelevance(poems: Poem[], query: string): Promise<Process<Poem[]>>;
}