import React from 'react'

export const Cart = ({total, totalProducts}) => {
  return (
    <div>
        <p>Quantity:{totalProducts}</p>
        <p>Total:{total}</p>
    </div>
  )
}
