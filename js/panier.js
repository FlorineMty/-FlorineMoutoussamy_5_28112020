
// API URL
const url = "http://localhost:3000/api/furniture/";

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");



var API = "http://localhost:3000/api/furniture/"+ id ;
async function loadDoc(url, idItem) {
    let result = await fetch(url + idItem)
    return result.json()
}



let retrieveData = JSON.parse(localStorage.getItem("selectedItem"));
let cartContainer = document.getElementsByClassName("cartPage");

if(retrieveData == null) {
    let displayEmptyCartContainer = document.createElement('div');
    displayEmptyCartContainer.className = "emptyCartContainer"
    document.querySelector(".cartContent").appendChild(displayEmptyCartContainer);

    let displayEmptyCart = document.createElement('div');
    displayEmptyCart.textContent = "Your cart is empty";
    displayEmptyCart.className = "emptyCart";
    displayEmptyCartContainer.appendChild(displayEmptyCart);

    let displayDiscoverButton = document.createElement('a');
    displayDiscoverButton.textContent = "Discover our products";
    displayDiscoverButton.href = "index.html"
    displayDiscoverButton.className = "discoverButton";
    displayEmptyCartContainer.appendChild(displayDiscoverButton);

} else {
    cartContainer.innerHTML = '';

retrieveData.forEach(element => {
    console.log(element);
    console.log(retrieveData);
    let idItem = element["id"];
    let varnishItem = element["varnish"]
    let infoItem = loadDoc(url, idItem);
    console.log(varnishItem);
    console.log(infoItem);

    let productInfo = document.createElement('div');
        document.querySelector(".cartContent").appendChild(productInfo);
        productInfo.className = "productSummary";

    let productTitle = document.createElement('h3');
        productTitle.id = "itemTitleCart";
        productTitle.innerText = infoItem.name;
        productInfo.appendChild(productTitle);

    let productImage = document.createElement('img');
        productImage.id = "itemImageCart";
        productImage.src = infoItem.imageUrl;
        productInfo.appendChild(productImage);
        
    let productVarnish = document.createElement('p');
        productVarnish.id = "itemVarnishCart";
        productVarnish.innerText = varnishItem;
        productInfo.appendChild(productVarnish);

    let productPrice = document.createElement('p');
        productPrice.id = "itemPriceCart";
        productPrice.innerText = 'Unit price : ' + infoItem.price/100 + ` $`;
        productInfo.appendChild(productPrice);

    let productDelete = document.createElement('i');
        productDelete.id = "removeItemCart";
        productDelete.className = 'fas fa-trash-alt';
        productInfo.appendChild(productDelete);

    });

    let totalPriceOrder = document.createElement('p');
        totalPriceOrder.id = "totalPriceOrder";
        document.querySelector(".cartContent").appendChild(totalPriceOrder);

    let totalAmount = 0;
        for(let i = 0; i<retrieveData.length; i++){
        totalAmount += retrieveData.price * retrieveData.quantity;
        }
        totalPriceOrder.innerText = "The total amount of the order is " + totalAmount + ` $`;

    let clearCart= document.createElement('button');
        document.querySelector(".cartContent").appendChild(clearCart);
        clearCart.className = "clearCartButton";
        clearCart.textContent = "Empty the cart"; 
        clearCart.addEventListener("click" , () => {
            alert('Your cart is empty')
            localStorage.clear();
            location.reload();       
            
    });

}
/*
    let products = [];


    JSON.parse(localStorage.getItem("selectedItem")).forEach((element) => {
    products.push(id);
        });
    
    // Regex
    let checkString = /^[A-Z]{1}[a-z]/;
    let checkMail = /.+@.+\..+/;
    let checkAdresse = /^[^@&"()!_$*€£`%+=\/;?#]+$/;
    
    // Get value fields entered by user
         
    let firstName = document.getElementById('firstname').value;
    let lastnName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let address = document.getElementById('address').value;
    
    let contact = {
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "city": city,
        "address": address
    };
    console.log(contact);
    
    let object = {
        contact,
        products,
    };
    
    console.log(object);
    
     let objectRequest = JSON.stringify(object);
    
     var request = new XMLHttpRequest();
          request.open("POST", "http://localhost:3000/api/furniture/order");
          request.setRequestHeader("Content-Type", "application/json");
          request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE) {
              console.log(this.responseText);
              localStorage.setItem("order", this.responseText);
              window.location.href = "confirmation.html";
            }
          };


*/

