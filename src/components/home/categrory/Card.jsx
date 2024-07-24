import React, { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = () => {
  const [toggle, setToggle] = useState(1);
  const Change = (index) => {
    setToggle(index);
  };
  return (
    <>
      <section className="pt-14">
        <ul className="flex flex-row item-center gap-8 justify-center border-[1px] border-pink-200 max-w-2xl mx-auto py-4 rounded-box">
          <li onClick={() => Change(1)}>
            <Link className={toggle === 1 ? "active" : ""}>All Category</Link>
          </li>
          <li onClick={() => Change(2)}>
            <Link className={toggle === 2 ? "active" : ""}>Thai Cuisine</Link>
          </li>
          <li onClick={() => Change(3)}>
            <Link className={toggle === 3 ? "active" : ""}>Mexican</Link>
          </li>
          <li onClick={() => Change(4)}>
            <Link className={toggle === 4 ? "active" : ""}>Italian</Link>
          </li>
          <li onClick={() => Change(5)}>
            <Link className={toggle === 5 ? "active" : ""}>Vegetarian</Link>
          </li>
          <li onClick={() => Change(6)}>
            <Link className={toggle === 6 ? "active" : ""}>Junk Food</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Card;
