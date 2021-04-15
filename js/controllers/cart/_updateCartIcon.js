// Update Cart icon with right quantity
function updateCartIcon() {
    let cartStorage = localStorage.getItem("cart");
    if (cartStorage !== null) {
        const cart = JSON.parse(cartStorage);
        document.querySelector(".cartIndex").textContent = itemCount;
    }
};

export default updateCartIcon;