
function addToCart(selectedItem) {
        updateQuantity(cartIndexEl);
        cartStorage(selectedItem);
        storeTotalPrice(price);

};

export default addToCart;