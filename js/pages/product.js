
import updateCartIcon from "../controllers/cart/_updateCartIcon.js";
import getItemById from "../controllers/product/_getItemByIdFetchRequest.js";
import addItemToCart from "../controllers/cart/_addItemToCart.js";

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const api = "http://localhost:3000/api/furniture/" + id;

// Define selectors
const productContainerEl = document.querySelector("#productContent");
const cartIndexEl = document.querySelector(".cartIndex");

updateCartIcon();

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

    let titleTag = document.querySelector("title");
    titleTag.textContent = article.name + ", Orinoco";

    return productDisplay;
}


// Get the id article and create/append DOM elements
getItemById(api)
    .then(async article => {
        const productDisplayEl = displayOneProduct(article);
        productContainerEl.appendChild(productDisplayEl);
        // Get the value of the selected varnish
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
    }).catch(err => {
        console.error(err)
    });











