function updateCartCount() {
    let itemCount = localStorage.getItem("quantity");
    if (itemCount) {
        document.querySelector(".cartIndex").textContent = itemCount;
    }
};

export default updateCartCount;