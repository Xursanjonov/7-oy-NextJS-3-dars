'use client'; // Bu qator React komponentlarining mijoz tomonida ishlashini bildiradi

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductWrapper = ({ data }) => {
    return (
        <section className='w-[1480px] mx-auto'>
            <h1>ProductWrapper</h1>
            <div className="grid grid-cols-4 gap-6 items-center justify-center">
                {
                    data?.products?.map(el => (
                        <div className='p-3 shadow-sm' key={el?.id}>
                            <Image className='mx-auto h-[250px] object-contain' width={200} height={200} alt={el?.title} title={el?.title} src={el?.images[0]} />
                            <Link href={`/product/${el?.id}`}>{el?.title}</Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProductWrapper;
