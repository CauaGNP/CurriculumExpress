import { skillsLevel } from "@/db/schema";
import { z } from "zod";

export const skillsType = z.object({
  skill_name: z.string().nonempty("Skill Name cannot be empty"),
  level: z.enum(skillsLevel),
  user_id: z.string().uuid(),
});

export type SkillsType = z.infer<typeof skillsType>;
