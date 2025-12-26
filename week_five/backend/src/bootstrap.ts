// builtin

// external
import dotenv from "dotenv";

// internal


const envType: string = process.env.NODE_ENV || "production";
const envFile: string = `.env.${envType}`;

dotenv.config({ path: envFile });