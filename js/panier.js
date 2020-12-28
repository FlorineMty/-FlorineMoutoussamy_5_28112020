// API URL
const url = "http://localhost:3000/api/furniture/";

var API = "http://localhost:3000/api/furniture/";
async function loadDoc(url) {
    let result = await fetch(url)
    return result.json()
}

loadDoc(API).then(article => {
// Get data from localstorage
let cart = JSON.parse(window.localStorage.getItem("selectedItem"));

for(let i in cart){

    let productInfo = document.createElement('div')
        document.querySelector(".cartContent").appendChild(productInfo)
        productInfo.className = "productSummary";

    let productTitle = document.createElement('h3');
        productTitle.innerText = article.name;
        productInfo.appendChild(productTitle);

    let productImage = document.createElement('img');
        productImage.src = article.imageUrl;
        productInfo.appendChild(productImage);

    let productPrice = document.createElement('p');
        productPrice.innerText = 'Unit price : ' + article.price + ` $`;
        productInfo.appendChild(productPrice);

    let productDelete = document.createElement('i');
        productDelete.className = 'fas fa-trash-alt';
        productInfo.appendChild(productDelete);

    let totalPriceOrder = document.createElement('p');
        totalPriceOrder.className = "totalPriceOrder";
    let totalAmount = 0;
        for(let i = 0; i<cart.length; i++){
           totalAmount += article.price * cart.quantity;
        }
        totalPriceOrder.innerText = totalAmount + ` $`;
}


});

/*
// Get value fields entered by user
     
let firstName = document.getElementById('firstname').value;
let lastName = document.getElementById('lastname').value;
let email = document.getElementById('email').value;
let postalcode = document.getElementById('postalcode').value;

let contact = {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "postalcode": postalcode,
};

// Display selected products in the cart page
// Dipslay total price
// Delete product
// Set alert if cart empty then order and form not available
*/