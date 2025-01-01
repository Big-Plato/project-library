const myLibrary = [];

const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector("dialog + button");
const closeDialogBtn = document.querySelector("#close");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector('#book-form');
const cardBtn = document.createElement('button');
cardBtn.textContent = "Remove";


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let bookTitle = document.querySelector("#title");
  let authorBook = document.querySelector("#author");
  let yearBook = document.querySelector("#year");

  let arrBook = new Book(bookTitle.value, authorBook.value, yearBook.value)
  console.dir(arrBook);
  addBookToLibrary(myLibrary, arrBook);
  console.log(myLibrary);   

  // if (bookTitle.value == "" || authorBook.value == "" || yearBook.title == "") {
  //     throw new Error("Please, fill in before submit")
  // } else {
  //     console.log(bookTitle.value);
  // }
});

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  console.log("Hi");
});

// submitBtn.addEventListener('submit', (e) => {
//     console.log(e)
//     e.preventDefault();
// })

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

}

const book1 = new Book("Apology of Socrates", "Plato", 1988);
const book2 = new Book("O Idiota", "Dostoiévski", 1888);
const book3 = new Book("O grande Conflito", "Waite", 2006);


function addBookToLibrary(books, newBook) {
  books.push(newBook); 
  displayBooks(newBook);
  console.log(newBook)
  return books;
}

addBookToLibrary(myLibrary, book1);
addBookToLibrary(myLibrary, book2);
addBookToLibrary(myLibrary, book3);

// displayBooks(myLibrary);

for (let i = 0; i < myLibrary.length; i++) {
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
    para3.textContent = `${book.year}`;

    console.log(book.title);
    console.log(book.author);
    console.log(book.year);
}



