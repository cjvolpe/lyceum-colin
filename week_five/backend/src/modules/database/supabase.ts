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
        const { data, error } = await this.client
            .from('loans')
            .select('user_id, ongoing, book:books(*)')
            .eq('user_id', userId)
            .eq('ongoing', true);

        console.log(data);

        if (error) throw error;
        if (!data) return [];

        return data.map((row) => (row.book as unknown as Book));
    }

    public async getAllBorrowedUsers(bookId: number): Promise<User[]> {
        const { data, error } = await this.client
            .from('loans')
            .select('book_id, user:users(*)')
            .eq('book_id', bookId);

        console.log(data);

        if (error) throw error;
        if (!data) return [];

        return data.map((row) => (row.user as unknown as User));
    }
}