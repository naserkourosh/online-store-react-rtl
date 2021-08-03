import React from "react";
import "./styleHeader.css";
import { FaPhone } from "react-icons/fa";

export default function HeaderTop() {
  return (
    <>
      <div className="container-fluid top-header no-gutters">
        <div className="container">
          <div className="d-flex justify-content-around align-items-center">
            <div className="col-4 d-flex align-items-center mr-auto">
              <div className="icon-top">
                <FaPhone />
              </div>
              <div className="phone-header">
                {" "}
                <a href="tel:+989196212564">09196212564</a>{" "}
              </div>
            </div>

            <div className="col-2 pt-1">
              <div className="input-group">
                <input
                  className="form-control-sm border rounded-pill"
                  type="search"
                  id="example-search-input"
                  placeholder="جستجوی کالای مورد نظر ..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
