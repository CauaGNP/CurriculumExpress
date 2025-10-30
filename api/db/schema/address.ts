import { relations } from "drizzle-orm";
import { char, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { userTable } from "./user.js";

export const addressTable = pgTable("Address", {
  id: uuid("address-id").primaryKey(),
  state: char("state", { length: 2 }).notNull(),
  city: varchar("city").notNull(),
  created_at: timestamp("created-at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
  user_id: uuid("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" })
    .unique(),
});

export const addressRelation = relations(addressTable, ({ one }) => ({
  user: one(userTable, {
    fields: [addressTable.user_id],
    references: [userTable.id],
  }),
}));
