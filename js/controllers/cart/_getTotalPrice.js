// Add total prices 
let cartData = JSON.parse(localStorage.getItem("cart"));
function getTotalPrice(cartData) {
    let price = 0;
    cartData.forEach(function(cartItem) {
        price += cartItem.price
    })
    return price
}

export default getTotalPrice;