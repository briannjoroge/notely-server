import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const getUserEmailUsername = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: { username: true, email: true },
    });
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user data" });
  }
};
