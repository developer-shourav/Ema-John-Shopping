import React from 'react';
import Cart from '../Cart/Cart';

const Orders = () => {
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>Order Page</h2>
            </div>

            <div className='cart-container'>  
                <Cart cart={[]}> </Cart>
            </div>
            
        </div>
    );
};

export default Orders;
