import React from 'react'
import UserWrapper from '@/components/user-wrapper/UserWrapper'
import { getUsers } from '@/utils/fetchUsers'
import lock from '@/assets/lock.svg'
import lockOpen from '@/assets/lock-open.svg'
import trash from '@/assets/trash.svg'
import Image from 'next/image'

const User = async () => {
    let usersData = await getUsers('/user')

    return (
        <table className='table-auto max-w-[1550px] w-full mx-auto flex flex-col'>
            <div className='table-header w-[100%] mx-auto text-white bg-gray-400'>
                <ul className='py-2 px-4 flex items-center justify-end gap-4'>
                    <li>Hello</li>
                    <li>Salom</li>
                    <li>Log out</li>
                </ul>
            </div>
            <div className="my-5 flex items-center justify-start gap-4">
                <button className='px-3 py-1 flex items-center gap-3 rounded-md text-white bg-red-500'>
                    <Image width={16} height={16} alt='icon' src={lock} />
                    Block
                </button>
                <button className='px-3 py-1'>
                    <Image width={16} height={16} alt='icon' src={lockOpen} />
                </button>
                <button className='px-3 py-1'>
                    <Image width={16} height={16} alt='icon' src={trash} />
                </button>
            </div>
            <h1 className='text-xl text-black'>Users Table</h1>
            <thead className='w-full'>
                <tr className='w-full h-[50px] text-sm flex items-center justify-between bg-[#000] text-white'>
                    <input className='w-[30px] h-[16px flex items-center justify-center bg-slate-400' type="checkbox" name="" id="" />
                    <th className='w-[300px]'> ID </th>
                    <th className='w-[250px]'> Name </th>
                    <th className='w-[320px]'> Email </th>
                    <th className='w-[200px]'> Last Login Time </th>
                    <th className='w-[200px]'> Registation Time </th>
                    <th className='w-[80px]'> Status </th>
                </tr>
            </thead>
            <UserWrapper users={usersData} />
        </table>
    )
}

export default User