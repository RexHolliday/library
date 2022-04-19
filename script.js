// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

//Get books grid
const booksGrid = document.getElementById('booksGrid')

//Get button that adds book to books grid
const addBtn = document.getElementById("addBtn")

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const resetInputTitle = document.getElementById('title');
const resetInputAuthor = document.getElementById('author');
const resetInputPages = document.getElementById('pages');

//When the user clicks on the submit button, add book to books grid
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;
    addBook(title, author, pages, isRead)
    modal.style.display = "none";
    resetInputTitle.value='';
    resetInputAuthor.value='';
    resetInputPages.value='';
})

let myLibrary = [];

//Constructor
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title.value;
        this.author = author.value;
        this.pages = pages.value;
        this.isRead = isRead.checked;
    }
}


const addBook = (title, author, pages, isRead) => {
    const bookObject = {title: title, author: author, pages: pages, isRead: isRead}
    myLibrary.push(bookObject); 
    addBookDom(bookObject);
}

const addBookDom = (book)=>{
    // <div> to group the books
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    
    //<h2> book title
    const h2bookname = document.createElement('h2');
    h2bookname.textContent = book.title;
    bookCard.appendChild(h2bookname);
    
    //<p> author 
    const pauthor = document.createElement('p');
    pauthor.textContent = book.author;
    bookCard.appendChild(pauthor);

    // <p> number of pages
    const ppages = document.createElement('p');
    ppages.textContent = book.pages + " pages";
    bookCard.appendChild(ppages);

    // <button> read status
    const readButton = document.createElement('button');
    if (book.isRead) {
        readButton.textContent = 'Read'
      } else {
        readButton.textContent = 'Not read'
      }
    readButton.classList.add('btn');
    bookCard.appendChild(readButton);
    
    // update read status
    readButton.addEventListener('click',(e)=>{
        if (e.target.textContent == 'Read'){
            e.target.textContent = 'Not read'
        }
        else {
            e.target.textContent = 'Read'
        }
    })

     // <button> to remove
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'remove';
     deleteButton.classList.add('btn');
     deleteButton.classList.add('btn-delete');
     bookCard.appendChild(deleteButton);
 
     //Remove book from booksGrid div
     deleteButton.addEventListener('click',(e)=>{
         booksGrid.removeChild(bookCard);
     })
 
     //add the book to the booksGrid 
     booksGrid.appendChild(bookCard);
 }