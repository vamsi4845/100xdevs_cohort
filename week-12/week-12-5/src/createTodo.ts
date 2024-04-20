import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId: string, title: string, description: string) {
    const todo = await prisma.todo.create({
        data: {
            title,
            description,
            userId
        }
    })
    console.log(todo);
    
}

createTodo("23", "go to gym", "go to gym and do 10 pushups");