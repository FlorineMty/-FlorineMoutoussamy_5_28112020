// Delete one specific item in cart
function deleteOneItem(cart) {
    localStorage.setItem("selectedItem", JSON.stringify(cart));
    if (cart.length === 0) {
        localStorage.removeItem("selectedItem");
    }
    let itemCount = localStorage.getItem("quantity");
    itemCount = parseInt(itemCount);
    if (itemCount) {
        localStorage.setItem("quantity", itemCount - 1);
        document.querySelector(".cartIndex").textContent = itemCount - 1;
    } else {
        localStorage.setItem("quantity", 1);
        document.querySelector(".cartIndex").textContent = itemCount = 1;
    }
};

export default deleteOneItem;