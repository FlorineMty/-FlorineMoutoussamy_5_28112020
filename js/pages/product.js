
import updateCartIcon from "../controllers/cart/_updateCartIcon.js";
import getItemById from "../controllers/product/_getItemById.js";
import storeTotalPrice from "../controllers/product/_storeTotalPrice.js";
import updateQuantity from "../controllers/product/_updateQuantity.js";
import cartStorage from "../controllers/product/_cartStorage.js";
//import addToCart from "../controllers/product/_addToCart.js";

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
// API URL with Id param
const apiId = "http://localhost:3000/api/furniture/" + id;

getItemById(apiId).then(article => {
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

    let priceEl = document.createElement("p");
    articleDescription.appendChild(priceEl);
    priceEl.classList.add("price");
    priceEl.textContent = article.price / 100 + " €";

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

    let price = parseInt(article.price)
    let cartIndexEl = document.querySelector(".cartIndex");

    let cartButton = document.createElement("button");
    articleDescription.appendChild(cartButton);
    cartButton.classList.add("cartButton");
    cartButton.textContent = "Add to cart";

    /*let selectedVarnish = document.getElementById("varnishSelection").value;
    let selectedItem = {
        id: article._id,
        varnish: selectedVarnish,
    };
   
    cartButton.onclick = addToCart(selectedItem);
    console.log(cartButton.onclick);*/

    function addToCart() {
       //cartButton.addEventListener("click", async function () {
            let selectedVarnish = document.getElementById("varnishSelection").value;
            console.log(selectedVarnish);

            let selectedItem = {
                id: article._id,
                varnish: selectedVarnish,
            };
            updateQuantity(cartIndexEl);
            cartStorage(selectedItem);
            storeTotalPrice(price);

        //});
    }

    addToCart();
    updateCartIcon();
});











