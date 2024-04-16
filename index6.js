document.addEventListener("DOMContentLoaded", function() {
  let nameInput = document.querySelector(".Name1");
  let emailInput = document.querySelector(".Email1");
  let imgInput = document.querySelector(".Image1");
  let urlInput = document.querySelector(".Pdf1");
  let descripInput = document.querySelector(".Description");

  function click() {
      let name = nameInput.value;
      let email = emailInput.value;
      let img = imgInput.value;
      let url = urlInput.value;
      let descrip = descripInput.value;

      let id = "Book" + (Data.length + 1);

      let book = {
          "id": id,
          "name": name,
          "email": email,
          "img": img,
          "url": url,
          "descrip": descrip
      };   

      Data.push(book);
      console.log(book); 

      
      nameInput.value = "";
      emailInput.value = "";
      imgInput.value = "";
      urlInput.value = "";
      descripInput.value = "";
  }

  document.querySelector(".btn").addEventListener("click", click);
});






