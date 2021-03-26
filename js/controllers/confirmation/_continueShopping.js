// Get back to the main website page
function continueShopping() {
    let displayContinueShoppingButton = document.createElement("a");
    displayContinueShoppingButton.textContent = "Continue shopping";
    displayContinueShoppingButton.href = "index.html"
    displayContinueShoppingButton.className = "continueShopping";
    document.querySelector(".confirmationContent").appendChild(displayContinueShoppingButton);
};

export default continueShopping;