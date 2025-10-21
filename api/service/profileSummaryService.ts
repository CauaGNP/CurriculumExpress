import { database } from "@/db/index.ts";
import { profileSummary } from "@/db/schema/index.ts";
import type { ProfileSummaryDTO } from "@/DTO/profileSummaryDTO.ts";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

const getAllProfileSummaryService = async () => {
  return await database.query.profileSummary.findMany();
};

const getProfileSummaryByIdService = async (profileSummaryId: string) => {
  return await database.query.profileSummary.findFirst({
    where: eq(profileSummary.id, profileSummaryId),
  });
};

const createProfileSummaryService = async (data: ProfileSummaryDTO) => {
  const profileSummaryData = {
    id: uuidv4(),
    softDescription: data.softDescription,
    longDescription: data.longDescription,
    user_id: data.user_id,
  };

  return await database.insert(profileSummary).values(profileSummaryData);
};

const updateProfileSummaryService = async (
  profileSummaryId: string,
  data: Partial<ProfileSummaryDTO>
) => {
  await database
    .update(profileSummary)
    .set(data)
    .where(eq(profileSummary.id, profileSummaryId));

  return;
};

const deleteProfileSummaryService = async (profileSummaryId: string) => {
  return await database
    .delete(profileSummary)
    .where(eq(profileSummary.id, profileSummaryId));
};

export {
  createProfileSummaryService,
  deleteProfileSummaryService,
  getAllProfileSummaryService,
  getProfileSummaryByIdService,
  updateProfileSummaryService,
};
