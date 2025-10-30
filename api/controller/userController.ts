import type { Request, Response } from "express";
import {
  createUserService,
  deleteUserByIdService,
  getAddressByUserIdService,
  getAllDatasbyUserIdService,
  getAllExperienceByUserIdService,
  getAllSkillsByUserIdService,
  getAllUsersService,
  getProfileSummaryByUserIdService,
  getUserByIdService,
  updateUserbyIdService,
} from "../service/userService.js";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();

    res.status(200).send({
      message: "Request successfully",
      data: users,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please provide userId",
      });
    }

    const user = await getUserByIdService(userId);

    if (!user) {
      return res.status(404).send({
        message: "user not found",
      });
    }

    res.status(200).send({
      message: "Request successfully, user found",
      data: user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server Error",
    });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);

    res.status(201).send({
      message: "Create user sucessfully",
      data: user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server Error",
    });
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please provide userId",
      });
    }

    await updateUserbyIdService(userId, req.body);

    res.status(204).send();
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please provide userId",
      });
    }

    await deleteUserByIdService(userId);

    res.status(200).send({
      message: "User Delete sucessfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message:
        "Error: user has no related data. Check the relationships in the database.",
    });
  }
};
const getAddressByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please provide userId",
      });
    }

    const addressByUserData = await getAddressByUserIdService(userId);

    res.status(200).send({
      message: "Request sucessfully",
      data: addressByUserData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const getAllSkillsByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please provide userId",
      });
    }

    const skillsByUserData = await getAllSkillsByUserIdService(userId);

    res.status(200).send({
      message: "Request sucessfully",
      data: skillsByUserData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const getProfileSummaryByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please provide userId",
      });
    }

    const profileSummaryUserData = await getProfileSummaryByUserIdService(
      userId
    );

    res.status(200).send({
      message: "Request sucessfully",
      data: profileSummaryUserData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const getAllExperienceByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please provide userId",
      });
    }

    const experienceUserData = await getAllExperienceByUserIdService(userId);

    res.status(200).send({
      message: "Request sucessfully",
      data: experienceUserData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

const getAllDatasbyUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please provide userId",
      });
    }

    const allUserData = await getAllDatasbyUserIdService(userId);

    res.status(200).send({
      message: "Request sucessfully",
      data: allUserData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server error",
    });
  }
};

export {
  createUser,
  deleteUserById,
  getAddressByUserId,
  getAllDatasbyUserId,
  getAllExperienceByUserId,
  getAllSkillsByUserId,
  getAllUsers,
  getProfileSummaryByUserId,
  getUserById,
  updateUserById,
};
