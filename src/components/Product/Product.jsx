import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id, img, name, price, quantity, ratings, seller, stock} = props?.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} stars</p>
            </div>
        </div>
    );
};

export default Product;