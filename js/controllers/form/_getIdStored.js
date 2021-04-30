//Create an array to get data stored in local storage
function getIdStored() {

    let products = [];

    var items = localStorage.getItem("cart");
    items = JSON.parse(items);
    console.log(items);

    items.forEach(element => {
        products.push(element.id);
    });

    return products
}

export default getIdStored;