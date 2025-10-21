import env from "@/env";
import { drizzle } from "drizzle-orm/postgres-js";
import * as entitySchema from "./schema";

export const database = drizzle(env.DATABASE_URL, {
  schema: entitySchema,
  casing: "snake_case",
});
