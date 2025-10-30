import { drizzle } from "drizzle-orm/postgres-js";
import env from "../env.ts";
import * as entitySchema from "./schema/index.ts";

export const database = drizzle(env.DATABASE_URL, {
  schema: entitySchema,
  casing: "snake_case",
});
