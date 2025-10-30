import { drizzle } from "drizzle-orm/postgres-js";
import env from "../env.js";
import * as entitySchema from "./schema/index";

export const database = drizzle(env.DATABASE_URL, {
  schema: entitySchema,
  casing: "snake_case",
});
