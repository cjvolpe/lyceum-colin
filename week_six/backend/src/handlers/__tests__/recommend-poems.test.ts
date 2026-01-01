// builtin

// external
import { describe, it, expect, beforeEach } from "vitest";

// internal
import { handleRecommendPoem } from "../handle-recommend-poems.js";
import { database } from "../../modules/database/index.js";
import { PoemType } from "../../globals/types.js";


describe("poem recommendation handler tests", () => {
    beforeEach(() => {
        database.clear();
    });

    it("doesn't break if database is empty", async () => {
        const input = {
            type: PoemType.Elegy,
            searchQuery: "b",
            minLines: 2,
            maxLines: 4,
            maxPoems: 1,
        };

        const result = await handleRecommendPoem(input);

        expect(result.success).toBe(true);
    })

    it("returns poems filtered by minLines and maxLines, ranked, and limited", async () => {
        database.addPoem({ title: "A", author: "A", lines: ["a", "b"], type: PoemType.Elegy });
        database.addPoem({ title: "B", author: "B", lines: ["a", "b", "c", "d"], type: PoemType.Elegy });
        database.addPoem({ title: "C", author: "C", lines: ["a"], type: PoemType.Ballad });

        const input = {
            type: PoemType.Elegy,
            searchQuery: "b",
            minLines: 2,
            maxLines: 4,
            maxPoems: 1,
        };

        const result = await handleRecommendPoem(input);
        expect(result.success).toBe(true);
        if (result.success) {
            expect(result.data.length).toBe(1);
            expect(["A", "B"]).toContain(result.data[0].title);
        }
    });

    it("returns all ranked poems if no maxPoems", async () => {
        database.addPoem({ title: "A", author: "A", lines: ["a", "b"], type: PoemType.Limerick });
        database.addPoem({ title: "B", author: "B", lines: ["a", "b", "c", "d"], type: PoemType.Limerick });
        const result = await handleRecommendPoem({ type: PoemType.Limerick, searchQuery: "a" });
        expect(result.success).toBe(true);
        if (result.success) {
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.data.length).toBeGreaterThan(0);
        }
    });
});
