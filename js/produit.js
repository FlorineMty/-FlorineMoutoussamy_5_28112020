

// API URL
const url = "http://localhost:3000/api/furniture/";

// Get params from URL
const params = new URLSearchParams(window.location.search);
    console.log(params);
const id = params.get("id");
    console.log(id);

const article = document.querySelector("productContent");

var API = "http://localhost:3000/api/furniture/"+ id ;
async function loadDoc(url) {
    let result = await fetch(url)
    return result.json()
}

loadDoc(API).then(article => {
    console.log(article);
        let productDisplay = document.createElement("article");
        document.querySelector("#productContent").appendChild(productDisplay);
        productDisplay.classList.add("productInformation");
      
        let image = document.createElement("img");
        productDisplay.appendChild(image);
        image.classList.add("pictureProductPage");
        image.alt = `${article.name}`;
        image.src = `${article.imageUrl}`;

        let articleDescription = document.createElement("div");
        productDisplay.appendChild(articleDescription);
        articleDescription.classList.add("productDetails");

        let title = document.createElement("h3");
        articleDescription.appendChild(title);
        title.classList.add("cardTitle");
        title.textContent = `${article.name}`;

        let description = document.createElement("p");
        articleDescription.appendChild(description);
        description.classList.add("descriptionCard");
        description.textContent = `${article.description}`;

        let price = document.createElement("p");
        articleDescription.appendChild(price);
        price.classList.add("price");
        price.textContent = `${article.price/100}$`;

        let label = document.createElement("label");
        label.textContent = "Select a varnish: ";
        let varnish = document.createElement("select");
        let selection = `${article.varnish}`;
        articleDescription.appendChild(label);
        label.appendChild(varnish);
        varnish.classList.add("varnishSelection");

        article.varnish.forEach((produit) => {
            console.log(produit);
            let options = document.createElement("option");
            options.id = "varnish";
            options.textContent = selection;
            varnish.appendChild(options);
              
            });

        let cartButton = document.createElement("button");
        articleDescription.appendChild(cartButton);
        cartButton.classList.add("cartButton");
        cartButton.textContent = "Ajouter au panier";
        
        cartButton.addEventListener('click', function() {
            alert('Your' + " " + article.name + ' has been added to your cart')
            addToLocalStorage()
        });

        function addToLocalStorage(){
            let cart = localStorage.getItem('cart');
            console.log(cart);
            cart = JSON.parse(cart);
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        });

    
    var test = localStorage.getItem("test");
    console.log(test);
        

    


