import React from 'react'
import { deleteUserTask } from './actions'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { DeleteTaskProps } from './utils/types'

const DeleteTask = ({ _taskId }: DeleteTaskProps) => {

    const handleDeletion = async () => {
        await deleteUserTask(_taskId)

        toast("Task deleted succesfully", {
            unstyled: true,
            classNames: {
                toast: 'bg-red-300 rounded-lg py-3 px-5 shadow-lg text-black w-96 border-2 border-solid border-black'
            }
        })
    }

    return (
        <Button onClick={handleDeletion} className='bg-red-700 hover:bg-red-500'>Delete Task</Button>
    )
}

export default DeleteTask