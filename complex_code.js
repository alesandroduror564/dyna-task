/* complex_code.js */

// This code is a simulation of a library management system.
// It manages various operations such as adding, removing, and searching books.
// It also keeps track of the borrowing status of each book and provides functionality
// to check out and return books.

class Library {
  constructor() {
    this.books = [];
    this.borrowedBooks = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const bookIndex = this.books.findIndex((b) => b.id === book.id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      if (book.borrowed) {
        this.returnBook(book);
      }
    }
  }

  searchBook(title) {
    return this.books.find((book) => book.title === title);
  }

  borrowBook(book) {
    if (!book.borrowed) {
      book.borrowed = true;
      this.borrowedBooks.push(book);
    }
  }

  returnBook(book) {
    const borrowedBookIndex = this.borrowedBooks.findIndex((b) => b.id === book.id);
    if (borrowedBookIndex !== -1) {
      book.borrowed = false;
      this.borrowedBooks.splice(borrowedBookIndex, 1);
    }
  }
}

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.borrowed = false;
  }
}

// Usage example:

// Create a library
const library = new Library();

// Add some books
const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
library.addBook(book1);

const book2 = new Book(2, "Clean Code", "Robert C. Martin");
library.addBook(book2);

const book3 = new Book(3, "Design Patterns", "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides");
library.addBook(book3);

// Search for a book
const foundBook = library.searchBook("JavaScript: The Good Parts");
if (foundBook) {
  console.log("Found book:", foundBook.title, "by", foundBook.author);
} else {
  console.log("Book not found.");
}

// Borrow a book
library.borrowBook(book1);
console.log(book1.title, "borrowed:", book1.borrowed);

// Return a book
library.returnBook(book1);
console.log(book1.title, "borrowed:", book1.borrowed);

// Remove a book
library.removeBook(book3);

// Display remaining books
console.log("Books in the library:");
library.books.forEach((book) => {
  console.log(book.title, "by", book.author);
});