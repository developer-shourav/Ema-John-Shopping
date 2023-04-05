import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
  
    // If cart Data is in Database , I have to use Async await
    const storedCart = getShoppingCart();

    const savedCart = [];
    for( const id in storedCart){
        const addedProduct = products.find(pd => pd?.id == id);
        if( addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);

        }
    }

    // If I need to return two this form a function : The method is
    // 1. Return as an array [itemOne, itemTwo];
    // 2. Return as an object { itemOne, itemTow}


    return savedCart;
}

export default cartProductsLoader;