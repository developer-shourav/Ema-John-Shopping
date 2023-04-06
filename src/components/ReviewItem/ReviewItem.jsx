import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({product}) => {
    console.log(product);
    const {img, price, category, name, quantity, shipping} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItem;