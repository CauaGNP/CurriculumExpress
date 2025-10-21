import {
  createSkillService,
  deleteSkillByIdService,
  getAllSkillsService,
  getSkillByIdService,
  updateSkillByIdService,
} from "@/service/skilssService";
import type { Request, Response } from "express";

const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await getAllSkillsService();

    res.status(200).send({
      message: "Request successfully",
      data: skills,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

const getSkillById = async (req: Request, res: Response) => {
  try {
    const { skillId } = req.params;

    if (!skillId) {
      return res.status(400).send({
        message: "Please provide skillId",
      });
    }

    const skill = await getSkillByIdService(skillId);

    if (!skill) {
      return res.status(404).send({
        message: "Skill not found",
      });
    }

    res
      .status(200)
      .send({ message: "Skill fetched successfully", data: skill });
  } catch (error) {
    console.error(error);

    res.status(500).send({ message: "Server Error" });
  }
};

const createSkill = async (req: Request, res: Response) => {
  try {
    const newSkill = await createSkillService(req.body);

    res.status(201).send({
      message: "Skill created successfully",
      data: newSkill,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({ message: "Server Error" });
  }
};

const updateSkillById = async (req: Request, res: Response) => {
  try {
    const { skillId } = req.params;

    if (!skillId) {
      return res.status(400).send({
        message: "Please provide skillId",
      });
    }

    await updateSkillByIdService(skillId, req.body);

    res.status(204).send();
  } catch (error) {
    console.error(error);

    res.status(500).send({ message: "Server Error" });
  }
};

const deleteSkillById = async (req: Request, res: Response) => {
  try {
    const { skillId } = req.params;

    if (!skillId) {
      return res.status(400).send({
        message: "Please provide skillId",
      });
    }

    await deleteSkillByIdService(skillId);

    res.status(200).send({
      message: "Skill delete sucessfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({ message: "Server Error" });
  }
};

export {
  createSkill,
  deleteSkillById,
  getAllSkills,
  getSkillById,
  updateSkillById,
};
