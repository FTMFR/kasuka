import React from "react";
import Logo from "../logo/Logo";
import "./header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="contain">
        <div className="startBtn">شروع</div>
        <div className="titles">
          <ul>
            <li>خانه</li>
            <li>درباره ما</li>
            <li>خدمات</li>
            <li>نمونه کار</li>
            <li>تیم</li>
            <li>لیست کشویی</li>
            <li>تماس با ما</li>
          </ul>
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default Header;
