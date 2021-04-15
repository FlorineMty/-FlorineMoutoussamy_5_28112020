// Delete one specific item in cart
function deleteOneItem(index) {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage !== null) {
        const cart = JSON.parse(cartStorage);
        cart.splice(index,1);

        if (cart.length === 0) {
            localStorage.removeItem("cart");
        } else {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
};

export default deleteOneItem;