import { z } from "zod";

export const experienceDTO = z.object({
  companyName: z.string().nonempty(),
  description: z.string().nonempty(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().nullable(),
  user_id: z.string().uuid(),
});

export type ExperienceDTO = z.infer<typeof experienceDTO>;
