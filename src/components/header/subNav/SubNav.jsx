import React from "react";
import Header from "../Header";
import "./subNav.scss";

const SubNav = () => {
  return (
    <div className="subNav">
      <Header />
      <p>راه حل های دیجیتال با</p>
      <p className="title">KASUKA</p>
      <span>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</span>
      <div className="backdrop"></div>
    </div>
  );
};

export default SubNav;
