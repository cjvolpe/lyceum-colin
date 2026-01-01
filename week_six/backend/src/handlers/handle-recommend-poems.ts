// builtin

// external

// internal
import type { Poem, PoemType, Process } from "../globals/types.js";
import { database } from "../modules/database/index.js";
import { relevance } from "../modules/relevancy/index.js";


interface PoemRecommendationInput {
    type: PoemType;
    searchQuery: string;
    minLines?: number;
    maxLines?: number;
    maxPoems?: number;
}


export async function handleRecommendPoem(input: PoemRecommendationInput): Promise<Process<Poem[]>> {
    const poemsResult = await database.getAllByPoemType(input.type);
    if (!poemsResult.success) {
        return poemsResult;
    }
    let poems = poemsResult.data;

    if (typeof input.minLines === "number") {
        poems = poems.filter(poem => input.minLines !== undefined ? poem.lines.length >= input.minLines : true);
    }
    if (typeof input.maxLines === "number") {
        poems = poems.filter(poem => input.maxLines !== undefined ? poem.lines.length <= input.maxLines : true);
    }

    const rankedResult = await relevance.rankByRelevance(poems, input.searchQuery);
    if (!rankedResult.success) {
        return rankedResult;
    }
    let rankedPoems = rankedResult.data;

    if (typeof input.maxPoems === "number") {
        rankedPoems = rankedPoems.slice(0, input.maxPoems);
    }

    return { success: true, data: rankedPoems };
}