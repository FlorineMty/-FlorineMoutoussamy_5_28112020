
// API URL
const url = "http://localhost:3000/api/furniture/";

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");



var API = "http://localhost:3000/api/furniture/"+ id ;
async function loadDoc(url) {
    let result = await fetch(url)
    return result.json()
}
let products = [];
loadDoc(API).then(article => {
    let cart = JSON.parse(window.localStorage.getItem("selectedItem"));

    for(let id in cart){{ products.push(id) }
    console.log(typeof id);
    let productInfo = document.createElement('div')
        document.querySelector(".cartContent").appendChild(productInfo)
        productInfo.className = "productSummary";

    let productTitle = document.createElement('h3');
        productTitle.id = "itemTitleCart";
        productTitle.innerText = cart.name;
        productInfo.appendChild(productTitle);

    let productImage = document.createElement('img');
        productImage.id = "itemImageCart"
        productImage.src = cart.imageUrl;
        productInfo.appendChild(productImage);
        
    let productVarnish = document.createElement('p');
        productVarnish.id = "itemVarnishCart";
        productVarnish.innerText = cart.varnish;
        productInfo.appendChild(productVarnish);

    let productPrice = document.createElement('p');
        productPrice.id = "itemPriceCart"
        productPrice.innerText = 'Unit price : ' + cart.price/100 + ` $`;
        productInfo.appendChild(productPrice);

    let productDelete = document.createElement('i');
        productDelete.id = "removeItemCart"
        productDelete.className = 'fas fa-trash-alt';
        productInfo.appendChild(productDelete);

    let clearCart= document.createElement('button');
        document.querySelector(".cartContent").appendChild(clearCart);
        clearCart.className = "clearCartButton";
        clearCart.textContent = "Vider le panier"; 
        clearCart.addEventListener("click" , () => {
            alert('Your cart is empty')
            localStorage.clear();
            location.reload();
    })

    let totalPriceOrder = document.createElement('p');
        totalPriceOrder.id = "totalPriceOrder";

    let totalAmount = 0;
        for(let i = 0; i<cart.length; i++){
           totalAmount += cart.price * cart.quantity;
        }
        totalPriceOrder.innerText = totalAmount + ` $`;

    }
    console.log(products);
    console.log(cart);

});



// Get value fields entered by user
     
let firstname = document.getElementById('firstname').value;
let lastname = document.getElementById('lastname').value;
let email = document.getElementById('email').value;
let postalCode = document.getElementById('postalCode').value;
let city = document.getElementById('city').value;
let address = document.getElementById('address').value;

let contact = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    postalCode: postalCode,
    city: city,
    address: address
};
console.log(contact);

let request = {
    contact,
    products,
}
console.log(request);
/*
const postUrl = "http://localhost:3000/api/furniture/order"
console.log(postUrl);

async function loadDoc(url) {
    let result = await fetch(url)
    return result.json()
}

loadDoc(postUrl).then(element => {

}
*/
// Display selected products in the cart page
// Dipslay total price
// Delete product
// Set alert if cart empty then order and form not available
