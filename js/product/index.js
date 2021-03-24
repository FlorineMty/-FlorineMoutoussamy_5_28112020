
//import addToCart from "./_addToCart.js";
import updateCartIcon from "../utils/_updateCartIcon.js";
import updateTitleTag from "../utils/_updateTitleTag.js";
import getItemById from "./_getItemById.js";
//import getTotalPrice from "./_getTotalPrice.js"

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
// API URL
const api = "http://localhost:3000/api/furniture/" + id;

getItemById(api).then(article => {
    let productDisplay = document.createElement("article");
    document.querySelector("#productContent").appendChild(productDisplay);
    productDisplay.classList.add("productInformation");

    let image = document.createElement("img");
    productDisplay.appendChild(image);
    image.classList.add("pictureProductPage");
    image.alt = article.name;
    image.src = article.imageUrl;

    let articleDescription = document.createElement("div");
    productDisplay.appendChild(articleDescription);
    articleDescription.classList.add("productDetails");

    let title = document.createElement("h3");
    articleDescription.appendChild(title);
    title.classList.add("cardTitle");
    title.textContent = article.name;

    let description = document.createElement("p");
    articleDescription.appendChild(description);
    description.classList.add("descriptionCard");
    description.textContent = article.description;

    let price = document.createElement("p");
    articleDescription.appendChild(price);
    price.classList.add("price");
    price.textContent = article.price / 100 + " €";

    let label = document.createElement("label");
    label.textContent = "Select a varnish: ";
    let varnish = document.createElement("select");
    articleDescription.appendChild(label);
    label.appendChild(varnish);
    varnish.id = "varnishSelection";

    article.varnish.forEach((product) => {
        let options = document.createElement("option");
        options.id = "varnish";
        options.textContent = product;
        options.value = product;
        varnish.appendChild(options);
    });

    function getTotalPrice() {
        let price = parseInt(article.price)
        let cartPrice = JSON.parse(localStorage.getItem('totalPrice'));
        if (cartPrice != null) {
            localStorage.setItem("totalPrice", cartPrice + price);
        } else {
            localStorage.setItem("totalPrice", price);
        }
    }

    let cartButton = document.createElement("button");
    articleDescription.appendChild(cartButton);
    cartButton.classList.add("cartButton");
    cartButton.textContent = "Add to cart";

    function addToCart() {
        cartButton.addEventListener("click", async function () {
            let selectedVarnish = document.getElementById("varnishSelection").value;
            console.log(selectedVarnish);

            let selectedItem = {
                id: article._id,
                varnish: selectedVarnish,
            };
            updateQuantity();
            cartStorage(selectedItem);
            getTotalPrice();

        });

        let cartIndex = document.querySelector(".cartIndex");

        function updateQuantity() {
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

        }
    }
    addToCart(cartButton);
    updateCartIcon();
    updateTitleTag();
});











