function getTotalPrice() {
    let price = parseInt(article.price)
    let cartPrice = JSON.parse(localStorage.getItem('totalPrice'));
    if (cartPrice != null) {
        localStorage.setItem("totalPrice", cartPrice + price);
    } else {
        localStorage.setItem("totalPrice", price);
    }
};

export default getTotalPrice;