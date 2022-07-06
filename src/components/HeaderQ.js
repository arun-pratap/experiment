import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import Slide from "react-reveal/Slide";
import phone from "../svgs/phone.svg";
import Fade from "react-reveal/Fade";

import logo from "../images/logo/logo-dark.png";

const Logo = () => {
  return (
    <div className="d-block text-start">
      <a href="/" className="fs-3 font--weight-500 m-0">
        <img src={logo} alt="logo" height={70} />
      </a>
    </div>
  );
};

export default function Header() {
  return (
    <>
      {/* <div
        className="container-fluid position-fixed px-0 py-1"
        style={{ backgroundColor: "#000 !important" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">hello</div>
            <div className="col">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundImage:
                    "linear-gradient(100deg, hsl(263deg 78% 80%), hsl(263deg 78% 43%))",
                }}
                className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center bg--gradient-blue"
              >
                <img
                  src={phone}
                  alt="phone"
                  width="50px"
                  className="img-fluid"
                />
              </div>
              <p>24/7 WhatsApp Support</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
