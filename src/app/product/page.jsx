import React from 'react'
import { getData } from '@/utils/fetchData'
import ProductWrapper from '@/components/product-wrapper/ProductWrapper'

const Product = async () => {
    let data = await getData(`/products`)

    return (
        <section className=''>
            <h1>Product</h1>
            <ProductWrapper data={data} />
        </section>
    )
}

export default Product