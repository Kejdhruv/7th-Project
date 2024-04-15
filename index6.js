// Load books from local storage if available, or initialize as empty array
let books = JSON.parse(localStorage.getItem("books")) || [];

function addBook() {
  // Get input values
  const name = document.getElementById("Name1").value;
  const author = document.getElementById("Email1").value;
  const image = document.getElementById("Password1").value;
  const pdf = document.getElementById("Pdf").value;
  const description = document.getElementById("Password1").value;

  // Create book object
  const book = {
    name,
    author,
    image,
    pdf,
    description
  };

  // Add book to array
  books.push(book);

  // Save array to local storage
  localStorage.setItem("books", JSON.stringify(books));

  // Clear input fields
  document.getElementById("Name1").value = "";
  document.getElementById("Email1").value = "";
  document.getElementById("Password1").value = "";
  document.getElementById("Pdf").value = "";

  // Display success message or update UI as needed
}

// Export books array
function exportBooks() {
  // Convert array to JSON string
  const booksJSON = JSON.stringify(books);
  
  // Create a temporary anchor element
  const anchor = document.createElement("a");
  anchor.href = "data:text/json;charset=utf-8," + encodeURIComponent(booksJSON);
  anchor.download = "books.json";
  anchor.click();
}