
var articlesElt = document.getElementById("furniturePictures");

var API = "http://localhost:3000/api/furniture";
async function loadDoc(url) {
    let result = await fetch(url)
    return result.json()
}
loadDoc(API).then(articles => {
        console.log(articles)
            articles.forEach(article => {
      
        let furnitureCard = document.createElement("article")
        document.querySelector(".furniturePictures").appendChild(furnitureCard)
        furnitureCard.classList.add("card")
        furnitureCard.style.margin = "2%"
        furnitureCard.style.padding = "10px"
        furnitureCard.style.boxShadow = "0px 10px 10px rgba(192, 192, 192,0.5)"
        furnitureCard.style.borderRadius = "5px"
        
        let title = document.createElement("h3")
        furnitureCard.appendChild(title)
        title.classList.add("cardTitle")
        title.textContent = `${article.name}`

        let link = document.createElement("a")
        furnitureCard.appendChild(link)
        link.classList.add("link")
        link.href = `produit.html?${article._id}`
      
        let image = document.createElement("img")
        link.appendChild(image)
        image.classList.add("furniturePicture")
        image.alt = `${article.name}`
        image.src = `${article.imageUrl}`

        let description = document.createElement("p")
        furnitureCard.appendChild(description)
        description.classList.add("descriptionCard")
        description.textContent = `${article.description}`

        let varnish = document.createElement("select")
        furnitureCard.appendChild(varnish)
        varnish.classList.add("varnishSelection")
        varnish.textContent = `${article.varnish}`

        let price = document.createElement("p")
        furnitureCard.appendChild(price)
        price.classList.add("price")
        price.textContent = `${article.price}$`

        })
    })

// Suppression du contenu HTML de la liste
document.getElementById("furniturePictures").innerHTML = "";



        