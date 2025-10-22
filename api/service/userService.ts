import { database } from "../db/index.js";
import { addressTable, experienceTable, profileSummary, skillsTable, userTable } from "../db/schema/index.js";
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

const getAddressByUserIdService = async (userId: string) => {
  return await database.query.addressTable.findFirst({
    where : eq(addressTable.user_id, userId),
  })
}
 
const getAllSkillsByUserIdService = async (userId: string) => {
  return await database.query.skillsTable.findMany({
    where : eq(skillsTable.user_id, userId),
  })
}

const getProfileSummaryByUserIdService = async (userId: string) => {
  return await database.query.profileSummary.findFirst({
    where : eq(profileSummary.user_id, userId),
  })
}

const getAllExperienceByUserIdService = async (userId: string) => {
  return await database.query.experienceTable.findMany({
    where: eq(experienceTable.user_id, userId)
  })
}

const getAllDatasbyUserIdService = async (userId: string) => {
  const datas = {
    user: await getUserByIdService(userId),
    profileSummary: await getProfileSummaryByUserIdService(userId),
    address: await getAddressByUserIdService(userId),
    skills: await getAllSkillsByUserIdService(userId),
    experience : await getAllExperienceByUserIdService(userId)
  }
  return datas;
}

export {
  createUserService,
  deleteUserByIdService,
  getAllUsersService,
  getUserByIdService,
  updateUserbyIdService,
  getAddressByUserIdService,
  getAllExperienceByUserIdService,
  getAllSkillsByUserIdService,
  getProfileSummaryByUserIdService,
  getAllDatasbyUserIdService
};
