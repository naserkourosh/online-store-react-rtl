import React from "react";
import Carousel from "react-bootstrap/Carousel";
import I6 from "./i6.jpg";
import I7 from "./i7.jpg";
// import I10 from "./10.jpg";
import I24 from "./24.png";
import I18 from "./30.jpg";
import V12 from "./v12.mp4";

export default function TopSection() {
  return (
    <div className="container">
      <div className="row  banner-top ">
        <div className="col-7">
          <Carousel variant="dark pl-0">
            <Carousel.Item>
              <img className="img-fluid w-100 h-auto rounded " src={I6} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="img-fluid w-100 h-auto rounded " src={I7} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-5">
          <video
            src={V12}
            autoPlay={true}
            loop={true}
            controls={false}
            playsInline
            muted
            width="97%" className="img-fluid w-100 h-auto rounded " ></video>
        </div>
      </div>
      <div className="row">
        {/* <div class="col-4">
          <img src={I10} alt=""  className="d-block w-100 h-100"/>
        </div> */}
        <div className="col-8 px-1">
          <img src={I24} alt="" className="img-fluid w-100 h-auto rounded "/>
        </div>
        <div className="col-4">
          <img src={I18} alt="" className="img-fluid w-100 h-auto rounded " />
        </div>
      </div>
    </div>
  );
}
