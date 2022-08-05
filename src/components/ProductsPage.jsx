import React from 'react'
import Product from './Product';

const products = [
    {
        img: "products/product_1.jpg",
        title: "Product 1",
        price: "24.00"
    },
    {
        img: "products/product_2.jpg",
        title: "Product 2",
        price: "36.00"
    },
    {
        img: "products/product_3.jpg",
        title: "Product 3",
        price: "20.00"
    },
    {
        img: "products/product_1.jpg",
        title: "Product 1.1",
        price: "25.00"
    },
    {
        img: "products/product_3.jpg",
        title: "Product 3.1",
        price: "34.00"
    },
    {
        img: "products/product_2.jpg",
        title: "Product 2.1",
        price: "50.00"
    },
    {
        img: "products/product_2.jpg",
        title: "Product 2.2",
        price: "29.00"
    }
]

export default function ProductsPage() {
    return (
        <>
            <h1 className='title'>Products</h1>
            <div className="products-container">
                {products.map((product) => (
                <Product
                img={product.img}
                title={product.title}
                price={product.price}
                />
                ))}
            </div>
        </>
    );
}
