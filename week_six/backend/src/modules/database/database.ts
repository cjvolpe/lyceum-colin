// builtin

import type { Poem, PoemType, Process, Task } from "../../globals/types.js";

// external

// internal


export interface Database {
    addPoem(poem: Poem): Promise<Task>;
    getAllPoems(): Promise<Process<Poem[]>>;
    getAllByPoemType(type: PoemType): Promise<Process<Poem[]>>;
    clear(): Promise<Task>;
}