
let cartIndexEl = document.querySelector(".cartIndex");

function updateQuantity(cartIndexEl) {
    let itemCount = localStorage.getItem("quantity");
    itemCount = parseInt(itemCount);
    if (itemCount) {
        localStorage.setItem("quantity", itemCount + 1);
        cartIndexEl.textContent = itemCount + 1;
    } else {
        localStorage.setItem("quantity", 1);
        cartIndexEl.textContent = itemCount = 1;
    }
};

export default updateQuantity;