CREATE TYPE "public"."Skill_level" AS ENUM('beginner', 'intermediate', 'advanced');--> statement-breakpoint
CREATE TABLE "Address" (
	"address-id" serial PRIMARY KEY NOT NULL,
	"state" char(2) NOT NULL,
	"city" varchar NOT NULL,
	"created-at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	"user_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Expirence" (
	"expirence_id" serial PRIMARY KEY NOT NULL,
	"companyName" varchar NOT NULL,
	"description" varchar NOT NULL,
	"startDate" date NOT NULL,
	"endDate" date,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	"user_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ProfileSummary" (
	"profilesummary_id" serial PRIMARY KEY NOT NULL,
	"softDescription" varchar NOT NULL,
	"longDescription" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	"user-id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Skills" (
	"skills_id" serial PRIMARY KEY NOT NULL,
	"skill_name" varchar NOT NULL,
	"level" "Skill_level" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	"user_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "User" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"birthDate" date NOT NULL,
	"email" varchar NOT NULL,
	"cellphoneNumber" char(11) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "Address" ADD CONSTRAINT "Address_user_id_User_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Expirence" ADD CONSTRAINT "Expirence_user_id_User_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ProfileSummary" ADD CONSTRAINT "ProfileSummary_user-id_User_user_id_fk" FOREIGN KEY ("user-id") REFERENCES "public"."User"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_user_id_User_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE no action ON UPDATE no action;