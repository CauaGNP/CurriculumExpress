import env from "@/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./api/db/schema",
  out: "./api/db/drizzle",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
