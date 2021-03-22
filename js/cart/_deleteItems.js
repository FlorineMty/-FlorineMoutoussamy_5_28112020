let cartContainer = document.getElementsByClassName("cartPage");

function deleteItems() {
    if (cartContainer.innerHTML = "") {
    let clearCart = document.createElement("button");
    document.querySelector(".cartContent").appendChild(clearCart);
    clearCart.className = "clearCartButton";
    clearCart.textContent = "Empty the cart";
    clearCart.addEventListener("click", () => {
        alert("Your cart is empty")
        localStorage.clear();
        location.reload();
    });
}

};

export default deleteItems;