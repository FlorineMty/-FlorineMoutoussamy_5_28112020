import { LoadDoc } from "/js/LoadDoc.js";

// Get data from API
var API = "http://localhost:3000/api/furniture";

function displayCart(){
  let itemCount = localStorage.getItem("quantity");
  if(itemCount){
      document.querySelector(".cartIndex").textContent = itemCount;
  }
}
displayCart();

// Display furniture cards
function displayItems() {
LoadDoc.loadDocFetch(API).then(articles => {
  console.log(articles)
    articles.forEach(article =>  
    {
      let furnitureCard = document.createElement("article");
        document.querySelector("#furniturePictures").appendChild(furnitureCard);
        furnitureCard.classList.add("card");
      
        let image = document.createElement("img");
        furnitureCard.appendChild(image);
        image.classList.add("furniturePicture");
        image.alt = article.name;
        image.src = article.imageUrl;

        let articleDescription = document.createElement("div");
        furnitureCard.appendChild(articleDescription);
        articleDescription.classList.add("content");

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
        price.textContent = article.price/100 + " €";

        let link = document.createElement("a");
        articleDescription.appendChild(link);
        link.classList.add("link");
        link.href = `produit.html?id=${article._id}`;
        link.textContent = "See more details";
        
        })
    })

  }
  displayItems();
