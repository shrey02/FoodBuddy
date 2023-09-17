import React from "react";
import { useState } from "react";
import navImage from "../assets/image/burger.png";
import { BsList, BsCart } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineFindInPage, MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const cartTotalItemsCount = useSelector((store) => store.cart.totalItemCount);
  //console.log(cartTotalItemsCount);

  const handleOnClick = ()=>{
    setDropdown(dropdown=>!dropdown);
  }
  return (
    <div className="sticky top-0 z-10">
      <div className="border-[0.5px] w-[100%] m-auto h-[5.2rem] py-2 bg-white shadow-[0.0px_1.0px_30.0px_0.0px_rgba(1,0,0,0.1)]">
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={navImage}
              alt="logo"
              className="w-18 h-14 my-1 mx-2 ml-3"></img>{" "}
            <div className="text-center justify-center align-text-bottom pt-4 font-BreeSerif text-3xl">
              <span className="text-red-600">Food</span>Buddy
            </div>{" "}
          </div>

          <ul className="flex justify-between py-4 text-xl max-[768px]:hidden font-medium">
            <Link to="/">
              <li className="px-3 cursor-pointer hover:text-red-500 flex mr-6 ml-12">
                <AiOutlineHome className="my-1 mr-2" />
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="px-3 cursor-pointer hover:text-red-500 flex mr-6">
                <MdOutlineFindInPage className="my-1 mr-2" />
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="px-3 cursor-pointer hover:text-red-500 flex mr-6">
                <MdOutlineContactPage className="my-1 mr-2" />
                Contact
              </li>
            </Link>
            <Link to="/cart">
              <li className="px-3 cursor-pointer hover:text-red-500 flex ">
                <BsCart className="my-1 mr-2" />
                Cart{" "}
                  {cartTotalItemsCount > 0 ? (
                    <span className="text-red-500 text-large font-bold">{`[${cartTotalItemsCount}]`}</span>
                  ) : (
                    <></>
                  )}
              </li>
            </Link>
          </ul>
          <button className=" w-[6rem] h-[3rem] rounded-md my-2 mx-2 text-center pt-[0.65%] pl-3 mr-3 hover:bg-red-400 hover:text-white text-black  font-semibold max-[767px]:hidden border-2 border-red-500 flex">
            <BiLogIn className="my-1 mx-1" /> Login
          </button>
          {dropdown ? (
            <RxCross2
              className="md:hidden w-[3rem] h-[3rem] my-2 mx-1"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            />
          ) : (
            <BsList
              className="md:hidden w-[3rem] h-[3rem] my-2 mx-1"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            />
          )}
        </div>
        {dropdown ? (
          <div className="w-[100%] m-auto bg-white shadow-lg shadow-black-200/50 min-[767px]:hidden rounded-sm">
            <ul className="py-4 text-xl text-center font-semibold divide-y divide-dashed" onClick={handleOnClick}>
              <li className="py-3 cursor-pointer hover:bg-slate-200">
                <Link to="/">Home</Link>
              </li>
              <li className="py-3 cursor-pointer hover:bg-slate-200">
                <Link to="/about">About</Link>
              </li>
              <li className="py-3 cursor-pointer hover:bg-slate-200">
                {" "}
                <Link to="/contact">Contact</Link>
              </li>
              <li className="py-3 cursor-pointer hover:bg-slate-200">
                <Link to="/cart">
                  Cart{" "}
                  {cartTotalItemsCount > 0 ? (
                    <span className="text-red-500">{`[${cartTotalItemsCount}]`}</span>
                  ) : (
                    <></>
                  )}
                </Link>
              </li>
              <li className="py-3 cursor-pointer hover:bg-slate-200">
                <button className="w-[8rem] h-[3rem] rounded-md  bg-orange-400 hover:bg-orange-600 text-white font-semibold">
                  Login
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
