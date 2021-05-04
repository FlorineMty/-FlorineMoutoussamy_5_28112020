import updateCartIcon from "../controllers/cart/_updateCartIcon.js";
import createOrderValidationNumber from "../pages/form.js";
import { displayCart, displayPrice, displayEmptyCart, displayClearCartButton } from "../controllers/cart/_displayCartPageComponents.js"
import getTotalPrice from "../controllers/cart/_getTotalPrice.js";

async function displayCartPage() {
    // Define selectors
    const cartContainerEl = document.querySelector(".cartContent");
    const confirmationOrderEl = document.getElementById("sendButton");

    // Call the below function to update the items quantity in the cart icon
    updateCartIcon();

    // Get cart data from local storage
    const cartData = await JSON.parse(localStorage.getItem("cart"));

    let cartContent = null;
    let priceContent = null;
    let clearButton = null;

    if (cartData === null) {
        // Display empty cart whan cartData is null
        cartContent = displayEmptyCart()
        cartContainerEl.appendChild(cartContent);
    } else {
        let totalPrice = getTotalPrice(cartData)

        // Display page components with cartData
        cartContent = displayCart(cartData)
        priceContent = displayPrice(totalPrice)
        clearButton = displayClearCartButton()

        // Append different components to the cart page
        cartContainerEl.appendChild(cartContent);
        cartContainerEl.appendChild(priceContent);
        cartContainerEl.appendChild(clearButton);
    }

    confirmationOrderEl.onclick = () => createOrderValidationNumber();

}

displayCartPage();














