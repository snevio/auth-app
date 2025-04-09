
import { signIn, signOut } from "next-auth/react";
import { FormProps } from "./utils/types";

export async function buttonLoginHandler(method: string) {
    await signIn(method, { redirectTo: "/user" })
}

export async function buttonLogoutHandler() {
    await signOut({ redirectTo: "/" })
}



export async function addTaskToUser(task: FormProps) {


    try {
        const response = await fetch('/api/taskapi', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                task
            })
        })
        if (response.status == 201) {
            console.log("Task created succesfully")
        }
    }
    catch (error) {
        console.error(error)
    }
}

export async function getUserTasks() {
    try {
        const userTasks = await fetch('/api/taskapi', {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            },
        }
        )
        if (userTasks.status == 201) {
            console.log("Tasks retrieved successfully")
        }

        return userTasks.json()
    }
    catch (error) {
        console.log(error)
        return []
    }
}


export async function deleteUserTask(_taskId: string) {
    console.log(_taskId)
    try {
        const res = await fetch('/api/taskapi', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ _taskId })
        })

        const data = await res.json()
        console.log(data)
        return data
    } catch (err) {
        console.error('Delete failed:', err)
    }

}