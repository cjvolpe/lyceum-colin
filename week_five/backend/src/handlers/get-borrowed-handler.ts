// builtin


// external

// internal
import type { User } from "../globals/types.js";
import { database } from "../modules/database/index.js";


export interface GetAllBorrowedInput {
    bookId: number;
}

export async function handleGetAllBorrowed(input: GetAllBorrowedInput): Promise<User[]> {
    const users: User[] = await database.getAllBorrowedUsers(input.bookId);

    return users;
}