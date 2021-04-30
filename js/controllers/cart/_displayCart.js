import displayEmptyCart from "/js/pages/cart.js";
import displayCartRow from "/js/pages/cart.js";

// Display cart page according to the local storage content

let cartData = JSON.parse(localStorage.getItem("cart"));

function displayCart(cartData) {
    let cartContent = null;

    if (cartData === null) {
        cartContent = displayEmptyCart()
    } else {
        cartContent = document.createElement("div");
        cartContent.className = "cartContainer";
        cartData.forEach(function (cartItem, index) {
            const cartRow = displayCartRow(cartItem, index)
            cartContent.appendChild(cartRow);
        });
    }
    return cartContent
}

export default displayCart;