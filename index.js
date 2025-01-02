const myLibrary = [];

const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector("dialog + button");
const closeDialogBtn = document.querySelector("#close");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#book-form");
const cardBtn = document.createElement("button");

//Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Variables to manipulate the data from input
  const bookTitle = document.querySelector("#title");
  const authorBook = document.querySelector("#author");
  const pagesBook = document.querySelector("#pages");
  const checkRead = document.querySelector("#read");

  console.log(checkRead.value)

  if (checkRead.value == 'on') {
    console.log("Yes")
  }

  //If user does not put anything returns an error
  if (
    bookTitle.value === " " ||
    authorBook.value === " " ||
    pagesBook.title === " "
  ) {
    throw new Error("Please, fill in before submit");
  } else {
    console.log(bookTitle.value);
  }

  // Create an array with the values provided to turn into a object
  let arrBook = new Book(bookTitle.value, authorBook.value, pagesBook.value);
  addBookToLibrary(myLibrary, arrBook);

  dialog.close();
});

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("Apology of Socrates", "Plato", 2005);

function addBookToLibrary(books, newBook) {
  books.push(newBook);
  displayBooks(newBook);
  console.log(newBook);
}

// Loop to add the books to the Library, Don't know if is needed
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

  const removeBtn = document.createElement("button");
  itemListBook.appendChild(removeBtn);
  removeBtn.classList.add("btnCard");
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", (e) => {
    if (!confirm("Do you really want to remove?")) {
      e.preventDefault();
    } else {
      container.removeChild(itemListBook);
    }
  });

  let bookAuthor = book.author;
  let authorSplice = bookAuthor.split(" ");
  console.log(authorSplice.length)
  para1.textContent = `${book.title}`;

  if (authorSplice.length === 1) {
    para2.textContent = `${book.author}`;
    console.log("I work now")
  } else {
    authorSplice = authorSplice[1].toUpperCase() + ", " + authorSplice[0];
    para2.textContent = `${authorSplice}`;
  }
  para3.textContent = `${book.pages} pages`;
}
