import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import Slide from "react-reveal/Slide";
import phone from "../svgs/phone.svg";
import Fade from "react-reveal/Fade";

import logo from "../images/logo/logo-primary2.png";
import ContactForm from "./ContactForm";

const navLink = [
  {
    text: "About",
    slug: "about",
  },
  {
    text: "Services",
    slug: "#",
    isSubNav: true,
    subNav: [
      {
        text: "Ecommerce Development",
        slug: "ecommerce-development",
      },
      {
        text: "Headless Ecommerce Development",
        slug: "headless-ecommerce-development",
      },
      {
        text: "Frontend Development",
        slug: "frontend-development",
      },
      {
        text: "Web Application Development",
        slug: "web-application-development",
      },
      {
        text: "Progressive Web Application Development",
        slug: "pwa-development",
      },
    ],
  },
  {
    text: "Career",
    slug: "/forms.gle/mYbBzSs1fcuSCaZA9",
  },

  // {
  //   text: "Training",
  //   slug: "training",
  //   isSubNav: true,
  //   subNav: [
  //     {
  //       text: "Frontend Engineering",
  //       slug: "frontend",
  //     },
  //     {
  //       text: "Backend Engineering",
  //       slug: "backend",
  //     },
  //     {
  //       text: "Data Structures and Algorithms",
  //       slug: "dsalgo",
  //     },
  //   ],
  // },
  // {
  //   text: "Resources",
  //   slug: "resources",
  // },
];

const Logo = () => {
  return (
    <div className="d-block text-start">
      <a href="/" className="fs-3 font--weight-500 m-0">
        <img src={logo} alt="logo" height={78} />
      </a>
    </div>
  );
};

const DesktopMenu = () => {
  const [isHovered, setIsHovered] = useState("");
  const [currentNode, setCurrentNode] = useState("");

  const show = (e) => {
    if (e.target.nextSibling) {
      const id = e.target.nextSibling.id;
      setIsHovered(true);
      setCurrentNode(id);
    } else {
      return setCurrentNode("");
    }
  };
  const hide = (e) => {
    setIsHovered(false);
  };

  return (
    <ul className="d-flex align-items-center py-3 m-0 justify-content-end">
      {navLink.map((nav) => (
        <li key={nav.text} className="px-4" onMouseLeave={hide}>
          <a
            href={`/${nav.slug}`}
            className="fs-6 text-uppercase py-1 fw--700"
            onMouseEnter={show}
          >
            {nav.text}
          </a>
          {nav.isSubNav === true && (
            <div
              id={nav.slug}
              style={{
                top: "45px",
              }}
              className={
                isHovered === true && nav.slug === currentNode
                  ? "position-absolute text-dark show"
                  : "position-absolute text-dark hide"
              }
            >
              <ul className="my-4 p-4 border border-1 rounded bg-light bg-gradient">
                {nav.subNav.map((subNav) => (
                  <li key={subNav.text} className="py-2">
                    <a href={`/${subNav.slug}`} className="fs-6 fw--600">
                      {subNav.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const MobileMenu = () => {
  const [isHovered, setIsHovered] = useState(true);
  const [currentNode, setCurrentNode] = useState("");

  const show = (e) => {
    if (e.target.nextSibling) {
      const id = e.target.nextSibling.id;
      setIsHovered(true);
      setCurrentNode(id);
    } else {
      return setCurrentNode("");
    }
  };
  const hide = (e) => {
    setIsHovered(false);
  };

  return (
    <ul className="pb-4 pt-3 bg-light h-100">
      {navLink.map((nav) => (
        <li key={nav.text}>
          {nav.isSubNav ? (
            <>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <a href={`/${nav.slug}`} className="fs-6 text-uppercase fw--700">
                  {nav.text}
                </a>
                <button className="btn fw--700">
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
              <ul className="px-4">
                {nav.subNav.map((subNav) => (
                  <li key={subNav.text} className="py-2">
                    <a href={`/${subNav.slug}`} className="fs-6 fw--600">
                      {subNav.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="d-flex justify-content-between align-items-center pt-3">
              <a href={`/${nav.slug}`} className="fs-6 text-uppercase fw--700">
                {nav.text}
              </a>
            </div>
          )}
        </li>
      ))}
      <li className="py-1 pt-4">
        <div className="d-block text-start">
          <a
            href="//forms.gle/pZtE6q4QVr6XneuD6"
            className="btn btn-primary text-uppercase text-light py-2 fs-6 fw--700"
            data-bs-toogle="modal"
            data-bs-target="contact-form"
          >
            Contact Us
          </a>
        </div>
      </li>
      <div
        className="modal fade"
        id="contact-form"
        tabIndex={-1}
        aria-labelledby="contactFormModal"
        aria-hidden="true"
      >
        <ContactForm />
      </div>
    </ul>
  );
};

const Contact = () => {
  return (
    <div className="d-block text-start">
      <a href="//forms.gle/pZtE6q4QVr6XneuD6" className="btn fs-6 text-light py-2 text-uppercase fw-bold btn-primary">
        Get Free Quote
      </a>
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center position-fixed nav-header shadow-sm text-dark softbg--gradient-light"
        style={{
          // lineHeight: "2.55rem",
          // height: "75px",
          zIndex: "1020",
          top: "0px",
        }}
      >
        <div className="container">
          <div className="row h-100 justify-content-between">
            <div className="col align-self-center">
              <Logo />
            </div>
            <div className="col-md-7 align-self-center d-none d-lg-block">
              <DesktopMenu />
            </div>
            <div className="col align-self-center d-none d-lg-block">
              <Contact />
            </div>
            <div className="col align-self-center d-block d-lg-none">
              {isMenuOpen ? (
                <button
                  className="d-flex align-items-center ms-auto btn btn-sm text-uppercase text-dark fs-6"
                  onClick={handleMenu}
                >
                  <i className="bi bi-x fs-4"></i>
                  <span>&nbsp;Close</span>
                </button>
              ) : (
                <button
                  className="d-flex align-items-center ms-auto btn btn-sm text-uppercase text-dark fs-6"
                  onClick={handleMenu}
                >
                  <i className="bi bi-list fs-1"></i>
                  {/* <span>&nbsp;Menu</span> */}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <Slide right>
          <div
            className="container-fluid nav-header bg-light top-0 pt-5 mt-3 d-block d-lg-none"
            style={{
              position: "fixed",
              height: "100vh",
              overflowY: "scroll",
              zIndex: "1000",
            }}
          >
            <div className="row justify-content-end mt-2 h-100">
              <div className="col-11 col-md-10 px-0">
                <MobileMenu />
              </div>
            </div>
          </div>
        </Slide>
      )}
    </>
  );
}
