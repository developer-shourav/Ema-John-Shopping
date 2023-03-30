import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
 

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }

    useEffect( () => {
       fetch('fakeData/products.json')
       .then( res => res.json())
       .then( data => setProducts(data))
    },  []);

    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // Step 1: Get Id
        for( const id in storedCart){
            // Step 2: Get the product by using the ID
            const addedProduct = products.find( product => product.id === id);

            // Step 3: Get quantity of the product
            const productQuantity = storedCart[id];
            
            if (addedProduct) {
                // Step 4: add quantity
                addedProduct.quantity = productQuantity ;
            }
            // Step 5: add the addedProduct in savedCart array
            savedCart.push(addedProduct);
        }

        // step 6: Set items form local Storage in Cart
        setCart(savedCart)

    }, [products]);

;


    return (
        <div className='shop-container'>
            <div className="products-container">
             {
                products.map(product => <Product
                     key={product.id}
                     product={product}
                     handleAddToCart = {handleAddToCart}
                     > </Product>)
             }
            </div>

            <div className="cart-container">
              <Cart cart = {cart}> </Cart>
            </div>
            
        </div>
    );
};

export default Shop;