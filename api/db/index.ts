import env from "@/env.js";
import { drizzle } from "drizzle-orm/postgres-js";
import * as entitySchema from "./schema/index.js";

export const database = drizzle(env.DATABASE_URL, {
  schema: entitySchema,
  casing: "snake_case",
});
