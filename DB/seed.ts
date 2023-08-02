import { execQuery } from "./execquery";

async function rebuilddb() {
    try {
        await execQuery(`DROP SCHEMA IF EXISTS discord CASCADE`)

    await execQuery(`CREATE SCHEMA discord`);

        await execQuery(`create table discord.users(
            id serial primary key,
            displayname varchar(255),
            username varchar(255),
            password varchar(255),
            email varchar(255)
        );
            CREATE TABLE discord.messages(
                id serial primary key,
                senderid int,
                date date
            )
        `);
    } catch (error) {
        console.log(error)
    }
}
rebuilddb()