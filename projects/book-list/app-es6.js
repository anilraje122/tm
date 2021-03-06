/* OOPs with ES6 syntax */

/* Book class */
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

/* UI class */
class UI {
  addBookToList(book) {
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
  }

  showAlert(msg, className) {
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
  }

  deleteBook(target) {
    target.parentElement.parentElement.remove();
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

/* Local storage class */
class Store {
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    if (books.length > 0) {
      books.forEach(function (book) {
        const ui = new UI();
        ui.addBookToList(book);
      });
    }
  }

  static removeBook(isbn) {
    let books = Store.getBooks();
    books.forEach(function (book, index) {
      if (Number(book.isbn) == isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

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

    // Add to local storage
    Store.addBook(book);

    // Clear fields
    ui.clearFields();

    // show book added alert
    ui.showAlert("Book added", "success");
  }

  e.preventDefault();
});

// DOM load event listner
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Evenet listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  if (e.target.className === "delete") {
    ui.deleteBook(e.target);
    ui.showAlert("Book removed", "success");

    // Remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  }

  e.preventDefault();
});
