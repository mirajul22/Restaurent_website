import { useState } from "react";
import Image from "/images/logo/footer-logo.svg";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SlHeart } from "react-icons/sl";
import { BsCartPlus } from "react-icons/bs";
import "./NavStyle.css";

const Nav = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <nav className="max-w-[1300px] flex justify-between mx-auto py-5">
          <div>
            <Link to={"/"}>
              <img src={Image} alt="logo" className="cursor-pointer	" />
            </Link>
          </div>
          <div className="flex gap-5 py-4">
            <Link className="line">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="" className="flex">
                  Home <MdOutlineKeyboardArrowDown className="mt-1" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-[#394150] text-white menu rounded-lg  z-[1] w-52 p-2">
                  <li>
                    <Link to="/" className="line">
                      Home-01
                    </Link>
                  </li>
                  <li>
                    <Link className="line">Home-02</Link>
                  </li>
                </ul>
              </div>
            </Link>
            <Link className="line">Menu</Link>
            <Link className="line">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="" className="flex">
                  Page <MdOutlineKeyboardArrowDown className="mt-1" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-[#394150] text-white menu rounded-lg  z-[1] w-52 p-2">
                  <li>
                    <Link className="line">About Us</Link>
                  </li>
                  <li>
                    <Link className="line">Contact Us</Link>
                  </li>
                  <li>
                    <Link className="line">Blog</Link>
                  </li>
                  <li>
                    <Link className="line">Blog Details</Link>
                  </li>
                  <li>
                    <Link className="line">Food Details</Link>
                  </li>
                  <li>
                    <Link className="line">Shopping Cart</Link>
                  </li>
                  <li>
                    <Link className="line">Shopping Cart Two</Link>
                  </li>
                  <li>
                    <Link className="line">Cart Address</Link>
                  </li>
                  <li>
                    <Link className="line">Privacy & Policy</Link>
                  </li>
                  <li>
                    <Link className="line">Terms And Services</Link>
                  </li>
                  <li>
                    <Link className="line">Trust And Safety</Link>
                  </li>
                </ul>
              </div>
            </Link>
            <Link className="line">UserDashboard</Link>
          </div>
          <div className="flex  min-w-28  py-3 bg-[#394150] rounded-lg border-[1px] border-[#6c727f]">
            <input
              type="text"
              placeholder="Search food"
              className=" outline-none bg-[#394150] px-2 caret-white text-white"
            />
            <CiSearch
              size={30}
              color={"#6c727f"}
              className="mr-4 cursor-pointer"
            />
          </div>
          <div className="flex gap-5">
            <div className="edit1 border-[1px] bg-[#394150] p-4 border-[#6c727f] rounded-full hover:bg-[#f01543] duration-300 cursor-pointer">
              <span
                className="absolute bg-[#f01543] text-white rounded-full px-[6px] py-[0.5px] text-[12px] font-bold translate-x-6 translate-y-[-15px]"
                id="one">
                8
              </span>
              <SlHeart size={25} color={"#fff"} className="cursor-pointer" />
            </div>
            <div className="edit2 border-[1px] p-4 bg-[#394150] border-[#6c727f] rounded-full hover:bg-[#f01543] duration-300 cursor-pointer">
              <span
                className="absolute bg-[#f01543] text-white rounded-full px-[6px] py-[0.5px] text-[12px] font-bold translate-x-6 translate-y-[-15px]"
                id="two">
                3
              </span>
              <BsCartPlus size={25} color={"#fff"} className="cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-5">
            <button className="btn  btn-error bg-[#f01543] px-6 text-white">
              Log In
            </button>
            <button className="btn bg-white px-6 text-white" id="btn">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
