// builtin

// external
import { createClient, SupabaseClient, type User } from '@supabase/supabase-js'
import type { Book } from '../../globals/types.js';

// internal

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY


export class Database {
    private client: SupabaseClient;

    constructor() {
        if (!SUPABASE_URL) throw new Error("Environment variable SUPABASE_URL is not set!");
        if (!SUPABASE_KEY) throw new Error("Environment variable SUPABASE_KEY is not set!");

        this.client = createClient(SUPABASE_URL, SUPABASE_KEY);
    }

    public async getCurrentLoans(userId: number): Promise<Book[]> {
        throw new Error("TODO");
    }

    public async getAllBorrowedUsers(bookId: number): Promise<User[]> {
        throw new Error("TODO");
    }

}