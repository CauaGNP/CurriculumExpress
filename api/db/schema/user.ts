import { relations } from "drizzle-orm";
import {
  char,
  date,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { addressTable } from "./address";
import { experienceTable } from "./experience";
import { profileSummary } from "./profileSummary";
import { skillsTable } from "./skills";

export const userTable = pgTable("User", {
  id: serial("user_id").primaryKey(),
  name: varchar("name").notNull(),
  birthDate: date("birthDate").notNull(),
  email: varchar("email").notNull(),
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
