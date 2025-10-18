import { relations } from "drizzle-orm";
import { date, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { userTable } from "./user";

export const experienceTable = pgTable("Expirence", {
  id: serial("expirence_id").primaryKey(),
  companyName: varchar("companyName").notNull(),
  description: varchar("description").notNull(),
  startDate: date().notNull(),
  endDate: date(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
  user_id: serial("user_id")
    .notNull()
    .references(() => userTable.id),
});

export const experienceRelation = relations(experienceTable, ({ one }) => ({
  user: one(userTable, {
    fields: [experienceTable.user_id],
    references: [userTable.id],
  }),
}));
