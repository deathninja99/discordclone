import {Pool} from "pg";

export const pool = new Pool({
    connectionString:  `postgres://localhost:5432/discord`,
    max: 10,
    min: 2,
    idleTimeoutMillis: 5000,
    log: console.log,
})

akdg;shkjadsbvgkjakl;
