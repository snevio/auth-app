import { auth } from "auth";
import { prisma } from "prisma";
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: Request) => {
    try {
        const { task } = await request.json();
        const session = await auth();

        const userId = session?.user?.id;
        if (!userId) {
            return new Response('User is not authenticated, redirecting', { status: 400 });
        }

        await prisma.task.create({
            data: {
                title: task.title,
                task: "task_ph",
                date: new Date(task.date),
                userId: userId,
                importance: task.importance

            }


        })

        return new Response('Task has been created', {
            status: 201
        })
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', {
            status: 500
        })
    }
}



export const GET = async () => {
    const session = await auth();
    const userTasks = await prisma.task.findMany({
        where: {
            userId: session?.user?.id
        },
    })

    console.log(userTasks)
    return new Response(JSON.stringify(userTasks))

}

export async function DELETE(request: NextRequest) {
    const body = await request.json()
    const { _taskId } = body

    if (!_taskId) {
        return NextResponse.json({ error: 'Missing task ID' }, { status: 400 })
    }

    try {
        await prisma.task.delete({
            where: {
                id: _taskId
            }
        })

        return NextResponse.json({ message: 'Task deleted successfully' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: 'Failed to delete task', err }, { status: 500 })
    }
}
