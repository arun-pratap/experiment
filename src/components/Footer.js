import React from "react";
import logo from "../images/logo/logo-primary2.png";
import { Link } from "gatsby";

const Logo = () => {
  return (
    <div className="d-block text-start">
      <a href="/" className="fs-3 font--weight-500 m-0">
        <img src={logo} alt="logo" height={70} />
      </a>
    </div>
  );
};

const footerNav = [
  {
    heading: "About",
    subnavs: ["our company", "how we work", "careers"],
  },
  {
    heading: "Services",
    subnavs: [
      "E-commerce Development",
      "Front-end Development",
      "Web Appliaction Development",
      "Progressive Web Application Development",
      "Headeless E-commerce Development",
    ],
  },
  {
    heading: "Training",
    subnavs: [
      "Frontend Engineering",
      "Backend Engineering",
      "Full-Stack Engineering",
    ],
  },
  {
    heading: "Resources",
    subnavs: ["Blog", "Guides", "E-books"],
  },
];

export default function Footer() {
  return (
    <div
      className="container-fluid nav-header pt-5 pb-4 softbg--gradient-light"
      style={{ borderTop: "1px solid #c8d5f3",background:"#ccdbff" }}
    >
      <div className="container">
        {/* Logo* and address or addresses if any */}
        <div className="row g-4 pt-2">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="mb-2">
              <Logo />
            </div>
          </div>
          {/* Addresses */}
          <div className="col-12 col-md-6 col-xl-4">
            <h5 className="text--primary">Noida</h5>
            <p className="fs-6">
              A-16, 2nd Floor, Sector 9 <br />
              Noida Uttar Pradesh 201301, India
            </p>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div>
              {/* <h5>Shikohabad</h5>
              <p className="lead fs-6">
                A-16, 2nd Floor, Sector 9 <br />
                Shikohabad Uttar Pradesh 283135, India
              </p> */}
            </div>
          </div>
        </div>
        <hr />
        {/* navigation in footer */}
        <div className="row">
          {footerNav.map((nav) => (
            <div
              key={nav.heading}
              className="col-12 col-md-6 col-xl-4 py-3 pe-5"
            >
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-2 text-capitalize fs-5 font--weight-500 text--primary">
                  {nav.heading}
                </p>
                <i className="bi bi-plus-lg d-none"></i>
                <i className="bi bi-x-lg d-none"></i>
              </div>

              <div className="row">
                {nav.subnavs.map((subnav) => (
                  <div key={subnav} className="col-12 mb-1">
                    <a key={subnav} href="/" className="fs-6 text-capitalize">
                      {subnav}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className=" mb-4" />
        {/* 3 wrapped column  
        1. company type and badge if any
        2.  terms condition and privacy policy link
        3. @copyright, sitemap, Social links alone */}
        <div className="row  justify-content-between">
          <div className="col-10 col-sm-8  text-start">
            <p className="fs-6 fw-normal ">
              Best Web Design and Web Application Development Company in Noida,
              India
            </p>
          </div>

          <div className="col-12 col-sm-4 text-start text-sm-end">
            <p className="fs-6 fw-normal text-secondary">
              2021-22 &copy; AppQue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
