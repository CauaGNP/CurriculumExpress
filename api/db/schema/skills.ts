import { relations } from "drizzle-orm";
import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { userTable } from "./user";

export const skillsLevel = ["beginner", "intermediate", "advanced"] as const;
export const skillsEnum = pgEnum("Skill_level", skillsLevel);
export type SkillLevelType = (typeof skillsLevel)[number];

export const skillsTable = pgTable("Skills", {
  id: uuid("skills_id").primaryKey(),
  skill_name: varchar("skill_name").notNull(),
  level: skillsEnum("level").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
  user_id: uuid("user_id")
    .notNull()
    .references(() => userTable.id),
});

export const skillsRelation = relations(skillsTable, ({ one }) => ({
  user: one(userTable, {
    fields: [skillsTable.user_id],
    references: [userTable.id],
  }),
}));
