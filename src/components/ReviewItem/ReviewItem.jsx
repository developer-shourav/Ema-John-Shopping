import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product, handleRemoveFormCart}) => {
    const {id, img, price, name, quantity, shipping} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />

            <div className="review-details">
              <p className='product-title'>{name}</p>
              <p>Price: <span className='orange-text'>${price}</span></p>
              <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div> 
            <button onClick={() => handleRemoveFormCart(id)} className='btn-delete'><FontAwesomeIcon className='icon-style' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;