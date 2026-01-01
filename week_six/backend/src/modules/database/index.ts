// builtin

// external

// internal
import type { Database } from "./database.js";
import { TestDatabase } from "./implementations/test.js";


let database: Database;

if (process.env.NODE_ENV === "test") {
    database = new TestDatabase();
} else {
    throw new Error("This application isn't meant to be run outside of test mode!");
}

export { database };