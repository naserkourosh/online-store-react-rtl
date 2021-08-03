import React from "react";
import Icon1 from "./1.png";
import Icon2 from "./2.png";
import Icon3 from "./3.png";
import Icon4 from "./4.png";
import Icon5 from "./5.png";

export default function Footer() {
  return (
      <>
      <div className="container-fluid my-5 ">
      <div className="row justify-content-center align-items-center ">
        <div className="col text-center">
          <img src={Icon1} className="image-fluid w-25" alt="" />
          <p></p>
        </div>
        <div className="col text-center">
          <img src={Icon2} className="image-fluid w-25" alt="" />
          <p></p>
        </div>
        <div className="col text-center">
          <img src={Icon3} className="image-fluid w-25" alt="" />
          <p></p>
        </div>
        <div className="col text-center">
          <img src={Icon4} className="image-fluid w-25" alt="" />
          <p></p>
        </div>
        <div className="col text-center">
          <img src={Icon5} className="image-fluid w-25" alt="" />
          <p></p>
        </div>
      </div>

      </div>


    <footer classNameName="container-fluid ">
      <div className="container text-white py-5 ">
        <div className="row ">
          <div className="col">
            <h4 className="mb-4">خرید</h4>
            <p>زنانه</p>
            <p>مردانه</p>
            <p>بچه گانه</p>
            <p>اکسسوری</p>
          </div>
          <div className="col">
            <h4 className="mb-4">خدمات مشتریان</h4>
            <p>پاسخ به پرسش‌های متداول </p>
            <p>رویه‌های بازگرداندن کالا</p>
            <p>شرایط استفاده</p>
            <p>حریم خصوصی</p>
          </div>
          <div className="col">
            <h4 className="mb-4">اطلاعات مفید</h4>
            <p>درباره ما</p>
            <p>تماس با ما</p>
            <p>همکاری با ما</p>
            <p></p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
    </>
  );
}
