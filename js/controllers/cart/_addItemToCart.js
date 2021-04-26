// Add selected items to local storage
function addItemToCart(selectedItem) {
    let cart = localStorage.getItem("cart"); // Fetch cart data from local storage
    if (cart == null) { // If there is no data 
        let items = []; //Create new cart datas and save it
        items.push(selectedItem);
        localStorage.setItem("cart", JSON.stringify(items));
    } else { // Get cart data stored and add new product
        let items = JSON.parse(cart);
        items.push(selectedItem);
        localStorage.setItem("cart", JSON.stringify(items));
    }
};

export default addItemToCart;