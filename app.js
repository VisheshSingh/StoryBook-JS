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
  ui.addBookList(book);
});
