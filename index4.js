import database from "./database.js";
let databases = database ; 
function redirectTo(url) {
    window.location.href = url;
}


let currentUrl = window.location.href;

// Split the URL by "?" to separate the base URL from the query string 
let parts = currentUrl.split("?");
let queryString = parts[1];

// Split the query string by "&" to separate the parameters
let queryParams = queryString.split("&");

// Initialize a variable to store the value of the "id" parameter
let Id;

// Iterate through the parameters to find the "id" parameter
for (let i = 0; i < queryParams.length; i++) {
    let param = queryParams[i].split("=");
    if (param[0] === "id") {
        Id = param[1];
        break; // Exit the loop once "id" parameter is found
    }
}

console.log("ID extracted from URL:", Id);

databases.forEach((element) => {


    if (Id === element.id) {
        let head = document.querySelector('.Head');
        let grid = document.querySelector('.Grid');
        head.textContent = element.id;
        element.data.forEach((Element) => {
            let product = document.createElement('div');
            product.classList.add('product');
            grid.appendChild(product);

            let pimage = document.createElement('div');
            pimage.classList.add('pimage');
            product.appendChild(pimage);
            pimage.style.backgroundImage = "url('" + Element.img + "')";

            let Name = document.createElement('div');
            Name.classList.add('Name');
            product.appendChild(Name);
            Name.textContent = Element.name;

            product.addEventListener('click', function () {
                redirectTo('productpage.html?id=' + Element._id);
                ;
            });
        })
    }
});