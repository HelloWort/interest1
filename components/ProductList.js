import React from 'react'

function ProductList({ products }) {
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.year}>
                        <h2>{product.brand} {product.name}</h2>
                        <p>Price: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList