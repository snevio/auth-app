
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { BasicTask, FilterProps } from './utils/types';

const TasksFilter = ({ tasks, setTasks }: FilterProps) => {

    const importanceOrder = {
        "Important": 3,
        "Normal": 2,
        "Not Important": 1,
    };

    const handleFilterChange = (e: string) => {
        //console.log(e)
        if (e == 'Date') {
            const sortedTasks = tasks.sort((first: BasicTask, second: BasicTask) => new Date(first.date).getTime() - new Date(second.date).getTime());
            //console.log(sortedTasks)
            setTasks([...sortedTasks])
        }

        else if (e == 'Importance') {
            const sortedTasks = tasks.sort((first: BasicTask, second: BasicTask) => importanceOrder[second.importance as keyof typeof importanceOrder] - importanceOrder[first.importance as keyof typeof importanceOrder]);
            //console.log(sortedTasks)
            setTasks([...sortedTasks])
        }
    }



    return (
        <Select onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Importance">Importance</SelectItem>
                <SelectItem value="Date">Date</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default TasksFilter