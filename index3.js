import Data from "./data.js";
let Datas = Data ; 
let currentUrl = window.location.href;

Datas.forEach((element) => {
    let id = element._id.match(/'([^']+)'/)[1];

    if (currentUrl.includes(id)) {
        let head = document.querySelector('.Heading');
        let description = document.querySelector('.Description');
        let img = document.querySelector('.Img');
        let aut = document.querySelector('.Author')
        let Year = document.querySelector('.Year')
        head.textContent = element.name;
        Year.textContent = ` Sem : ${element.year}`
        aut.textContent = ` Author : ${element.author}`
        description.textContent = ` Description : ${element.descrip}`;
        img.style.backgroundImage = `url('${element.img}')`;

        return;
    }
});