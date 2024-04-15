import  Data from "./index2.js";
document.addEventListener("DOMContentLoaded", function() {
  let name = document.querySelector(".Name1").value;
  let email = document.querySelector(".Email1").value;
  let img = document.querySelector(".Image1").value;
  let url = document.querySelector(".Pdf1").value;
  let descrip = document.querySelector(".Description").value;

 
let data=Data ; 
  let id = "Book" + (Data.length + 1);

  
  let book = {
      "id": id,
      "name": name,
      "email": email,
      "img": img,
      "url": url,
      "descrip": descrip
  };   

  console.log(book); 

  
  data.push(book);
});





