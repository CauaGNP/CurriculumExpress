import { relations } from "drizzle-orm";
import { char, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { userTable } from "./user";

export const addressTable = pgTable("Address", {
  id: serial("address-id").primaryKey(),
  state: char("state", { length: 2 }).notNull(),
  city: varchar("city").notNull(),
  created_at: timestamp("created-at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
  user_id: serial("user_id")
    .notNull()
    .references(() => userTable.id),
});

export const addressRelation = relations(addressTable, ({ one }) => ({
  user: one(userTable, {
    fields: [addressTable.user_id],
    references: [userTable.id],
  }),
}));
