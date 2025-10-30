import { relations } from "drizzle-orm";
import {
  char,
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { addressTable } from "./address.js";
import { experienceTable } from "./experience.js";
import { profileSummary } from "./profileSummary.js";
import { skillsTable } from "./skills.js";

export const userTable = pgTable("User", {
  id: uuid("user_id").primaryKey(),
  name: varchar("name").notNull(),
  age: integer("age").notNull(),
  email: varchar("email").notNull().unique(),
  cellphoneNumber: char("cellphoneNumber", { length: 11 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const userRelations = relations(userTable, ({ many, one }) => ({
  skills: many(skillsTable),
  experience: many(experienceTable),
  address: one(addressTable),
  profileSummary: one(profileSummary),
}));
