import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full flex align-middle justify-center">
      <div className="flex w-[90%] justify-between align-middle border border-slate-100 rounded-xl mt-5 p-5">
        <h1 className="text-xl font-bold">
          <Link className="" to="/">
            Library
          </Link>
        </h1>
        <Link className="" to="/create">
          <button className="flex align-middle p-1 rounded-md bg-lime-500 text-black">
            Create <IoIosAddCircle />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
