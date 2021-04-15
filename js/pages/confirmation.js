//import {
//    getOrder, 
//    continueShopping, 
//} from "../controllers/confirmation"

import getOrder from "../controllers/confirmation/_getOrder";

getOrder();

// Create DOM elements to get back to the main website page
function continueShopping() {
    let displayContinueShoppingButton = document.createElement("a");
    displayContinueShoppingButton.textContent = "Continue shopping";
    displayContinueShoppingButton.href = "index.html"
    displayContinueShoppingButton.className = "continueShopping";
    document.querySelector(".confirmationContent").appendChild(displayContinueShoppingButton);
};
continueShopping();

localStorage.clear();

