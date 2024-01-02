import React from "react";
import "./sample.scss";

const Samples = () => {
  return (
    <>
      <div className="header1">
        <div className="part1">
          <p>نمونه کارها</p>
          <div className="divition"></div>
        </div>
        <div className="part2">نمونه کارهای ما را بررسی کنید.</div>
      </div>
      <div className="section">
        <div className="content1">
          <p className="active">همه</p>
          <p>برنامه</p>
          <p>محصول</p>
          <p>اینترنت</p>
        </div>
        <div className="content2">
          <img src="./assets/portfolio-1.jpg" alt="portfolio-1" />
          <img src="./assets/portfolio-2.jpg" alt="portfolio-2" />
          <img src="./assets/portfolio-3.jpg" alt="portfolio-3" />
          <img src="./assets/portfolio-4.jpg" alt="portfolio-4" />
          <img src="./assets/portfolio-5.jpg" alt="portfolio-5" />
          <img src="./assets/portfolio-6.jpg" alt="portfolio-6" />
          <img src="./assets/portfolio-8.jpg" alt="portfolio-8" />
        </div>
      </div>
    </>
  );
};

export default Samples;
