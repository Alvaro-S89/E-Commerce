import React, { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { ProductList } from '../../components/ProductList/ProductList'

export const ProductPage = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalProducts, setTotalProducts] = useState(0)
  return (
    <div>
        <Header  total={totalPrice} totalProducts={totalProducts}/> 
        <ProductList total={totalPrice} setTotalPrice={setTotalPrice} totalProducts={totalProducts} setTotalProducts={setTotalProducts}/> 
    </div>
  )
}
