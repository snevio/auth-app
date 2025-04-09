
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { SelectProps } from './utils/types'

const SelectComponent = ({ value, setValue }: SelectProps) => {



    return (
        <Select value={value} onValueChange={(val) => setValue(val)} required>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Importance" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Important">Important</SelectItem>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Not Important">Not Important</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SelectComponent