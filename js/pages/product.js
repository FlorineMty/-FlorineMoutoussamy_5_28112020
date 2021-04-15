
import updateCartIcon from "../controllers/cart/_updateCartIcon.js";
//import getItemById from "../controllers/product/_getItemById.js";
import storeTotalPrice from "../controllers/product/_storeTotalPrice.js";
import updateQuantity from "../controllers/product/_updateQuantity.js";
import cartStorage from "../controllers/product/_cartStorage.js";
//import addToCart from "../controllers/product/_addToCart.js";


// API URL
const url = "http://localhost:3000/api/furniture/";

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const api = "http://localhost:3000/api/furniture/" + id;

// Define selectors
const productContainerEl = document.querySelector("#productContent");
const cartIndexEl = document.querySelector(".cartIndex");

async function getItemById(url) {
    let result = await fetch(url)
    return result.json()
};

// Create and append DOM elements to target container
function displayOneProduct(article) {
    let productDisplay = document.createElement("article");
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

    let cartButton = document.createElement("button");
    articleDescription.appendChild(cartButton);
    cartButton.classList.add("cartButton");
    cartButton.textContent = "Add to cart";
    cartButton.id = "addToCart";

    return productDisplay;
}

// Call the below function to update the items quantity in the cart icon
updateCartIcon();


getItemById(api)
.then(async article => {
    const productDisplayEl = displayOneProduct(article);
    productContainerEl.appendChild(productDisplayEl);

    function addToCart() {
        let selectedVarnish = document.getElementById("varnishSelection").value;

        let selectedItem = {
            id: article._id,
            varnish: selectedVarnish,
            price: parseInt(article.price)
        };
        addItemToCart(selectedItem)
        updateCartIcon()
    };
    const cartButton = productDisplayEl.querySelector('#addToCart');
    cartButton.onclick = () => addToCart();  
});











