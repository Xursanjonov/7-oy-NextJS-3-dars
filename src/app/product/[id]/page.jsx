import { getData } from '@/utils/fetchData'
import Image from 'next/image'
import React from 'react'

const Detail = async ({ params }) => {
    const { id } = params
    let productDetail = await getData(`/products/${id}`)
    console.log(productDetail);

    return (
        <section className='w-[1480px] mx-auto my-10'>
            {
                <div key={productDetail?.id}
                    className='w-[800px] h-[400px] p-4 shadow-md border-[1px] rounded-md mx-auto flex items-center justify-center gap-4'>
                    <figure className='flex flex-col items-center justify-center gap-4'>
                        <Image width={300} height={300} title={productDetail?.title} alt={productDetail?.title}
                            src={productDetail?.images[0]} className='h-[300px] mx-auto object-contain' />
                        <div className="w-full h-[60px] flex items-center justify-center gap-2">
                            {productDetail?.images?.map(img => {
                                console.log(img);
                                <Image width={100} height={100} alt='image'
                                    src={img} className='h-[100px] mx-auto object-contain' />
                            })}
                        </div>
                    </figure>
                    <div className="flex-1 flex flex-col justify-center gap-4">
                        <h2 className='text-xl font-bold text-black'>{productDetail?.title}</h2>
                        <p className=''>{productDetail?.category}</p>
                        <p className=''>{productDetail?.description}</p>
                        <p className='font-semibold text-red-500'>{productDetail?.price}$</p>
                    </div>
                </div>
            }
        </section>
    )
}

export default Detail