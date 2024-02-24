import React from "react";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import BooksContextProvider from "./context/BooksContextProvider.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BooksContextProvider>
      <div className="font-monty text-white h-full ">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/create" element={<AddBook />} />
            <Route path="/update/:bookId" element={<UpdateBook />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BooksContextProvider>
  );
}

export default App;
