import updateCartIcon from "../controllers/cart/_updateCartIcon.js";
import createOrderValidationNumber from "../pages/form.js";
import deleteOneItem from "../controllers/cart/_deleteOneItem.js";
import getCartItems from "../controllers/cart/_getCartItems.js";
//import displayCart from "../controllers/cart/_displayCart.js";
import getTotalPrice from "../controllers/cart/_getTotalPrice.js";
import getCartData from "../controllers/cart/_getCartData.js";

// API URL
const url = "http://localhost:3000/api/furniture/";

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const API = "http://localhost:3000/api/furniture/" + id;

// Call the below function to update the items quantity in the cart icon
updateCartIcon();

// Define selectors
const cartContainerEl = document.querySelector(".cartContent");
const confirmationOrderEl = document.getElementById("sendButton");

// Create DOM elements to display container when cart is empty
function displayEmptyCart() {
    let emptyCartContainer = document.createElement("div");
    emptyCartContainer.className = "emptyCartContainer";

    let displayEmptyCart = document.createElement("div");
    displayEmptyCart.textContent = "Your cart is empty";
    displayEmptyCart.className = "emptyCart";
    emptyCartContainer.appendChild(displayEmptyCart);

    let displayDiscoverButton = document.createElement("a");
    displayDiscoverButton.textContent = "Discover our products";
    displayDiscoverButton.href = "index.html"
    displayDiscoverButton.className = "discoverButton";
    emptyCartContainer.appendChild(displayDiscoverButton);

    document.getElementById("registrationForm").style.display = "none";

    return emptyCartContainer
}

// Create DOM elements to display cart row with selected items 
function displayCartRow(element, index) {
    let idItem = element["id"];
    let varnishItem = element["varnish"]
    let infoItem = JSON.parse(getCartItems(url, idItem));

    let productInfo = document.createElement("div");
    document.querySelector(".cartContent").appendChild(productInfo);
    productInfo.className = "productSummary";

    let productTitle = document.createElement("h3");
    productTitle.id = "itemTitleCart";
    productTitle.innerText = infoItem["name"];
    productInfo.appendChild(productTitle);

    let productLink = document.createElement("a");
    productLink.classList.add("productLink");
    productLink.href = `product.html?id=${infoItem._id}`;
    productInfo.appendChild(productLink);

    let productImage = document.createElement("img");
    productImage.id = "itemImageCart";
    productImage.src = infoItem["imageUrl"];
    productImage.href = `product.html?id=${infoItem._id}`;
    productLink.appendChild(productImage);

    let productVarnish = document.createElement("p");
    productVarnish.id = "itemVarnishCart";
    productVarnish.innerText = varnishItem;
    productInfo.appendChild(productVarnish);

    let productPrice = document.createElement("p");
    productPrice.id = "itemPriceCart";
    productPrice.innerText = infoItem.price / 100 + ` €`;
    productInfo.appendChild(productPrice);

    let productDelete = document.createElement("i");
    productDelete.id = "removeItemCart";
    productDelete.className = "fas fa-trash-alt";
    productInfo.appendChild(productDelete);
    productDelete.value = idItem;
    console.log(productDelete.value);

    productDelete.addEventListener("click", e => {
        deleteOneItem(index);
        location.reload();
    });
    return productInfo;
}

// Display cart page according to the local storage content
function displayCart(cartData) {
    let cartContent = null;

    if (cartData === null) {
        cartContent = displayEmptyCart()
    } else {
        cartContent = document.createElement("div");
        cartContent.className = "cartContainer";
        cartData.forEach(function (cartItem, index) {
            const cartRow = displayCartRow(cartItem, index)
            cartContent.appendChild(cartRow);
        });
    }
    return cartContent
}

// Create DOM elements to display a button to empty cart
function displayClearCartButton() {
    let clearCart = document.createElement("button");
    document.querySelector(".cartContent").appendChild(clearCart);
    clearCart.className = "clearCartButton";
    clearCart.textContent = "Empty the cart";
    clearCart.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
    return clearCart
}

// Create DOM elements to display total cart price
function displayPrice(amount) {
    let totalPriceOrder = document.createElement("p");
    totalPriceOrder.id = "totalPriceOrder";
    totalPriceOrder.innerText = "The total amount of your order is " + amount / 100 + ` €`;
    return totalPriceOrder
}

// Get working cart page
/*function getCartData() {

    let cartData = JSON.parse(localStorage.getItem("cart"));
    let cartContent = null;
    let priceContent = null;
    let clearButton = null;
    if (cartData === null) {
        cartContent = displayEmptyCart()
        cartContainerEl.appendChild(cartContent);
    } else {
        let totalPrice = getTotalPrice(cartData)
        cartContent = displayCart(cartData)
        priceContent = displayPrice(totalPrice)
        clearButton = displayClearCartButton()

        cartContainerEl.appendChild(cartContent);
        cartContainerEl.appendChild(priceContent);
        cartContainerEl.appendChild(clearButton);
    }

};*/
getCartData();

confirmationOrderEl.onclick = () => createOrderValidationNumber();

export default displayCart;
//export { displayEmptyCart as default, displayCartRow as default };




