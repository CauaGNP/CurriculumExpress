import { database } from "../db/index.js";
import { userTable } from "../db/schema/index.js";
import { type UserDTO } from "../DTO/userDTO.js";
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

const createUserService = async (data: UserDTO) => {
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
  data: Partial<UserDTO>
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
