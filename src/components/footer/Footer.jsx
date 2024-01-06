import React from "react";
import Logo from "../logo/Logo";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialSkype } from "react-icons/sl";
import { IoChevronBack } from "react-icons/io5";
import CopyRight from "./copyRight/CopyRight";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="allOfIt">
        <div className="count">
          <div className="oneRow">
            <Logo color="white" />
            <p>تهران خیابان آزادی</p>
            <p>تلفن: 01234567895</p>
            ایمیل: info@example.com
            <div className="socialIcon">
              <i>
                <FaFacebookF />
              </i>
              <i>
                <FaLinkedinIn />
              </i>
              <i>
                <FaInstagram />
              </i>
              <i>
                <SlSocialSkype />
              </i>
              <i>
                <FiTwitter />
              </i>
            </div>
          </div>
          <div className="twoRow">
            <h1>لینک های مفید</h1>
            <ul>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>خانه</p>
              </li>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>درباره ما</p>
              </li>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>خدمات</p>
              </li>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>شرایط استفاده از خدمات</p>
              </li>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>سیاست حفظ حریم خصوصی</p>
              </li>
            </ul>
          </div>
          <div className="twoRow">
            <h1>خدمات</h1>
            <ul>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>خدمات طراحی وب سایت</p>
              </li>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>توسعه وب</p>
              </li>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>مدیریت تولید</p>
              </li>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>بازاریابی</p>
              </li>
              <li>
                <i>
                  <IoChevronBack />
                </i>
                <p>طراحی گرافیک</p>
              </li>
            </ul>
          </div>
          <div className="fourRow">
            <h1>خبرنامه</h1>
            <p>
              با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
              بود
            </p>
            <div className="inputBtn">
              <input type="text" />
              <button>دنبال کردن</button>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
};

export default Footer;
