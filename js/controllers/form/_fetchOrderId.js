import getValueDataForm from "./_getValueDataForm.js";

// Fetch orderId from local storage to confirlm the order
function fetchOrderId() {
    let objectRequest = getValueDataForm();
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

export default fetchOrderId;