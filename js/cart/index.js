import updateCartIcon from "../utils/_updateCartIcon.js";
import deleteOneItem from "./_deleteOneItem.js";
//import deleteItems from "./_deleteItems.js";
//import getCartData from "./_getCartData.js";
import createOrderValidationNumber from "./_createOrderValidationNumber.js"

// API URL
const url = "http://localhost:3000/api/furniture/";

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

var API = "http://localhost:3000/api/furniture/" + id;

function loadDoc(url, idItem) {
    var item;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            item = this.responseText;
        }
    };
    xhttp.open("GET", url + idItem, false);
    xhttp.send();
    return item;
}

updateCartIcon();

function getCartData() {

    let retrieveData = JSON.parse(localStorage.getItem("selectedItem"));

    if (retrieveData == null) {
        let displayEmptyCartContainer = document.createElement("div");
        displayEmptyCartContainer.className = "emptyCartContainer";
        document.querySelector(".cartContent").appendChild(displayEmptyCartContainer);

        let displayEmptyCart = document.createElement("div");
        displayEmptyCart.textContent = "Your cart is empty";
        displayEmptyCart.className = "emptyCart";
        displayEmptyCartContainer.appendChild(displayEmptyCart);

        let displayDiscoverButton = document.createElement("a");
        displayDiscoverButton.textContent = "Discover our products";
        displayDiscoverButton.href = "index.html"
        displayDiscoverButton.className = "discoverButton";
        displayEmptyCartContainer.appendChild(displayDiscoverButton);

        document.getElementById("registrationForm").style.display = "none";

    } else {

        retrieveData.forEach(function (element, index, array) {
            console.log(element);
            console.log(retrieveData);
            let idItem = element["id"];
            let varnishItem = element["varnish"]
            let infoItem = JSON.parse(loadDoc(url, idItem));

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

            productDelete.addEventListener('click', e => {
                let cart = retrieveData;
                cart.splice(index, 1);
                deleteOneItem(cart);
                location.reload();
            });
        });

        let totalPriceOrder = document.createElement("p");
        totalPriceOrder.id = "totalPriceOrder";
        document.querySelector(".cartContent").appendChild(totalPriceOrder);
        let totalAmount = JSON.parse(localStorage.getItem("totalPrice"))
        totalPriceOrder.innerText = "The total amount of your order is " + totalAmount / 100 + ` €`;

        
        let clearCart = document.createElement("button");
        document.querySelector(".cartContent").appendChild(clearCart);
        clearCart.className = "clearCartButton";
        clearCart.textContent = "Empty the cart";
        clearCart.addEventListener("click", () => {
            alert("Your cart is empty")
            localStorage.clear();
            location.reload();

        });
    }
};
//deleteItems();
getCartData();

document.getElementById("sendButton").addEventListener("click", createOrderValidationNumber);





