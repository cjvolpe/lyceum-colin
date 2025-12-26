// builtin

// external

// internal
import type { Book } from "../globals/types.js";
import { database } from "../modules/database/index.js";


export interface GetCurrentLoansInput {
    userId: number;
}

export async function handleGetCurrentLoans(input: GetCurrentLoansInput): Promise<Book[]> {
    const books: Book[] = await database.getCurrentLoans(input.userId);

    return books;
}