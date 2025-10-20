import { database } from "@/db";
import { userTable } from "@/db/schema";
import { type UserType } from "@/types/userType";
import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await database.select().from(userTable);

    res.status(200).send({
      message: "Request sussefuly",
      data: allUsers,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      error: "Server error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "Please insert userId",
      });
    }

    const user = await database
      .select()
      .from(userTable)
      .where(eq(userTable.id, userId));

    if (user.length === 0) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    res.status(200).send({
      message: "Success request, found user",
      data: user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      error: "Server error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, age, email, cellphoneNumber }: UserType = req.body;

    const userData = {
      id: uuidV4(),
      name,
      age,
      email,
      cellphoneNumber,
    };

    const createdUser = await database.insert(userTable).values(userData);

    res.status(200).send({
      message: "Created user success",
      data: createdUser,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      error: "Server error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

const updateUserbyId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        error: "Bad request, please insert userId",
      });
    }

    const verifyUserExist = await database
      .select()
      .from(userTable)
      .where(eq(userTable.id, userId));

    if (verifyUserExist.length === 0) {
      return res.status(404).send({
        error: "User not exist",
      });
    }

    const { name, age, email, cellphoneNumber }: UserType = req.body;

    const updatedData: UserType = {
      name: name ?? verifyUserExist[0]?.name,
      age: age ?? verifyUserExist[0]?.age,
      email: email ?? verifyUserExist[0]?.email,
      cellphoneNumber: cellphoneNumber ?? verifyUserExist[0]?.cellphoneNumber,
    };

    const updatedUserData = await database
      .update(userTable)
      .set(updatedData)
      .where(eq(userTable.id, userId));

    res.status(200).send({
      message: "User updated",
      data: updatedUserData,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      error: "Server error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        error: "Bad request, please insert userId",
      });
    }

    const verifyUserExist = await database
      .select()
      .from(userTable)
      .where(eq(userTable.id, userId));

    if (verifyUserExist.length === 0) {
      return res.status(404).send({
        error: "User not exist",
      });
    }

    await database.delete(userTable).where(eq(userTable.id, userId));

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Server error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export { createUser, deleteUserById, getAllUsers, getUserById, updateUserbyId };
