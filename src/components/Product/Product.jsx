import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {id, img, name, price, quantity, ratings, seller, stock} = props?.product;

    const handleAddToCart = props.handleAddToCart;
    return (
      <div className="product">
        <img onError={ (e) =>  e.currentTarget.src ="https://shorten.world/PEz26"}  src={img} alt="" />


        <div className="product-info">
          <h6 className="product-name">{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} stars</p>
        </div>
        <button onClick={() => handleAddToCart(props.product)} className="btn-cart">
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    );
};

export default Product;
