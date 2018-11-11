class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookList(book) {
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
  }

  showAlert(message, className) {
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
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

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

document.getElementById("book-list").addEventListener("click", function(e) {
  e.preventDefault();
  // Instantiate UI constructor
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book deleted", "success");
});
