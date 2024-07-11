import React from 'react'
import './admin.css'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const LayoutAdmin = ({ children }) => {
    let isLogin = true
    if (!isLogin) {
        redirect('/')
    }

    return (
        <div className='adminLayout'>
            <div className='w-[300px] h-[100vh] py-4 flex flex-col items-center mx-auto text-black font-bold gap-4 bg-blue-400'>
                <Link href={'/admin'}>Admin</Link>
                <Link href={'/admin/create'}>Create</Link>
            </div>
            <main className=''>
                {children}
            </main>
        </div>
    )
}

export default LayoutAdmin