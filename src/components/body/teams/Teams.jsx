import React from "react";
import "./teams.scss";

const Teams = () => {
  return (
    <div className="container2">
      <div className="header">
        <div className="head">
          <p>تیم</p>
          <div className="divition"></div>
        </div>
        <h1>تیم ما را بررسی کنید</h1>
      </div>
      <div className="body">
        <div className="content2">
          <img src="./assets/team-1.jpg" alt="team-1" />
          <p className="name">والتر وایت</p>
          <span className="pose">حسابدار</span>
        </div>
        <div className="content2">
          <img src="./assets/team-2.jpg" alt="team-2" />
          <p className="name">سارا جونسون</p>
          <span className="pose">CTO</span>
        </div>
        <div className="content2">
          <img src="./assets/team-3.jpg" alt="team-3" />
          <p className="name">ویلیام اندرسون</p>
          <span className="pose">مدیر تولید</span>
        </div>
        <div className="content2">
          <img src="./assets/team-4.jpg" alt="team-4" />
          <p className="name">آماندا جپسون</p>
          <span className="pose">مدیر ارشد اجرایی</span>
        </div>
      </div>
    </div>
  );
};

export default Teams;
