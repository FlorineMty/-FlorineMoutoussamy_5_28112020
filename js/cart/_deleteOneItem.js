function deleteOneItem(cart) {
    localStorage.setItem("selectedItem", JSON.stringify(cart));
    if (cart.length === 0) {
        localStorage.removeItem("selectedItem");

    }

};

export default deleteOneItem;