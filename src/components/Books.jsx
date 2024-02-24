import React, { useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import BooksContext from "../context/BooksContext";
import { Link } from "react-router-dom";

function Books() {
  const booksTable = useRef();
  const { booksList, setBooksList,updateBookShelf } = useContext(BooksContext);

  updateBookShelf(booksList);

  const updateBookList = () => {
    setBooksList([...booksList]);
    sessionStorage.setItem("booksList", JSON.stringify(booksList));
  };

  const deleteBook = (index) => {
    if (index > 0) {
      booksList.splice(index, 1);
    } else if (index == 0) {
      booksList.shift();
    } else {
      console.log("Couldn't delete", index);
    }

    const updateBook = (index) => {};

    updateBookList();
  };
  return (
    <div className="mt-10 w-full m-auto">
      <h1 className="text-5xl font-bold tracking-wide w-[100%] text-center">
        Our Collection of Books
      </h1>
      <table
        className="border border-slate-200 rounded-md mx-auto  text-lg w-[80%] my-5"
        ref={booksTable}
      >
        <thead>
          <tr className="border border-slate-200 ">
            <th className="border border-slate-200">S.no</th>
            <th className="border border-slate-200">Book Name</th>
            <th className="border border-slate-200">Author</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book, index) => {
            return (
              <motion.tr
                dragConstraints={booksTable}
                dragElastic={0.3}
                whileDrag={{
                  scale: 1.05,
                }}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 5 }}
                drag
                className="border border-slate-200"
                key={index}
              >
                <td className="border border-slate-200 text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-200 text-center">
                  {book.name}
                </td>
                <td className="border border-slate-200 text-center">
                  {book.author}
                </td>
                <td className="border border-slate-200 text-center text-black">
                    <Link to={`/update/${index}`}>
                    <button className="m-3 py-1 px-5 rounded-lg bg-yellow-400">
                      Update
                    </button>
                  </Link>
                </td>
                <td className="border border-slate-200 text-center">
                  <button
                    className="m-3 py-1 px-5 rounded-lg bg-red-500 text-black"
                    onClick={() => deleteBook(index)}
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
