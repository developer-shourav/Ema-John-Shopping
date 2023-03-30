import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartStoredProduct, setCartStoredProduct] = useState([]);
 

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
        const storedProduct = [];
        setCartStoredProduct(storedProduct)
        // Step 1: Get Id
        for( const id in storedCart){
            // Step 2: Get the product by using the ID
            const addedProduct = products.find( product => product.id === id);

            // Step 3: Get quantity of the product
            const productQuantity = storedCart[id];
            
            if (addedProduct) {
                addedProduct.quantity = productQuantity ;
            }
            storedProduct.push(addedProduct);
        }

        

    }, [products]);

    console.log(cartStoredProduct);


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