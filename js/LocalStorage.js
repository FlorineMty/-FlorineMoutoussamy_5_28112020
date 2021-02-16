const LocalStorage = new Object (
    {

        cartItem : document.querySelector(".cartIndex"),

        getTotalPrice : function (){
            let price = parseInt(article.price)
            let cartPrice = JSON.parse(localStorage.getItem('totalPrice'));
                if(cartPrice != null){
                    localStorage.setItem("totalPrice", cartPrice + price);
                } else {
                    localStorage.setItem("totalPrice", price);
                }
        },
        cartCount : function (){
            let itemCount = localStorage.getItem("quantity");
            itemCount = parseInt(itemCount);
            if(itemCount){
                localStorage.setItem("quantity", itemCount + 1);
                LocalStorage.cartItem.textContent = itemCount + 1;
            } else{
                localStorage.setItem("quantity", 1);
                LocalStorage.cartItem.textContent = itemCount = 1;
            }
        },
        cartStock : function (selectedItem) {
            let idItem = localStorage.getItem ("selectedItem"); 

            if(idItem  == null){ 
               let items = [];
               items.push(selectedItem);
               localStorage.setItem("selectedItem", JSON.stringify(items));
                
            } 
            else {
                let list = JSON.parse(idItem);
                let items = [];
                list.forEach(element => {
                    items.push(element); 
                });
                items.push(selectedItem);
                localStorage.setItem("selectedItem", JSON.stringify(items));
            }

        },
        getOrder : function () {
            if (localStorage.getItem("order")){ 
            let confirmationNumber = document.querySelector("#orderNumber");
            confirmationNumber.innerHTML= "&nbsp" + JSON.parse(localStorage.getItem("order")).orderId;
            };
           }
           
    }

);

export { LocalStorage };