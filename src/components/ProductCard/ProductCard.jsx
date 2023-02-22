import './ProductCard.css'
import React from 'react'

export const ProductCard = ({product, total, setTotalPrice, totalProducts, setTotalProducts}) => {
    const addToCart = () => {
        setTotalPrice(total + product.price)
        setTotalProducts(totalProducts+1)
    }
    return (
        <div className="card">
            <img className="imgCard" src={product.url} alt={product.name}/>
            <h3>{product.name}</h3>
            <div className="price-buy">
                <p>{product.price}€</p>
                <button onClick={addToCart}>Buy</button>
            </div>
        </div>
    )
}
