import { database } from "@/db";
import { profileSummary } from "@/db/schema";
import type { ProfileSummaryType } from "@/types/profileSummaryType";
import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const getAllProfileSummary = async (req: Request, res: Response) => {
  try {
    const allProfilesSummaries = await database.select().from(profileSummary);

    res.status(200).send({
      message: "Request successfully",
      data: allProfilesSummaries,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Server error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

const getProfilleSummaryById = async (req: Request, res: Response) => {
  try {
    const { profileSummaryId } = req.params;

    if (!profileSummaryId) {
      return res.status(400).send({
        error: "Please insert profileSummaryId",
      });
    }

    const profileSummaryData = await database
      .select()
      .from(profileSummary)
      .where(eq(profileSummary.id, profileSummaryId));

    if (profileSummaryData.length === 0) {
      return res.status(404).send({
        message: "Profile Summary not found",
      });
    }

    res.status(200).send({
      message: "Request successfully",
      data: profileSummaryData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Server Error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

const createProfileSummary = async (req: Request, res: Response) => {
  try {
    const { softDescription, longDescription, user_id }: ProfileSummaryType =
      req.body;

    const profileSummaryData = {
      id: uuidv4(),
      softDescription,
      longDescription,
      user_id,
    };

    await database.insert(profileSummary).values(profileSummaryData);

    res.status(200).send({
      message: "Request successfully",
      data: profileSummaryData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Server Error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

const updateProfileSummary = async (req: Request, res: Response) => {
  try {
    const { profileSummaryId } = req.params;

    if (!profileSummaryId) {
      return res.status(400).send({
        error: "Please insert profileSummaryId",
      });
    }

    const profileSummaryExist = await database
      .select()
      .from(profileSummary)
      .where(eq(profileSummary.id, profileSummaryId));

    if (profileSummaryExist.length === 0) {
      return res.status(404).send({
        message: "Profile Sumary not found.",
      });
    }

    const { softDescription, longDescription }: ProfileSummaryType = req.body;

    const updateProfileSummaryData = {
      softDescription:
        softDescription ?? profileSummaryExist[0]?.softDescription,
      longDescription:
        longDescription ?? profileSummaryExist[0]?.longDescription,
    };

    await database
      .update(profileSummary)
      .set(updateProfileSummaryData)
      .where(eq(profileSummary.id, profileSummaryId));

    res.status(200).send({
      message: "Request successfully",
      data: updateProfileSummaryData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Server error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

const deleteProfileSummary = async (req: Request, res: Response) => {
  try {
    const { profileSummaryId } = req.params;

    if (!profileSummaryId) {
      return res.status(400).send({
        error: "Please insert profileSummaryId",
      });
    }

    await database
      .delete(profileSummary)
      .where(eq(profileSummary.id, profileSummaryId));
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Server Error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export {
  createProfileSummary,
  deleteProfileSummary,
  getAllProfileSummary,
  getProfilleSummaryById,
  updateProfileSummary,
};
