import { database } from "@/db/index.ts";
import { skillsTable } from "@/db/schema/index.ts";
import { type SkillsDTO } from "@/DTO/skillsDTO.ts";
import { eq } from "drizzle-orm";
import { v4 as uuidV4 } from "uuid";

const getAllSkillsService = async () => {
  return await database.query.skillsTable.findMany();
};

const getSkillByIdService = async (skillId: string) => {
  return await database.query.skillsTable.findFirst({
    where: eq(skillsTable.id, skillId),
  });
};

const createSkillService = async (data: SkillsDTO) => {
  const newSkill = {
    id: uuidV4(),
    skill_name: data.skill_name,
    level: data.level,
    user_id: data.user_id,
  };

  await database.insert(skillsTable).values(newSkill);

  return newSkill;
};

const updateSkillByIdService = async (
  skillId: string,
  data: Partial<SkillsDTO>
) => {
  await database
    .update(skillsTable)
    .set(data)
    .where(eq(skillsTable.id, skillId));

  return;
};

const deleteSkillByIdService = async (skillId: string) => {
  return await database.delete(skillsTable).where(eq(skillsTable.id, skillId));
};

export {
  createSkillService,
  deleteSkillByIdService,
  getAllSkillsService,
  getSkillByIdService,
  updateSkillByIdService,
};
