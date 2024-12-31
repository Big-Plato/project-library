
const myLibrary = [];

const container = document.querySelector('.container');
const dialog = document.querySelector('dialog');
const showDialogBtn = document.querySelector('dialog + button');
const closeDialogBtn = document.querySelector('#close');
const submitBtn = document.querySelector('#submit');
const form = document.querySelector('#book-form');

console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let bookTitle = document.querySelector('#title');
    let authorBook = document.querySelector('#author');
    let yearBook = document.querySelector('#year')

    let arrBook = [bookTitle.value, authorBook.value, yearBook.value];
    console.log(arrBook)
    addBookToLibrary(myLibrary, arrBook);

    // if (bookTitle.value == "" || authorBook.value == "" || yearBook.title == "") {
    //     throw new Error("Please, fill in before submit") 
    // } else {
    //     console.log(bookTitle.value);
    // }

    console.log(e);
})


showDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeDialogBtn.addEventListener('click', () => {
    dialog.close();
    console.log("Hi");
});


// submitBtn.addEventListener('submit', (e) => {
//     console.log(e)
//     e.preventDefault();
// })

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

const book1 = new Book('Apology of Socrates', 'Plato', 1988, true);
const book2 = new Book('O Idiota', 'Dostoiévski', 1888, false);

function addBookToLibrary(arr, Book) {
    arr.push(Book);
}

addBookToLibrary(myLibrary, book1);
addBookToLibrary(myLibrary, book2)


function displayBooks (arr) {
    let i = 0;
    while (i < arr.length) {
        const itemListBook = document.createElement('div');
        itemListBook.classList.add('card');
        container.appendChild(itemListBook);
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');
        const para3 = document.createElement('p');
        const para4 = document.createElement('p');
        itemListBook.appendChild(para1);
        itemListBook.appendChild(para2);
        itemListBook.appendChild(para3);
        itemListBook.appendChild(para4);


        para1.textContent = `Title: 
        ${arr[i].title}`;
        para2.textContent = `Author:
        ${arr[i].author}`;
        para3.textContent = `Year:
        ${arr[i].year}`;  
        
        if (read === true) {
            para4.textContent = "Read"
        } else if (read === false) {
            para4.textContent = "Not read"
        }

        console.log(arr[i].title);
        console.log(arr[i].author);
        console.log(arr[i].year);
        i++;
    }
}

displayBooks(myLibrary);
