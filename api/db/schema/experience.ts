import { relations } from "drizzle-orm";
import { date, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { userTable } from "./user.ts";

export const experienceTable = pgTable("Expirence", {
  id: uuid("expirence_id").primaryKey(),
  companyName: varchar("companyName").notNull(),
  description: varchar("description").notNull(),
  startDate: date({ mode: "date" }).notNull(),
  endDate: date({ mode: "date" }),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
  user_id: uuid("user_id")
    .notNull()
    .references(() => userTable.id),
});

export const experienceRelation = relations(experienceTable, ({ one }) => ({
  user: one(userTable, {
    fields: [experienceTable.user_id],
    references: [userTable.id],
  }),
}));
