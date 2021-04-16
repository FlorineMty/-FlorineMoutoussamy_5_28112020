/*function getIdStored() {
    //Create an array to get data stored in local storage
        let products = [];
    
        var items = localStorage.getItem("cart");
        items = JSON.parse(items);
        console.log(items);
    
        items.forEach(element => {
            products.push(element.id);
        });

        return products
    }

function getValueDataForm() {
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;

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
}

function getRegexValidation(event) {
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


}

function fetchOrderNumber() {
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
}*/