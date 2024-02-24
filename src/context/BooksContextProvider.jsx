import React, { useState } from "react";
import BooksContext from "./BooksContext";

const initialBooksList = [
  { name: "Harry Potter", author: "JK Crawling" },
  { name: "Ikigai", author: "Hector Garcia" },
  { name: "Atomic Habits", author: "James Clear" },
  { name: "The Alchemist", author: "Paulo Coelho" },
  { name: "The Power of Now", author: "Eckhart Tolle" },
  { name: "The Lean Startup", author: "Eric Ries" },
  { name: "The 4-Hour Workweek", author: "Timothy Ferriss" },
  { name: "The 5 AM Club", author: "Robin Sharma" },
  { name: "The Power of Habit", author: "Charles Duhigg" },
  { name: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki" },
  { name: "1984", author: "George Orwell" },
  { name: "Moby Dick", author: "Herman Melville" },
  { name: "War and Peace", author: "Leo Tolstoy" },
  { name: "Pride and Prejudice", author: "Jane Austen" },
  { name: "The Catcher in the Rye", author: "J.D. Salinger" },
  { name: "The Hobbit", author: "J.R.R. Tolkien" },
  { name: "Ulysses", author: "James Joyce" },
  { name: "The Odyssey", author: "Homer" },
];

const BooksContextProvider = ({ children }) => {
  const [booksList, setBooksList] = useState(initialBooksList);
  const updateBookShelf = (booksList) => {
    sessionStorage.setItem("booksList", JSON.stringify(booksList));
  }
  return (
    <BooksContext.Provider value={{ booksList, setBooksList, updateBookShelf }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
