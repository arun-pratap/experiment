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
    subnavs: [
      {
        title: "our company",
        link: "about",
      },
      // {
      //   title: "how we work",
      //   link: "ecommerce-development",
      // },
      {
        title: "careers",
        link: "/forms.gle/mYbBzSs1fcuSCaZA9",
      },
    ],
  },
  {
    heading: "Services",
    subnavs: [
      {
        title: "E-commerce Development",
        link: "ecommerce-development",
      },
      {
        title: "Front-end Development",
        link: "frontend-development",
      },
      {
        title: "Web Appliaction Development",
        link: "web-application-development",
      },
      {
        title: "Progressive Web Application Development",
        link: "pwa-development",
      },
      {
        title: "Headeless E-commerce Development",
        link: "headless-ecommerce-development",
      },
    ],
  },
  {
    heading: "Training",
    subnavs: [
      {
        title: "Frontend Engineering",
        link: "/quedemy.netlify.app/full-stack-developer-program/",
      },
      {
        title: "Backend Engineering",
        link: "/quedemy.netlify.app/full-stack-developer-program/",
      },
      {
        title: "Full-Stack Engineering",
        link: "/quedemy.netlify.app/full-stack-developer-program/",
      },
    ],
  },
  // {
  //   heading: "Resources",
  //   subnavs: [
  //     {
  //       title: "Blog",
  //       link: "",
  //     },
  //     {
  //       title: "Guides",
  //       link: "",
  //     },
  //     {
  //       title: "E-books",
  //       link: "",
  //     },
  //   ],
  // },
];

export default function Footer() {
  return (
    <div
      className="container-fluid nav-header pt-5 pb-4 softbg--gradient-light"
      style={{
        borderTop: "1px solid #c8d5f3",
        background: "#ccdbff",
      }}
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
        {/* <hr /> */}
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
                  <div key={subnav?.title} className="col-12 mb-1">
                    <a
                      href={`/${subnav?.link}`}
                      className="fs-6 text-capitalize"
                    >
                      {subnav?.title}
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
            <p className="fs-6 fw-normal text-secondary">
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
