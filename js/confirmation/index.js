//import { LocalStorage } from "/js/LocalStorage.js";

function getOrder () {
    if (localStorage.getItem("order")){ 
    let confirmationNumber = document.querySelector("#orderNumber");
    confirmationNumber.innerHTML= "&nbsp" + JSON.parse(localStorage.getItem("order")).orderId;
    };
   };
getOrder();

function continueShopping(){
let displayContinueShoppingButton = document.createElement("a");
displayContinueShoppingButton.textContent = "Continue shopping";
displayContinueShoppingButton.href = "index.html"
displayContinueShoppingButton.className = "continueShopping";
document.querySelector(".confirmationContent").appendChild(displayContinueShoppingButton);
}
continueShopping();
localStorage.clear();