
const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    console.log(products);
}

export default cartProductsLoader;