//let cartButton = document.createElement("button");
let selectedItem = {
    id: article._id,
    varnish: selectedVarnish,
};

function addToCart(selectedItem) {
    cartButton.addEventListener("click", async function () {
        let selectedVarnish = document.getElementById("varnishSelection").value;
        console.log(selectedVarnish);

        let selectedItem = {
            id: article._id,
            varnish: selectedVarnish,
        };
        cartCount();
        cartStock(selectedItem);
        getTotalPrice();

    });

    let cartIndex = document.querySelector(".cartIndex");

    function cartCount() {
        let itemCount = localStorage.getItem("quantity");
        itemCount = parseInt(itemCount);
        if (itemCount) {
            localStorage.setItem("quantity", itemCount + 1);
            cartIndex.textContent = itemCount + 1;
        } else {
            localStorage.setItem("quantity", 1);
            cartIndex.textContent = itemCount = 1;
        }
    }

    function cartStock(selectedItem) {
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

    }
};

export default addToCart;