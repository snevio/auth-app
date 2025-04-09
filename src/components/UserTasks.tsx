"use client"

import React, { useEffect, useState } from 'react'
import { getUserTasks } from './actions'
import DeleteTask from './DeleteTask'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TasksFilter from './TasksFilter'
import { BasicTask } from './utils/types'



const UserTasks = () => {



    const [tasks, setTasks] = useState<BasicTask[]>([])

    useEffect(() => {
        const fetchUserTasks = async () => {

            const data = await getUserTasks()
            setTasks(data)


        }

        fetchUserTasks()

    }, [])
    return (
        <>
            <TasksFilter tasks={tasks} setTasks={setTasks} />
            <Table>
                <TableCaption>A list of your recent tasks.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Task</TableHead>
                        <TableHead>Due to</TableHead>
                        <TableHead>Importance</TableHead>
                        <TableHead >Added</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasks.map((task) => {
                        return (
                            <TableRow key={task.id} className={task.importance == 'Important' ? "bg-red-300" : task.importance == 'Normal' ? "bg-orange-300" : "bg-white"}>
                                <TableCell className="font-medium truncate text-ellipsis">{task.id}</TableCell>
                                <TableCell>{task.title}</TableCell>
                                <TableCell>{new Date(task.date).toISOString().split("T")[0]}</TableCell>
                                <TableCell>{task.importance}</TableCell>
                                <TableCell>{
                                    (new Date().toISOString().split("T")[0])
                                }</TableCell>

                                <TableCell><DeleteTask _taskId={task.id as string} /></TableCell>
                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </>

    )
}

export default UserTasks