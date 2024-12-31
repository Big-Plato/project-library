const myLibrary = [];

const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector("dialog + button");
const closeDialogBtn = document.querySelector("#close");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector('#book-form');
const card = document.querySelector('.card');

formData = new FormData(form);

console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let bookTitle = document.querySelector("#title");
  let authorBook = document.querySelector("#author");
  let yearBook = document.querySelector("#year");

  let arrBook = [bookTitle.value, authorBook.value, yearBook.value];
  console.log(arrBook)
  console.log(formData.getAll(bookTitle))
  addBookToLibrary(myLibrary, arrBook);

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

function addBookToLibrary(arr) {
  for (let i = card.length; i > 0; i--) {
    let add = Object.create(Book);
    console.log
  }
}

addBookToLibrary(myLibrary, book1);
addBookToLibrary(myLibrary, book2);

function displayBooks(arr) {
  let i = 0;
  while (i < arr.length) {
    const itemListBook = document.createElement("div");
    itemListBook.classList.add("card");
    container.appendChild(itemListBook);
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    itemListBook.appendChild(para1);
    itemListBook.appendChild(para2);
    itemListBook.appendChild(para3);

    para1.textContent = `${arr[i].title}`;
    para2.textContent = `${arr[i].author}`;
    para3.textContent = `${arr[i].year}`;

    console.log(arr[i].title);
    console.log(arr[i].author);
    console.log(arr[i].year);
    i++;
  }
}

displayBooks(myLibrary);
