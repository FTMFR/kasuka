import React from "react";
import { BiTachometer } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import Samples from "../samples/Samples";
import "./product.scss";

const apiLink = [
  {
    id: 1,
    icon: [<BiTachometer />],
    text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",
    title: "دردهای بزرگ",
  },
  {
    id: 2,
    icon: [<FaRegFileAlt />],
    text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",
    title: "اما همانطور که مشاهده می کنید",
  },
  {
    id: 3,
    icon: [<FaDribbble />],
    text: "برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد",
    title: "لورم اپیسوم",
  },
];

const Products = () => {
  return (
    <>
      <div className="container2">
        <div className="header1">
          <div className="part1">
            <p>خدمات</p>
            <div className="divition"></div>
          </div>
          <div className="part2">خدمات ما را بررسی کنید.</div>
        </div>
        <div className="wholeBox">
          {apiLink.map((item) => (
            <div className="boxes1" key={item.id}>
              <div className="icon">{item.icon}</div>
              <div className="text3">
                <p>{item.title}</p>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="wholeBox">
          {apiLink.map((item) => (
            <div className="boxes1" key={item.id}>
              <div className="icon">{item.icon}</div>
              <div className="text3">
                <p>{item.title}</p>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="apply">
        <div className="main">
          <p>فراخوانی برای اقدام</p>
          <span>
            اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد
            سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به
            دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های
            خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
          </span>
          <button>فراخوانی برای اقدام</button>
        </div>
      </div>
      <Samples />
    </>
  );
};

export default Products;
