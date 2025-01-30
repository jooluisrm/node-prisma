import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";


export const createUser = async (data: Prisma.UserCreateInput) => {
    try {
        return await prisma.user.create({ data });
    } catch (error) {
        return false;
    }
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    try {
        return await prisma.user.createMany({
            data: users,
            skipDuplicates: true
        });
    } catch (error) {
        return false;
    }

}

export const getAllUsers = async () => {

    let page = 5;
    const users = await prisma.user.findMany({
        skip: (page - 1) * 2,
        take: 2
    });
    return users;
}

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({
        where: { email },
        select: {
            id: true,
            name: true
        }
    });
    return user;
}