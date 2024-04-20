import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(userId: string) {
    const response = await prisma.todo.findMany({
        where: {
           userId:userId
       }
    })
    console.log(response);
    
}

getUser("23")