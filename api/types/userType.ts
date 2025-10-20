import { z } from "zod";

export const userType = z.object({
  name: z.string().nonempty("Name cannot be empty"),
  age: z.number().refine((val) => Number.isNaN(val), "Age cannot empty"),
  email: z.string().email("Invalid email").nonempty("Email cannot be empty"),
  cellphoneNumber: z
    .string()
    .length(11, "Cellphone number must be exactly 11 difits")
    .nonempty("Cellphone number cannot be empty"),
});

export type UserType = z.infer<typeof userType>;
