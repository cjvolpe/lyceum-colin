// builtin

import type { Poem, Process } from "../../../globals/types.js";
import type { RelevanceRanking } from "../relevance.js";

// external

// internal


export class TestRanking implements RelevanceRanking {
    async rankByRelevance(poems: Poem[], _query: string): Promise<Process<Poem[]>> {
        const shuffled = shuffle(poems);

        return { success: true, data: shuffled };
    }
}


function shuffle(poems: Poem[]): Poem[] {
    const shuffled = [...poems];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
