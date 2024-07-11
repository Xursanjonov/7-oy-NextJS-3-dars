"use client"
import React from 'react'

const UserWrapper = ({ users }) => {
    return (
        <tbody className='max-w-[1550px] w-[100%] mx-auto flex flex-col'>
            {
                users?.map((user, ind) => (
                    <tr key={user?._id} className={`w-full h-[50px] flex items-center justify-between border-[1px] ${ind % 2 === 0 ? ' bg-gray-200' : 'bg-white'} border-b-gray-500`}>
                        <input id={user?._id} className='w-[30px] h-[16px] flex items-center justify-center bg-transparent' type="checkbox" name="" />
                        <td className='w-[300px] flex items-center justify-start h-full'>{user?._id}</td>
                        <td className='w-[250px] flex items-center justify-start h-full'>{user?.name}</td>
                        <td className='w-[320px] flex items-center justify-start h-full'>{user?.email}</td>
                        <td className='w-[200px] flex items-center justify-start h-full'>{user?.lstLogTime}</td>
                        <td className='w-[200px] flex items-center justify-start h-full'>{user?.regTime}</td>
                        <td className='w-[80px] flex items-center justify-start h-full'>{user.status ? 'Active' : 'Blecked'}</td>

                    </tr>
                ))
            }
        </tbody>
    )
}

export default UserWrapper