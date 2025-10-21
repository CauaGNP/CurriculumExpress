import {
  createProfileSummaryService,
  deleteProfileSummaryService,
  getAllProfileSummaryService,
  getProfileSummaryByIdService,
  updateProfileSummaryService,
} from "@/service/profileSummaryService.ts";
import type { Request, Response } from "express";

const getAllProfileSummary = async (req: Request, res: Response) => {
  try {
    const profilesSumarries = await getAllProfileSummaryService();

    res.status(200).send({
      message: "Request sucessfully",
      data: profilesSumarries,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const getProfileSummaryById = async (req: Request, res: Response) => {
  try {
    const { profileSummaryId } = req.params;

    if (!profileSummaryId) {
      return res.status(400).send({
        message: "Please provide skillId",
      });
    }

    const profileSummary = await getProfileSummaryByIdService(profileSummaryId);

    if (!profileSummary) {
      return res.send(404).send({
        message: "Profile summary not found",
      });
    }

    res.status(200).send({
      message: "Profille summary found",
      data: profileSummary,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const createProfileSummary = async (req: Request, res: Response) => {
  try {
    const profileSummaryData = await createProfileSummaryService(req.body);

    res.status(201).send({
      message: "Profille summary created",
      data: profileSummaryData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const updateProfileSummary = async (req: Request, res: Response) => {
  try {
    const { profileSummaryId } = req.params;

    if (!profileSummaryId) {
      return res.status(400).send({
        message: "Please provide skillId",
      });
    }

    await updateProfileSummaryService(profileSummaryId, req.body);

    res.status(204).send();
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const deleteProfileSummary = async (req: Request, res: Response) => {
  try {
    const { profileSummaryId } = req.params;

    if (!profileSummaryId) {
      return res.status(400).send({
        message: "Please provide skillId",
      });
    }

    await deleteProfileSummaryService(profileSummaryId);

    res.status(200).send({
      message: "Profile sumary deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

export {
  createProfileSummary,
  deleteProfileSummary,
  getAllProfileSummary,
  getProfileSummaryById,
  updateProfileSummary,
};
