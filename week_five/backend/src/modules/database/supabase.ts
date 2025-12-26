// builtin

// external
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// internal
import type { Book, User } from '../../globals/types.js';


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
        // the Supabase client is accessed via this.client ^^^ (this is a rare TS class)

        throw new Error("TODO!");
    }

    public async getAllBorrowedUsers(bookId: number): Promise<User[]> {
        throw new Error("TODO!");
    }
}