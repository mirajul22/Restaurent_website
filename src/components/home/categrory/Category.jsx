import React from "react";
import cat from "./Cat.module.css";
import "./cat.css";
import { PiHamburger } from "react-icons/pi";
import { LuSandwich } from "react-icons/lu";
import { GiBread, GiNoodles } from "react-icons/gi";
import Card from "./Card";

const Category = () => {
  return (
    <>
      <section className={cat.bg}>
        <div className="max-w-[1300px] mx-auto py-20">
          <div className="flex flex-row item-center justify-between">
            <h2 className="text-5xl font-semibold">Our Categories</h2>
            <button className={cat.btn}>see more</button>
          </div>
          <div className="flex item-center justify-between py-12">
            <div>
              <button className={cat.button} id="btn2">
                <div className="flex flex-row item-center gap-2">
                  <span className={cat.span}>
                    <PiHamburger size={50} />
                  </span>
                  <div className="mt-2 flex gap-1">
                    <span className={cat.span}>Delish</span>
                    <span className={cat.span}>Burger</span>
                  </div>
                </div>
              </button>
            </div>

            <div>
              <button className={cat.button} id="btn2">
                <div className="flex flex-row item-center gap-2">
                  <span className={cat.span}>
                    <LuSandwich size={50} />
                  </span>
                  <div className="mt-2 flex gap-1">
                    <span className={cat.span}>Sand</span>
                    <span className={cat.span}>Wiches</span>
                  </div>
                </div>
              </button>
            </div>

            <div>
              <button className={cat.button}>
                <div className="flex flex-row item-center gap-2">
                  <span className={cat.span}>
                    <GiBread size={50} />
                  </span>
                  <div className="mt-2 flex gap-1">
                    <span className={cat.span}>Mexcan</span>
                    <span className={cat.span}>Cuisine</span>
                  </div>
                </div>
              </button>
            </div>

            <div>
              <button className={cat.button} id="btn2">
                <div className="flex flex-row item-center gap-2">
                  <span className={cat.span}>
                    <GiNoodles size={50} />
                  </span>
                  <div className="mt-3 flex gap-1">
                    <span className={cat.span}>Italian</span>
                    <span className={cat.span}>Cuisine</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1300px] mx-auto mt-2">
          <div className="flex flex-row gap-5 justify-center">
            <div className={cat.shine}>
              <img
                src="/images/promo/Promo-2.png"
                alt="1"
                className={cat.img}
              />
            </div>
            <div>
              <img
                src="/images/promo/Promo-1.png"
                alt="2"
                className={cat.img1}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center pt-24">
          <h2 className="text-5xl font-semibold pb-4">Some Traditional Food</h2>
          <h2 className="text-5xl font-semibold">Based on Location</h2>
        </div>
      </section>
      <Card />
    </>
  );
};

export default Category;
