import {
  createExperienceService,
  deleteExperienceByIdService,
  getAllExperiencesService,
  getExperienceByIdService,
  updateExperienceByIdService,
} from "@/service/experinceService.ts";
import type { Request, Response } from "express";

const getAllExpirences = async (req: Request, res: Response) => {
  try {
    const expirences = await getAllExperiencesService();

    res.status(200).send({
      message: "Request sucessfully",
      date: expirences,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const getExperienceById = async (req: Request, res: Response) => {
  try {
    const { expirenceId } = req.params;

    if (!expirenceId) {
      return res.status(400).send({
        message: "Please provide expirenceId",
      });
    }

    const expirence = await getExperienceByIdService(expirenceId);

    if (!expirence) {
      return res.send(404).send({
        message: "Experience summary not found",
      });
    }

    res.status(200).send({
      message: "Request sucessfully, experience found",
      data: expirence,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const createExperience = async (req: Request, res: Response) => {
  try {
    const experienceData = await createExperienceService(req.body);

    res.status(201).send({
      message: "Experience created",
      data: experienceData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const updateExperienceById = async (req: Request, res: Response) => {
  try {
    const { expirenceId } = req.params;

    if (!expirenceId) {
      return res.status(400).send({
        message: "Please provide skillId",
      });
    }

    await updateExperienceByIdService(expirenceId, req.body);

    res.status(204).send();
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const deleteExperienceById = async (req: Request, res: Response) => {
  try {
    const { expirenceId } = req.params;

    if (!expirenceId) {
      return res.status(400).send({
        message: "Please provide skillId",
      });
    }

    await deleteExperienceByIdService(expirenceId);

    res.status(200).send({
      message: "Experience delete sucessfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

export {
  createExperience,
  deleteExperienceById,
  getAllExpirences,
  getExperienceById,
  updateExperienceById,
};
