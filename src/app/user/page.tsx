
import { redirect } from 'next/navigation'
import { auth } from 'auth'
import Task from '@/components/Task'
import Navbar from '@/components/Navbar'
import UserTasks from '@/components/UserTasks'


export default async function Page() {
    const session = await auth()
    if (!session?.user) redirect("/")



    return (
        <div className=' flex flex-col align-middle justify-center gap w-full'>
            <Navbar />
            <div className='flex w-full justify-center align-middle mb-5'>
                <Task />
            </div>
            <div className='flex w-full justify-center align-middle'>
                <div className='w-[50%]'>
                    <UserTasks />
                </div>
            </div>
        </div>
    )
}