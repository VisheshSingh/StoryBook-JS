// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Prototype of UI
UI.prototype.addBookList = function(book) {
  const list = document.getElementById("book-list");
  // create a row;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `;

  list.appendChild(row);
};

UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = function(message, className) {
  // create a div
  const div = document.createElement("div");
  // add class name
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // container
  const container = document.querySelector(".container");
  // form
  const form = document.querySelector("#book-form");
  //insert before
  container.insertBefore(div, form);

  // set timer
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
};

document.getElementById("book-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Get title, author, isbn from form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Instantiate the Book constructor
  const book = new Book(title, author, isbn);

  // Instantiate the UI constructor
  const ui = new UI();

  // Validate form fields
  if (title == "" || author == "" || isbn == "") {
    ui.showAlert("Please fill in the details", "error");
  } else {
    // add book to list
    ui.addBookList(book);
    // clear form fields
    ui.clearFields();
    // success message
    ui.showAlert("Book added", "success");
  }
});
