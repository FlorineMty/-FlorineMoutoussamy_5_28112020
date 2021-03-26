// Update Cart icon with right quantity
function updateCartIcon() {
    let itemCount = localStorage.getItem("quantity");
    if (itemCount) {
        document.querySelector(".cartIndex").textContent = itemCount;
    }
};

export default updateCartIcon;