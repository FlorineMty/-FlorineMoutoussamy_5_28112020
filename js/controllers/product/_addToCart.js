
function addToCart(selectedItem) {
        updateQuantity(cartIndexEl);
        cartStorage(selectedItem);
        storeTotalPrice(price);

};
let cartButton = document.querySelector(".cartButton");
cartButton.onclick = updateQuantity(cartIndexEl);
cartButton.onclick = cartStorage(selectedItem);
cartButton.onclick = storeTotalPrice(price);


export default addToCart;