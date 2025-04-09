"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { CalendarIcon } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { addTaskToUser } from './actions'
import { toast } from 'sonner'
import SelectComponent from './SelectComponent'



const Task = () => {


    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [importance, setImportance] = React.useState<string>("");




    const handleTask = (e: { currentTarget: HTMLFormElement | undefined } | undefined) => {


        const formData = new FormData(e?.currentTarget)
        const task = formData.get('task')
        console.log(task, date)

        addTaskToUser({
            title: task,
            date: date,
            importance: importance
        })

        console.log(task)
        toast("Task added succesfully", {
            unstyled: true,
            classNames: {
                toast: 'bg-green-300 rounded-lg py-3 px-5 shadow-lg text-black w-96 border-2 border-solid border-black'
            }
        })

    }

    return (
        <Card className='flex align-middle justify-center w-[300px] gap-4'>
            <CardHeader>
                <CardTitle>Add a new Task</CardTitle>
                <CardDescription>Add and personalize a new task</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleTask}>
                    <div className="grid w-full items-center">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Task</Label>
                            <Input id="name" name="task" placeholder="Name of your task" required minLength={3} />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1.5 mt-4 mb-4">
                        <Label htmlFor='date'>Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>

                            </PopoverTrigger>

                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    required
                                    fromDate={new Date()}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <SelectComponent value={importance} setValue={setImportance} />
                    <Button type='submit' variant={'outline'} className='mt-4'>
                        Add Task
                    </Button>
                </form>
            </CardContent>

        </Card>
    )
}

export default Task