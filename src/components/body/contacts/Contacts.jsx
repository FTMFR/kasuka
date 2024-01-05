import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import "./contacts.scss";

const Contacts = () => {
  return (
    <div className="container2">
      <div className="header">
        <div className="head">
          <p>تماس با ما</p>
          <div className="divition"></div>
        </div>
        <h1>با ما تماس بگیرید</h1>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          frameborder="0"
          allowfullscreen
          title="map"
        ></iframe>
      </div>
      <div className="footerSec">
        <div className="leftPart2">
          <div className="secOne">
            <input type="text" placeholder="نام" />
            <input type="email" placeholder="ایمیل" />
          </div>
          <div className="secTwo">
            <input type="text" placeholder="عنوان" />
            <textarea type="text" placeholder="پیام" />
          <button>ارسال پیام</button>
          </div>
        </div>
        <div className="rightPart2">
          <div className="sec">
            <BsGeoAlt className="bgc" />
            <div className="sec2">
              <h1>مکان:</h1>
              <p>تهران خیابان آزادی</p>
            </div>
          </div>
          <div className="sec">
            <BsEnvelope className="bgc" />
            <div className="sec2">
              <h1>ایمیل:</h1>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="sec">
            <BiPhone className="bgc" />
            <div className="sec2">
              <h1>شماره تماس:</h1>
              <p>0123467889</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
