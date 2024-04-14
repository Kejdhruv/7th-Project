import Data from "./data.js";
let Datas = Data;
let currentUrl = window.location.href;

Datas.forEach((element) => {
    let id = element._id.match(/'([^']+)'/)[1];

    if (currentUrl.includes(id)) {
        let head = document.querySelector('.Heading');
        let description = document.querySelector('.Description');
        let img = document.querySelector('.Img');
        let aut = document.querySelector('.Author');
        let Year = document.querySelector('.Year');
        let downloadBtn = document.querySelector('.Download'); 

        head.textContent = element.name;
        Year.textContent = `Sem: ${element.year}`;
        aut.textContent = `Author: ${element.author}`;
        description.textContent = `Description: ${element.descrip}`;
        img.style.backgroundImage = `url('${element.img}')`;

        downloadBtn.addEventListener("click", () => {
            downloadBtn.innerText = "Downloading";
            fetchFile(element.url, downloadBtn); 
        });

        return;
    }
});

function fetchFile(url, downloadBtn) {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.blob();
        })
        .then(file => {
            let tempUrl = URL.createObjectURL(file);
            const aTag = document.createElement("a");
            aTag.href = tempUrl;
            aTag.download = url.replace(/^.*[\\\/]/, '');
            document.body.appendChild(aTag);
            aTag.click();
            alert("File downloaded successfully!");
            downloadBtn.innerText = "Download Pdf";
            URL.revokeObjectURL(tempUrl);
            aTag.remove();
        })
        .catch(error => {
            alert("Failed to download file: " + error.message);
            downloadBtn.innerText = "Download Pdf";
        });
}