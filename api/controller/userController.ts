import {
  createUserService,
  deleteUserByIdService,
  getAllUsersService,
  getUserByIdService,
  updateUserbyIdService,
} from "../service/userService.js";
import type { Request, Response } from "express";

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
      message: "Server error",
    });
  }
};

export { createUser, deleteUserById, getAllUsers, getUserById, updateUserById };
