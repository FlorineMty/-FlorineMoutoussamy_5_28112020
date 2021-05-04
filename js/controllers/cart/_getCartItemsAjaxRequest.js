function getCartItems(url, idItem) {
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

export default getCartItems;