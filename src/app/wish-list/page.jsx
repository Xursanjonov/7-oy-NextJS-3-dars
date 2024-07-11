"use client"
import { addToLike } from '@/lib/features/wishlist/wishlistSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const WishList = () => {
    const wishList = useSelector(state => state.wishlist?.value)
    const dispatch = useDispatch()

    return (
        <div className='wish-list'>
            <h1>Wish List</h1>
            <div className="gr
            
            id grid-cols-4 gap-6 items-center justify-center">
                {
                    wishList?.map(el => (
                        <div className='p-3 shadow-sm border-2 rounded-md' key={el?.id}>
                            <Image className='mx-auto h-[250px] object-contain' width={200} height={200} alt={el?.title} title={el?.title} src={el?.images[0]} />
                            <div className='w-full flex flex-col justify-center gap-4'>
                                <Link href={`/product/${el?.id}`}>{el?.title}</Link>
                                <div className='flex items-center justify-end gap-4'>
                                    <button onClick={() => dispatch(addToLike({ ...el }))} className='px-3 py-1 rounded-md border-2'>like</button>
                                    <button className='px-3 py-1 rounded-md bg-green-500'>Add</button>
                                    <button className='px-3 py-1 rounded-md bg-red-500'>Del</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WishList