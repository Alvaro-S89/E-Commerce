import React from 'react'
import './ProductList.css'
import { products } from '../../data/product'
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = ({total, setTotalPrice, totalProducts, setTotalProducts}) => {
    return (
        <div className='productList'>
            <div className="titleStore">
                <span>S</span>
                <span>T</span>
                <span>O</span>
                <span>R</span>
                <span>E</span>
            </div>
        {
        products.map((product) => {
            return(
                <ProductCard product={product} total={total} setTotalPrice={setTotalPrice} totalProducts={totalProducts} setTotalProducts={setTotalProducts}/>
            )
        })
        }
        </div>
    )
}
