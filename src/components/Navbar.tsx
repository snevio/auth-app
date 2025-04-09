
import React from 'react'
import SignOutGithub from './LogoutButton'
import { auth } from 'auth'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = async () => {
    const session = await auth()


    return (
        <div className='flex gap-3 p-5 align-bottom justify-end'>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className='customAvatar'>
                        <AvatarImage src={session?.user?.image as string} />
                        <AvatarFallback>PH</AvatarFallback>

                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel><SignOutGithub /></DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete Account</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="">{session?.user?.name}</div>

        </div>

    )
}

export default Navbar