import { relations } from "drizzle-orm";
import {
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { userTable } from "./user";

export const skillsEnum = pgEnum("Skill_level", [
  "beginner",
  "intermediate",
  "advanced",
]);

export const skillsTable = pgTable("Skills", {
  id: serial("skills_id").primaryKey(),
  skill_name: varchar("skill_name").notNull(),
  level: skillsEnum("level").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
  user_id: serial("user_id")
    .notNull()
    .references(() => userTable.id),
});

export const skillsRelation = relations(skillsTable, ({ one }) => ({
  user: one(userTable, {
    fields: [skillsTable.user_id],
    references: [userTable.id],
  }),
}));
