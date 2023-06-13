import "dotenv/config";
import { migrate } from "drizzle-orm/libsql/migrator";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export const client = createClient({
  url: process.env.TURSO_DB_URL as string,
  authToken: process.env.TURSO_DB_AUTH_TOKEN as string,
});

export const db = drizzle(client);

async function main() {
  await migrate(db, {
    migrationsFolder: "./drizzle/migrations",
  });
}

main()
  .then((res) => {
    console.log("Tables migrated!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error performing migration: ", err);
    process.exit(1);
  });