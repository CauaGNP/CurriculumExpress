import { database } from "../db/index.js";
import { experienceTable } from "../db/schema/index.js";
import { type ExperienceDTO } from "../DTO/experienceDTO.js";
import { eq } from "drizzle-orm";
import { v4 as uuidV4 } from "uuid";

const getAllExperiencesService = async () => {
  return await database.query.experienceTable.findMany();
};

const getExperienceByIdService = async (experienceId: string) => {
  return await database.query.experienceTable.findFirst({
    where: eq(experienceTable.id, experienceId),
  });
};

const createExperienceService = async (data: ExperienceDTO) => {
  const experienceData = {
    id: uuidV4(),
    companyName: data.companyName,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate,
    user_id: data.user_id,
  };

  return await database.insert(experienceTable).values(experienceData);
};

const updateExperienceByIdService = async (
  experienceId: string,
  data: Partial<ExperienceDTO>
) => {
  await database
    .update(experienceTable)
    .set(data)
    .where(eq(experienceTable.id, experienceId));

  return;
};

const deleteExperienceByIdService = async (experienceId: string) => {
  return await database
    .delete(experienceTable)
    .where(eq(experienceTable.id, experienceId));
};

export {
  createExperienceService,
  deleteExperienceByIdService,
  getAllExperiencesService,
  getExperienceByIdService,
  updateExperienceByIdService,
};
