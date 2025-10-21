import {z} from "zod";

export const addressDTO = z.object({
    state: z.string().length(2).nonempty(),
    city: z.string().nonempty(),
    user_id : z.string().uuid()
});

export type AddressDTO = z.infer<typeof addressDTO>;