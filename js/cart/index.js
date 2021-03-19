
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

function displayCart() {
    let itemCount = localStorage.getItem("quantity");
    if (itemCount) {
        document.querySelector(".cartIndex").textContent = itemCount;
    }
}
displayCart();

function getCartData() {

    let retrieveData = JSON.parse(localStorage.getItem("selectedItem"));
    let cartContainer = document.getElementsByClassName("cartPage");

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
        cartContainer.innerHTML = "";

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

            let productImage = document.createElement("img");
            productImage.id = "itemImageCart";
            productImage.src = infoItem["imageUrl"];
            productInfo.appendChild(productImage);

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
                //cartCount();
            });

            function deleteOneItem(cart) {

                localStorage.setItem("selectedItem", JSON.stringify(cart));
                if (cart.length === 0) {
                    localStorage.removeItem("selectedItem");

                }

            }

            //loadDoc(url, idItem);

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

getCartData();

document.getElementById("sendButton").addEventListener("click", orderValidationButton);


function orderValidationButton(event) {

    let products = [];
    console.log(products);

    var items = localStorage.getItem("selectedItem");
    items = JSON.parse(items);

    items.forEach(element => {
        products.push(element.id);
    });

    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    console.log(firstName);
    console.log(lastName);

    let contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        city: city,
        address: address,
    };
    console.log(contact);

    let object = {
        contact,
        products,
    };

    console.log(object);

    let objectRequest = JSON.stringify(object);
    console.log(objectRequest);
    // Get value fields entered by user  

    var validFormFirstname = document.getElementById("firstname");
    var missFirstname = document.getElementById("missFirstname");
    var validFormLastname = document.getElementById("lastname");
    var missLastname = document.getElementById("missLastname");
    var regexNames = /^[a-zA-Z ,.'-]+$/;

    var validFormAddress = document.getElementById("address");
    var missAddress = document.getElementById("missAddress");
    var validFormCity = document.getElementById("city");
    var missCity = document.getElementById("missCity");
    var regexAddress = /([0-9]{1,3}(([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*)/;
    var regexCity = /((([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*)/;

    var validFormEmail = document.getElementById("email");
    var missEmail = document.getElementById("missEmail");
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var error = false;

    if (validFormFirstname.validity.valueMissing) {
        event.preventDefault();
        missFirstname.textContent = "Firstname is missing";
        missFirstname.style.color = "red";
        error = true;
    } else if (regexNames.test(validFormFirstname.value) == false) {
        event.preventDefault();
        missFirstname.textContent = "Invalid format";
        missFirstname.style.color = "orange";
        error = true;
    }
    if (validFormLastname.validity.valueMissing) {
        event.preventDefault();
        missLastname.textContent = "Lastname is missing";
        missLastname.style.color = "red";
        error = true;
    } else if (regexNames.test(validFormLastname.value) == false) {
        event.preventDefault();
        missLastname.textContent = "Invalid format";
        missLastname.style.color = "orange";
        error = true;
    }

    if (validFormAddress.validity.valueMissing) {
        event.preventDefault();
        missAddress.textContent = "Address is missing";
        missAddress.style.color = "red";
        error = true;
    } else if (regexAddress.test(validFormAddress.value) == false) {
        event.preventDefault();
        missAddress.textContent = "Invalid format";
        missAddress.style.color = "orange";
        error = true;
    }

    if (validFormCity.validity.valueMissing) {
        event.preventDefault();
        missCity.textContent = "City is missing";
        missCity.style.color = "red";
        error = true;
    } else if (regexCity.test(validFormCity.value) == false) {
        event.preventDefault();
        missCity.textContent = "Invalid format";
        missCity.style.color = "orange";
        error = true;
    }

    if (validFormEmail.validity.valueMissing) {
        event.preventDefault();
        missEmail.textContent = "Email is missing";
        missEmail.style.color = "red";
        error = true;
    } else if (regexEmail.test(validFormEmail.value) == false) {
        event.preventDefault();
        missEmail.textContent = "Invalid format";
        missEmail.style.color = "orange";
        error = true;
    }

    if (error == false) {

        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/api/furniture/order");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(objectRequest);
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE) {

                localStorage.setItem("order", this.responseText);
                console.log(this.responseText);
                alert(" Your order has been validated")
                window.location.href = "confirmation.html";
            }
        };
    }
}





