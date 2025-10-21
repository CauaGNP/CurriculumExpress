import {z} from "zod";

export const addressType = z.object({
    state: z.string().length(2).nonempty(),
    city: z.string().nonempty(),
    user_id : z.string().uuid()
});

export type AddressType = z.infer<typeof addressType>;