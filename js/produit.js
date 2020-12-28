

// API URL
const url = "http://localhost:3000/api/furniture/";

// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");



var API = "http://localhost:3000/api/furniture/"+ id ;
async function loadDoc(url) {
    let result = await fetch(url)
    return result.json()
}

loadDoc(API).then(article => {
        let productDisplay = document.createElement("article");
        document.querySelector("#productContent").appendChild(productDisplay);
        productDisplay.classList.add("productInformation");
      
        let image = document.createElement("img");
        productDisplay.appendChild(image);
        image.classList.add("pictureProductPage");
        image.alt = article.name;
        image.src = article.imageUrl;

        let articleDescription = document.createElement("div");
        productDisplay.appendChild(articleDescription);
        articleDescription.classList.add("productDetails");

        let title = document.createElement("h3");
        articleDescription.appendChild(title);
        title.classList.add("cardTitle");
        title.textContent = article.name;

        let description = document.createElement("p");
        articleDescription.appendChild(description);
        description.classList.add("descriptionCard");
        description.textContent = article.description;

        let price = document.createElement("p");
        articleDescription.appendChild(price);
        price.classList.add("price");
        price.textContent = article.price/100 + "$";

        let label = document.createElement("label");
        label.textContent = "Select a varnish: ";
        let varnish = document.createElement("select");
        let selection = article.varnish;
        articleDescription.appendChild(label);
        label.appendChild(varnish);
        varnish.id = "varnishSelection";

        article.varnish.forEach((product) => {
            let options = document.createElement("option");
            options.id = "varnish";
            options.textContent = product;
            varnish.appendChild(options); 
            });




        //-----CART----------//

        let cartButton = document.createElement("button");
        articleDescription.appendChild(cartButton);
        cartButton.classList.add("cartButton");
        cartButton.textContent = "Ajouter au panier";

        let selectedVarnish = document.getElementById("varnishSelection").value;
            console.log(selectedVarnish);

        let selectedItem = {
            id : article._id,
            varnish : selectedVarnish
            };

        let cartIndex = document.querySelector('.cartIndex');


        console.log(selectedItem);

        cartButton.addEventListener('click', async function() {
            alert('Your' + " " + article.name + ' has been added to your cart')
                cartCount();
                stockPanier(selectedItem);
                totalPrice();
            
        });

        function cartCount(){
            let itemCount = localStorage.getItem('quantity');
            itemCount = parseInt(itemCount);
            if(itemCount){
                localStorage.setItem('quantity', itemCount + 1);
                cartIndex.textContent = itemCount + 1;
            } else{
                localStorage.setItem('quantity', 1);
                cartIndex.textContent = itemCount = 1;
            }
        }

        function displayCart(){
            let itemCount = localStorage.getItem('quantity');
            if(itemCount){
                cartIndex.textContent = itemCount;
            }
        }
        displayCart();

        function totalPrice(){
            let price = article.price/100;
            let totalCartPrice = JSON.parse(localStorage.getItem('totalPrice'));
            
            if(totalCartPrice != null){
                localStorage.setItem("totalPrice'", totalCartPrice + price);
            } else {
                localStorage.setItem("totalPrice", price);
            }
        }

        function stockPanier(selectedItem) {
            console.log ("le produit est ", selectedItem);
            let idItem = localStorage.getItem ('selectedItem'); 

           if(idItem  === null){ 
               localStorage.setItem('selectedItem', JSON.stringify(selectedItem));
                
            } 
            else {
                let list = JSON.parse(idItem);
                localStorage.setItem('selectedItem', JSON.stringify(list));
            }

        }    
        });

        



/*
        

        //Add items to the cart
        function cartButtonClicked(event){
            let button = event.target
            let productInformation = button.parentElement.parentElement
            let name = productInformation.getElementsByClassName('cardTitle')[0].innerText
            let price = productInformation.getElementsByClassName('price')[0].innerText
            let image = productInformation.getElementsByClassName('pictureProductPage')[0].src
            console.log(name, price, image)
        }
*/

