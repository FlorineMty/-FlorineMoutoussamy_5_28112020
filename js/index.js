
var articlesElt = document.getElementById("furniturePictures");

var API = "http://localhost:3000/api/furniture";
async function loadDoc(url) {
    let result = await fetch(url)
    return result.json()
}

// Display furniture cards
loadDoc(API).then(articles => {
        console.log(articles)
            articles.forEach(article => {
      
        let furnitureCard = document.createElement("article");
        document.querySelector("#furniturePictures").appendChild(furnitureCard);
        furnitureCard.classList.add("card");
        furnitureCard.onclick = function storeData(){
          window.localStorage.setItem('furnitureDetails', JSON.stringify(articles));
          window.open("produit.html");
        };
        let title = document.createElement("h3");
        furnitureCard.appendChild(title);
        title.classList.add("cardTitle");
        title.textContent = `${article.name}`;
      
        let image = document.createElement("img");
        furnitureCard.appendChild(image);
        image.classList.add("furniturePicture");
        image.alt = `${article.name}`;
        image.src = `${article.imageUrl}`;

        let description = document.createElement("p");
        furnitureCard.appendChild(description);
        description.classList.add("descriptionCard");
        description.textContent = `${article.description}`;

        let varnish = document.createElement("label");
        varnish.textContent = "Select a varnish: ";
        let menu = document.createElement("select");
        let options = document.createElement("option");
        furnitureCard.appendChild(varnish);
        varnish.appendChild(menu);
        menu.appendChild(options);
        varnish.classList.add("varnishSelection");
        options.textContent = `${article.varnish}`;

        let price = document.createElement("p");
        furnitureCard.appendChild(price);
        price.classList.add("price");
        price.textContent = `${article.price/100}$`

        let button = document.createElement("button")
        furnitureCard.appendChild(button)
        button.classList.add("button")

        let link = document.createElement("a");
        button.appendChild(link);
        link.classList.add("link");
        link.href = `produit.html?${article._id}`;
        link.textContent = "Personnaliser";
        
        })
    })

// Remove HTML content from list
document.getElementById("furniturePictures").textContent = "";

