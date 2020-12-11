

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
        articleDescription.classList.add("content");

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

        let varnish = document.createElement("label");
        varnish.textContent = "Select a varnish: ";
        let menu = document.createElement("select");
        let options = document.createElement("option");
        furnitureCard.appendChild(varnish);
        varnish.appendChild(menu);
        menu.appendChild(options);
        varnish.classList.add("varnishSelection");
        
        articles.forEach(article =>  
            {
        options.textContent = `${article.varnish}`;
            });
    
});

var test = localStorage.getItem("test");
    console.log(test);