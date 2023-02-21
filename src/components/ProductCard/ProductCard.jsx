import React from 'react'

export const ProductCard = (product) => {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <img src={product.url} alt={product.name}/>
            {/* <button onClick={addToCart}>Add</button> */}
        </div>
    )
}
