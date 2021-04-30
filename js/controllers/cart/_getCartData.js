import getTotalPrice from "./_getTotalPrice.js";
import displayCart from "/js/pages/cart.js";

// Get working cart page
function getCartData() {

    let cartData = JSON.parse(localStorage.getItem("cart"));
    let cartContent = null;
    let priceContent = null;
    let clearButton = null;
    if (cartData === null) {
        cartContent = displayEmptyCart()
        cartContainerEl.appendChild(cartContent);
    } else {
        let totalPrice = getTotalPrice(cartData)
        cartContent = displayCart(cartData)
        priceContent = displayPrice(totalPrice)
        clearButton = displayClearCartButton()

        cartContainerEl.appendChild(cartContent);
        cartContainerEl.appendChild(priceContent);
        cartContainerEl.appendChild(clearButton);
    }

};

export default getCartData;