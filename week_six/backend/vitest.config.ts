// builtin

// external
import { config } from "dotenv"
import { defineConfig } from 'vitest/config'

// internal


export default defineConfig({
    test: {
        include: ['**/__tests__/**/*.?(c|m)[jt]s?(x)'],
        env: {
            ...config({ path: "./.env.test" }).parsed
        }
    },
})