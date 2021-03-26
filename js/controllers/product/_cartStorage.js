function cartStorage(selectedItem) {
    console.log("le produit est ", selectedItem);
    let idItem = localStorage.getItem("selectedItem");

    if (idItem == null) {
        let items = [];
        items.push(selectedItem);
        localStorage.setItem("selectedItem", JSON.stringify(items));

    }
    else {
        let list = JSON.parse(idItem);
        let items = [];
        list.forEach(element => {
            items.push(element);
        });
        items.push(selectedItem);
        localStorage.setItem("selectedItem", JSON.stringify(items));
    }

};

export default cartStorage;