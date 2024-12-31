
const myLibrary = [];

const container = document.querySelector('.container');

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book('Apology of Socrates', 'Plato', 1988);

function addBookToLibrary(arr, book) {
    arr.push(book);
}

addBookToLibrary(myLibrary, book1);


function displayBooks (arr) {
    let i = 0;
    while (i < arr.length) {
        const itemListBook = document.createElement('div');
        itemListBook.classList.add('card');
        container.appendChild(itemListBook);
        const para = document.createElement('p');
        itemListBook.appendChild(para);
        para.textContent = `Title: ${arr[i].title}
        Author: ${arr[i].author}\
        \n              \
        Year: ${arr[i].year}`;  
        
        console.log(arr[i].title);
        console.log(arr[i].author);
        console.log(arr[i].year);
        i++;
    }
}

displayBooks(myLibrary);
