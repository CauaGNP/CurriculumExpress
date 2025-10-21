import { z } from "zod";

export const experienceType = z.object({
  companyName: z.string().nonempty(),
  description: z.string().nonempty(),
  startDate: z.date(),
  endDate: z.date().nullable(),
  user_id: z.string().uuid(),
});

export type ExperienceType = z.infer<typeof experienceType>;
