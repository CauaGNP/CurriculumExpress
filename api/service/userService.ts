import { database } from "@/db";
import { userTable } from "@/db/schema";
import { type UserType } from "@/types/userType";
import { eq } from "drizzle-orm";
import { v4 as uuidV4 } from "uuid";

const getAllUsersService = async () => {
  return await database.query.userTable.findMany();
};

const getUserByIdService = async (userId: string) => {
  return await database.query.userTable.findFirst({
    where: eq(userTable.id, userId),
  });
};

const createUserService = async (data: UserType) => {
  const userData = {
    id: uuidV4(),
    name: data.name,
    age: data.age,
    email: data.email,
    cellphoneNumber: data.cellphoneNumber,
  };

  await database.insert(userTable).values(userData);

  return userData;
};

const updateUserbyIdService = async (
  userId: string,
  data: Partial<UserType>
) => {
  await database.update(userTable).set(data).where(eq(userTable.id, userId));

  return;
};

const deleteUserByIdService = async (userId: string) => {
  return await database.delete(userTable).where(eq(userTable.id, userId));
};

export {
  createUserService,
  deleteUserByIdService,
  getAllUsersService,
  getUserByIdService,
  updateUserbyIdService,
};
