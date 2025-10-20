import { z } from "zod";

export const userType = z.object({
  name: z.string().nonempty("Name cannot be empty"),
  birthDate: z.date(),
  email: z.email("Invalid email").nonempty("Email cannot be empty"),
  cellphoneNumber: z
    .string()
    .length(11, "Cellphone number must be exactly 11 difits")
    .nonempty("Cellphone number cannot be empty"),
});

export type UserType = z.infer<typeof userType>;
