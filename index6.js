
document.addEventListener("DOMContentLoaded", function() {
  let nameInput = document.querySelector("#Name1").value;
  let emailInput = document.querySelector("#Email1").value;
  let imgInput = document.querySelector("#Image1").value;
  let urlInput = document.querySelector("#Pdf1").value;
  let descripInput = document.querySelector("#Description").value;
let Form = document.querySelector(".Form").value ; 
  function click() {
      let name = nameInput;
      let email = emailInput;
      let img = imgInput;
      let url = urlInput;
      let descrip = descripInput;

      let id = "Book" ;  

      let book = {
          "id": id,
          "name": name,
          "email": email,
          "img": img,
          "url": url,
          "descrip": descrip
      };   

      //Data.push(book);
      //console.log(book); 

      
      nameInput = "";
      emailInput = "";
      imgInput = "";
      urlInput = "";
      descripInput = "";
 alert("Book added Successfully") ; 
  }

  document.querySelector(".btn").addEventListener("click", click);
});






