import storeTotalPrice from "../controllers/product/_storeTotalPrice.js";
import updateQuantity from "../controllers/product/_updateQuantity.js";
import cartStorage from "../controllers/product/_cartStorage.js";

function addToCart(selectedItem) {
        let selectedVarnish = document.getElementById("varnishSelection").value;
        console.log(selectedVarnish);

        updateQuantity(cartIndexEl);
        cartStorage(selectedItem);
        storeTotalPrice(price);
    };

export default addToCart;