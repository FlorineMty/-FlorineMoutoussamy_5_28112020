// Get params from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// API URL
var api = "http://localhost:3000/api/furniture/" + id;

async function getItemById(api) {
    let result = await fetch(api)
    return result.json()
};

export default getItemById;