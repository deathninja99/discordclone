import {Pool} from "pg"

export const pool = new Pool({
    max: 10,
    min: 2,
    idleTimeoutMillis: 5000,
    connectionString: process.env.DATABASE_URL
})