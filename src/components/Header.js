import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import Slide from "react-reveal/Slide";
import logo from "../images/logo/logo-dark.png";

const navLink = [
  {
    text: "About",
    slug: "about",
  },
  {
    text: "Services",
    slug: "services",
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
    text: "Training",
    slug: "training",
    isSubNav: true,
    subNav: [
      {
        text: "Frontend Engineering",
        slug: "frontend",
      },
      {
        text: "Backend Engineering",
        slug: "backend",
      },
      {
        text: "Data Structures and Algorithms",
        slug: "dsalgo",
      },
    ],
  },
  {
    text: "Resources",
    slug: "resources",
  },
];

const Logo = () => {
  return (
    <div className="d-block text-start">
      <a href="/" className="fs-3 font--weight-500 m-0">
        <img src={logo} alt="logo" height={70} />
      </a>
    </div>
  );
};

const DesktopMenu = () => {
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
    <ul className="d-flex py-3 m-0">
      {navLink.map((nav) => (
        <li key={nav.text} className="pe-5" onMouseLeave={hide}>
          <a
            href={`/${nav.slug}`}
            className="font--size-para font--weight-500 fs-6 py-1"
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
              <ul className="my-4 px-4 border border-1 rounded bg-light bg-gradient">
                {nav.subNav.map((subNav) => (
                  <li key={subNav.text} className="py-1">
                    <a
                      href={`/${subNav.slug}`}
                      className="fs-6 font--weight-500"
                    >
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
                <a
                  href={`/${nav.slug}`}
                  className="fs-5"
                >
                  {nav.text}
                </a>
                <button className="btn fw-bold">
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
              <ul className="px-4">
                {nav.subNav.map((subNav) => (
                  <li key={subNav.text} className="py-1">
                    <a href={`/${subNav.slug}`} className="fs-6">
                      {subNav.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="d-flex justify-content-between align-items-center pt-3">
              <a
                href={`/${nav.slug}`}
                className="fs-5"
              >
                {nav.text}
              </a>
            </div>
          )}
        </li>
      ))}
      <li className="py-1 pt-4">
        <div className="d-block text-start">
          <button className="btn btn-lg fw-bold text-light bg--primary my-2">
            Contact Us
          </button>
        </div>
      </li>
    </ul>
  );
};

const Contact = () => {
  return (
    <div className="d-block text-end">
      <button className="btn fw-bold text-light bg--primary py-2">
        Contact Us
      </button>
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    let p;
    setIsMenuOpen((prevState) => !prevState);
    console.log("prevState:", p, "nextState:", isMenuOpen);
  };
  return (
    <>
      <div
        className="container-fluid position-fixed nav-header shadow-sm text-dark softbg--gradient-light"
        style={{ lineHeight: "2rem", height: "75px",zIndex:"1020",top:"0px" }}
      >
        <div className="container">
          <div className="row h-100 justify-content-between">
            <div className="col align-self-center">
              <Logo />
            </div>
            <div className="col align-self-center d-none d-lg-block">
              <DesktopMenu />
            </div>
            <div className="col align-self-center d-none d-lg-block">
              <Contact />
            </div>
            <div className="col align-self-center d-block d-lg-none">
              {isMenuOpen ? (
                <button
                  className="d-flex align-items-center ms-auto btn btn-sm fw-bold text-light bg--primary font--weight-500 fs-6"
                  onClick={handleMenu}
                >
                  <i className="bi bi-x fs-3"></i>
                  <span>close</span>
                </button>
              ) : (
                <button
                  className="d-flex align-items-center ms-auto btn btn-sm text-light bg--primary font--weight-500 fs-6"
                  onClick={handleMenu}
                >
                  <i className="bi bi-list fs-3"></i>
                  <span>&nbsp;Menu</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="container-fluid nav-header top-0 pt-5 mt-3 d-block d-lg-none"
          style={{
            backgroundColor: "#00000073",
            position: "fixed",
            height: "100vh",
            overflowY: "scroll",
            zIndex: "1000",
          }}
        >
          <Slide right>
            <div className="row justify-content-end mt-2 h-100">
              <div className="col-11 col-md-10 px-0">
                <MobileMenu />
              </div>
            </div>
          </Slide>
        </div>
      )}
    </>
  );
}
