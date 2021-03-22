// Get the order number stored in local storage 
function getOrder() {
    if (localStorage.getItem("order")) {
        let confirmationNumber = document.querySelector("#orderNumber");
        confirmationNumber.innerHTML = "&nbsp" + JSON.parse(localStorage.getItem("order")).orderId;
    };
};

export default getOrder;