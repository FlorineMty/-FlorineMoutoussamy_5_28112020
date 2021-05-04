// Get id item from API with fetch request

// API URL
const url = "http://localhost:3000/api/furniture/";

async function getItemById(url) {
    let result = await fetch(url)
    return result.json()
};

export default getItemById;