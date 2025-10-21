import { skillsLevel } from "@/db/schema/index.ts";
import { z } from "zod";

export const skillsDTO = z.object({
  skill_name: z.string().nonempty("Skill Name cannot be empty"),
  level: z.enum(skillsLevel),
  user_id: z.string().uuid(),
});

export type SkillsDTO = z.infer<typeof skillsDTO>;
