


function createOrderValidationNumber() {
//Create an array to get data stored in local storage
    let products = [];

    let items = localStorage.getItem("cart");
    items = JSON.parse(items);
    console.log(items);

    items.forEach(element => {
        products.push(element.id);
    });
//Get value fields entered by user
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;

    let contact = {
        firstName,
        lastName,
        email,
        city,
        address,
    };
    console.log(contact);

    let object = {
        contact,
        products,
    };

    console.log(object);

    let objectRequest = JSON.stringify(object);
    console.log(objectRequest);

// Regex validation form
    var form_Ok = true;

    const missFirstname = document.getElementById("missFirstname");
    const missLastname = document.getElementById("missLastname");
    const regexNames = /^[a-zA-Z ,.'-]+$/;

    const missAddress = document.getElementById("missAddress");
    const missCity = document.getElementById("missCity");
    const regexAddress = /([0-9]{1,3}(([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*)/;
    const regexCity = /((([,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç']+)*)/;

    const missEmail = document.getElementById("missEmail");
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (lastName == "" || regexNames.exec(lastName) == null){
        form_Ok = false
        missLastname.textContent = "Lastname is missing or unvalid";
        missLastname.style.color = "red";
    }
    if (firstName == "" || regexNames.exec(firstName) == null){
        form_Ok = false
        missFirstname.textContent = "Firstname is missing or unvalid";
        missFirstname.style.color = "red";
    }
    if (address == "" || regexAddress.exec(address) == null){
        form_Ok = false
        missAddress.textContent = "Address is missing or unvalid";
        missAddress.style.color = "red";
    }
    if (city == "" || regexCity.exec(address) == null){
        form_Ok = false
        missCity.textContent = "City is missing or unvalid";
        missCity.style.color = "red";
    }
    if (email == "" || regexEmail.exec(email) == null){
        form_Ok = false
        missEmail.textContent = "Firstname is missing or unvalid";
        missEmail.style.color = "red";
    } else {
// Post ajax request 
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
    };
};

export default createOrderValidationNumber;
