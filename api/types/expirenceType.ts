import { z } from "zod";

export const expirenceType = z.object({
  companyName: z.string().nonempty(),
  description: z.string().nonempty(),
  startDate: z.string().nonempty(),
  endDate: z.string(),
  user_id: z.string().uuid(),
});
