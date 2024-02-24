import React, { useContext, useEffect } from "react";
import BooksContext from "../context/BooksContext";
import { useNavigate } from "react-router-dom";

const newBook = {};
function AddBook() {
  const navigate = useNavigate();
  const { booksList, setBooksList,updateBookShelf } = useContext(BooksContext);
  updateBookShelf(booksList);
  const handleSubmit = (e) => {
    e.preventDefault();
    setBooksList([...booksList, newBook]);
    navigate("/");
  };
  return (
    <div className="w-full flex justify-center items-center h-full flex-col">
      <h1 className="text-5xl font-bold tracking-wide">
        Add a Book In Library!
      </h1>
      <form
        className=" flex flex-col border-2 border-neutral-300 m-10 p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <label htmlFor="bname" className="text-3xl my-2 font-medium">
          Book Name
        </label>
        <input
          type="text"
          id="bname"
          name="bname"
          onChange={(e) => {
            newBook.name = e.target.value;
          }}
          className="mb-5 border-b-4 border-cyan-500 bg-cyan-100 p-2 rounded-md rounded-b-none  text-black text-xl outline-none"
        />
        <label htmlFor="aname" className="text-3xl my-2 font-medium">
          Author name
        </label>
        <input
          type="text"
          id="aname"
          name="aname"
          onChange={(e) => {
            newBook.author = e.target.value;
          }}
          className="mb-5 border-b-4 border-cyan-500 bg-cyan-100 p-2 rounded-md rounded-b-none  text-black text-xl outline-none"
        />
        <button
          type="submit"
          className="hover:bg-sky-400 w-fit p-2 text-md rounded-md m-auto bg-sky-500 text-black"
        >
          Be Happy
        </button>
      </form>
    </div>
  );
}

export default AddBook;
