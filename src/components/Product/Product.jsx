import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id, img, name, price, quantity, ratings, seller, stock} = props?.product;
    const handleAddToCart = props.handleAddToCart;
    return (
      <div className="product">
        <img src={img} alt="" />

        <div className="product-info">
          <h6 className="product-name">{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} stars</p>
        </div>
        <button onClick={() => handleAddToCart(props.product)} className="btn-cart">
          Add to Cart
        </button>
      </div>
    );
};

export default Product;