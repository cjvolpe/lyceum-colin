// builtin

import type { Poem, Task, Process, PoemType } from "../../../globals/types.js";
import type { Database } from "../database.js";

// external

// internal


export class TestDatabase implements Database {
    private poems: Poem[] = [];

    async addPoem(poem: Poem): Promise<Task> {
        try {
            this.poems.push(poem);
            return { success: true, data: undefined };
        } catch (error) {
            return { success: false, error: error instanceof Error ? error : new Error(String(error)) };
        }
    }

    async getAllPoems(): Promise<Process<Poem[]>> {
        try {
            return { success: true, data: [...this.poems] };
        } catch (error) {
            return { success: false, error: error instanceof Error ? error : new Error(String(error)) };
        }
    }

    async getAllByPoemType(type: PoemType): Promise<Process<Poem[]>> {
        try {
            const filtered = this.poems.filter(poem => poem.type === type);
            return { success: true, data: filtered };
        } catch (error) {
            return { success: false, error: error instanceof Error ? error : new Error(String(error)) };
        }
    }

    async clear(): Promise<Task> {
        this.poems = [];

        return { success: true, data: undefined };
    }
}