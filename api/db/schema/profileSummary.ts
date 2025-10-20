import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { userTable } from "./user";

export const profileSummary = pgTable("ProfileSummary", {
  id: uuid("profilesummary_id").primaryKey(),
  softDescription: varchar("softDescription").notNull(),
  longDescription: varchar("longDescription"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdateFn(() => new Date()),
  user_id: uuid("user-id")
    .notNull()
    .references(() => userTable.id),
});

export const profileSummaryRelation = relations(profileSummary, ({ one }) => ({
  user: one(userTable, {
    fields: [profileSummary.user_id],
    references: [userTable.id],
  }),
}));
