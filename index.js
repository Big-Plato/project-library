const myLibrary = [];

const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector("dialog + button");
const closeDialogBtn = document.querySelector("#close");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#book-form");
const cardBtn = document.createElement("button");
const checkRead = document.querySelector("#read");

//Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Variables to manipulate the data from input
  let bookTitle = document.querySelector("#title");
  let authorBook = document.querySelector("#author");
  let pagesBook = document.querySelector("#pages");

  //If user does not put anything returns an error
  if (bookTitle.value === " " || authorBook.value === " " || pagesBook.title === " ") {
    throw new Error("Please, fill in before submit");
  } else {
    console.log(bookTitle.value);
  }

  // Create an array with the values provided to turn into a object
  let arrBook = new Book(bookTitle.value, authorBook.value, pagesBook.value);
  console.dir(arrBook);
  addBookToLibrary(myLibrary, arrBook);
  console.log(myLibrary);
});

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  console.log("Hi");
});

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const book1 = new Book("Apology of Socrates", "Plato", 475);
const book2 = new Book("O Idiota", "Dostoiévski", 558);
const book3 = new Book("O grande Conflito", "Waite", 267);
const book4 = new Book("Íliada", "Homero", 967);

function addBookToLibrary(books, newBook) {
  books.push(newBook);
  displayBooks(newBook);
  console.log(newBook);
}

// addBookToLibrary(myLibrary, book1);
// addBookToLibrary(myLibrary, book2);
// addBookToLibrary(myLibrary, book3);
// addBookToLibrary(myLibrary, book4)

// displayBooks(myLibrary);

for (let i = 1; i <= myLibrary.length; i++) {
  displayBooks();
}

function displayBooks(book) {
  const itemListBook = document.createElement("div");
  itemListBook.classList.add("card");
  container.appendChild(itemListBook);
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const para3 = document.createElement("p");
  itemListBook.appendChild(para1);
  itemListBook.appendChild(para2);
  itemListBook.appendChild(para3);

  para1.textContent = `${book.title}`;
  para2.textContent = `${book.author}`;
  para3.textContent = `${book.pages}`;

  console.log(book.title);
  console.log(book.author);
  console.log(book.pages);
}
