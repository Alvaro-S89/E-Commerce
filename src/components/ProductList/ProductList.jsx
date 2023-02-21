import React from 'react'
import { products } from '../../data/product'
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = () => {
    return (
        <div className='productList'>
        {
        products.map((product) => {
            return(
                <ProductCard product={product}/>
            )
        })
        }
        </div>
    )
}
