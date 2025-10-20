import { z } from "zod";

export const profileSummaryType = z.object({
  softDescription: z.string().nonempty(),
  longDescription: z.string(),
  user_id: z.string().uuid(),
});

export type ProfileSummaryType = z.infer<typeof profileSummaryType>;
