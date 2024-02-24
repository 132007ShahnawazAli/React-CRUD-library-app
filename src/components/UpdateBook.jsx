import React, { useContext, useEffect} from "react";
import {useNavigate, useParams } from "react-router-dom";
import BooksContext from "../context/BooksContext";

const UpdateBook = () => {
  let { bookId } = useParams();
  const navigate = useNavigate();
  const { booksList, setBooksList, updateBookShelf } = useContext(BooksContext);

  updateBookShelf(booksList);

  return (
    <div className="w-full flex justify-center items-center h-full flex-col">
      <h1 className="text-5xl font-bold tracking-wide">Update The Book!</h1>
      <form className=" flex flex-col border-2 border-neutral-300 m-10 p-10 rounded-lg" onSubmit={
        (e) => {
          e.preventDefault();
          navigate("/");
        }
      }>
        <label htmlFor="fname" className="text-3xl my-2 font-medium">
          Book Name
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          defaultValue={booksList[bookId].name}
          onChange={(e) => {
            booksList[bookId].name = e.target.value;
            setBooksList([...booksList]);
            sessionStorage.setItem("booksList", JSON.stringify(booksList));
          }}
          className="mb-5 border-b-4 border-cyan-500 bg-cyan-100 p-2 rounded-md rounded-b-none  text-black text-xl outline-none"
        />
        <label htmlFor="lname" className="text-3xl my-2 font-medium">
          Author name
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={(e) => {
            booksList[bookId].author = e.target.value;
            setBooksList([...booksList]);
            sessionStorage.setItem("booksList", JSON.stringify(booksList));
            console.log(booksList);
          }}
          defaultValue={booksList[bookId].author}
          className="mb-5 border-b-4 border-cyan-500 bg-cyan-100 p-2 rounded-md rounded-b-none  text-black text-xl outline-none"
        />
        <button
          type="submit"
          className="hover:bg-yellow-400 w-fit p-2 text-md rounded-md m-auto bg-yellow-500 text-black"
        >
          Do it!
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
