"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@/lib/features/counter/CounterSlice'
import Link from 'next/link'

const Header = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <header className='header font-bold flex items-center justify-start gap-6'>
            <h1>Header {count} </h1>
            <Link href={"/"}>Home</Link>
            <Link href={"/product"}>Product</Link>
            <Link href={"/wish-list"}>Wish List</Link>
            <button className='cursor-pointer' onClick={() => dispatch(increment())}>Inc</button>
            <button className={`cursor-pointer ${count <= 0 ? 'text-gray-300' : 'text-black'}`} disabled={count <= 0} onClick={() => dispatch(decrement())}>dec</button>
        </header>
    )
}

export default Header