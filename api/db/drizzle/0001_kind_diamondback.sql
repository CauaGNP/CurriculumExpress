ALTER TABLE "Expirence" RENAME COLUMN "startDate" TO "start_date";--> statement-breakpoint
ALTER TABLE "Expirence" RENAME COLUMN "endDate" TO "end_date";--> statement-breakpoint
ALTER TABLE "ProfileSummary" ADD CONSTRAINT "ProfileSummary_user-id_unique" UNIQUE("user-id");