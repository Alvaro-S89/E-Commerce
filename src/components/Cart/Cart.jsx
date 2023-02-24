import React from 'react'
import './Cart.css'

export const Cart = ({total, totalProducts}) => {
  return (
    <div>
        <p>Quantity:{totalProducts}</p>
        <p>Total:{total}</p>
    </div>
  )
}
