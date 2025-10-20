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
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        message: "Please insert userId",
      });
    }

    const user = await database
      .select()
      .from(userTable)
      .where(eq(userTable.id, id));

    if (!user) {
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
    const { name, birthDate, email, cellphoneNumber }: UserType = req.body;

    const userData = {
      id: uuidV4(),
      name,
      birthDate,
      email,
      cellphoneNumber,
    };

    const createdUser = await database.insert(userTable).values(userData);
  } catch (error) {}
};
