import { z } from "zod";

export const profileSummaryDTO = z.object({
  softDescription: z.string().nonempty(),
  longDescription: z.string(),
  user_id: z.string().uuid(),
});

export type ProfileSummaryDTO = z.infer<typeof profileSummaryDTO>;
