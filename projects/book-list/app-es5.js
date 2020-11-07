/* OOPs with ES5 syntax */

/* Book constructor */
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

/* UI constructor */
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");

  // create tr element
  const row = document.createElement("tr");
  row.innerHTML = `
                    <td> ${book.title}</td>
                    <td> ${book.author}</td>
                    <td> ${book.isbn}</td>
                    <td> <a href="#" class="delete">x</a></td>
                  `;
  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = function (msg, className) {
  // create a div
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));

  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);

  // hide after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  target.parentElement.parentElement.remove();
};

/* Event listeners */

// Event listener for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate inputs
  if (title === "" || author === "" || isbn === "") {
    // show error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();

    // show book added alert
    ui.showAlert("Book added", "success");
  }

  e.preventDefault();
});

// Evenet listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  if (e.target.className === "delete") {
    ui.deleteBook(e.target);
    ui.showAlert("Book removed", "success");
  }

  e.preventDefault();
});
