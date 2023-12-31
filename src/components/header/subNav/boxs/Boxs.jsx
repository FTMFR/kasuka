import React from "react";
import { GoDatabase } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoBarChartOutline } from "react-icons/io5";
import { RiStore2Line } from "react-icons/ri";
import { PiPaintBrushBroad } from "react-icons/pi";
import "./boxs.scss";

const apiLike = [
  { id: 1, title: "اطلاعات ذخیره شده", image: [<GoDatabase />] },
  { id: 2, title: "عملکرد های پایانی", image: [<PiPaintBrushBroad />] },
  { id: 3, title: "نمونه کارها", image: [<SlCalender />] },
  { id: 4, title: "نمودار کیفی", image: [<IoBarChartOutline />] },
  { id: 5, title: "متن نمایشی", image: [<RiStore2Line />] },
];

const Boxs = () => {
  return (
    <div className="box">
      {apiLike.map((item, index) => (
        <div className="content">
          <div className="image">{item.image}</div>

          <div className="titles" key={item.id}>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Boxs;
