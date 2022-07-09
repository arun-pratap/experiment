import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "./../components/Layout";
import Seo from "../components/Seo";
import CallToActionQ from "../components/CallToActionQ";
import logoPrimary from "../images/logo/logo-primary.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import digitalNomad from "../svgs/undraw_digital_nomad_re_w8uy (2).svg";
import results from "../svgs/undraw-results.svg";
import unsplashTech from "../images/unsplash-techp.jpg";
import pexelsWomen from "../images/pexelsWomen.jpg";

import arun from "../images/profile/arun.png";
import rahul from "../images/profile/rahul.png";

import CardQ from "../components/CardQ";
import Card from "../components/Card";

import fasterLoad from "../svgs/faster-load.svg";
import seoEnabled from "../svgs/seo-enabled.svg";
import responsiveWeb from "../svgs/responsive.svg";

import fundamentals from "../svgs/fundamentalsQ.svg";
import buildApps from "../svgs/build_appsQ.svg";
import dsAlgo from "../svgs/ds_algoQ.svg";
import interviewPrep from "../svgs/interviewQ.svg";

import API from "../images/technology/png/API.png";
import mongoDB from "../images/technology/png/mongoDB.png";

import html5 from "../images/technology/svg/html-5.svg";
import css from "../images/technology/svg/css.svg";
import git from "../images/technology/svg/git.svg";
import bootstrap from "../images/technology/svg/bootstrap.svg";
import js from "../images/technology/svg/javascript.svg";
import react from "../images/technology/svg/react.svg";
import node from "../images/technology/svg/nodejs.svg";
import docker from "../images/technology/svg/docker.svg";
// bg #101010
// color #b3b3b3 !important

const features = [
  {
    title: " Faster Loading",
    para: "A website that loads quickly can provide a competitive edge over other businesses whose websites take a long time to download. We use the right technology to deliver fast, reliable performance.",
    img: fasterLoad,
    imgAlt: "Faster Loading",
  },
  {
    title: "SEO Enabled",
    para: " A website optimized for search engine helps your business to improve search visibility on Google. We use a practical approach to help you optimize your website for search engines.",
    img: seoEnabled,
    imgAlt: "Seo Enabled",
  },
  {
    title: "Responsive Web",
    para: " Responsive Website improves the user experience and provides a better experience on mobiles. We utilize grids to make a responsive website, ensuring that it looks great on any device.",
    img: responsiveWeb,
    imgAlt: "Responsive Web",
  },
];

const whatWillYouLearn = [
  {
    title: "Programming Fundamentals",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: fundamentals,
    imgAlt: "Programming Fundamentals",
  },
  {
    title: "Build Apps from Scratch",
    para: "You will build apps and webpages from scratch using HTML, CSS, Javascript, Node.js, and React.js",
    img: buildApps,
    imgAlt: "Build Apps from Scratch",
  },
  {
    title: "Data Structures and Algorithms",
    para: "You will learn about big-O notation, arrays, linked lists, stacks, queues, searching, sorting, and string manipulation",
    img: dsAlgo,
    imgAlt: "Data Structures and Algorithms",
  },
  {
    title: "Interview Preparation",
    para: "You will work on your portfolio, resume, soft skills and attend mock interviews or tests",
    img: interviewPrep,
    imgAlt: "Interview preparation",
  },
];

const syllabi = [
  {
    title: "Programming Fundamentals",
    bulletPoint: [
      "Basic Syntax",
      "Data Types",
      "Variables",
      "Conditions",
      "Loops",
      "Functions",
    ],
  },
  {
    title: "Web Developer Essentials",
    bulletPoint: [
      "How Browser Works",
      "HTTP/HTTPS",
      "DNS and Its Working",
      "Git and Deployment",
    ],
  },
  {
    title: "Frontend Development Part I",
    bulletPoint: [
      "Semantic HTML",
      "Forms and Validation",
      "Display and Box Model",
      "CSS Flex Box",
      "Positioning and Floats",
      "Responsive Design",
      "CSS Media Queries",
      "DOM Manipulation",
      "Fetch API",
      "Event Delegation",
      "DOM traversal",
      "ES6+ and modular JavaScript",
    ],
  },
  {
    title: "Frontend Development Part II",
    bulletPoint: [
      "JSX",
      "Components",
      "Props vs State",
      "Conditional Rendering",
      "Functional and Class Components",
      "Component Life Cycle",
      "List and Keys",
      "Composition and Inheritance",
      "React Hooks",
      "Higher Order Component",
      "Error Boundaries",
      "React Forms",
      "React Router and API Calls",
    ],
  },
  {
    title: "Backend Development",
    bulletPoint: [
      "Node.js",
      "OS Concepts",
      "Linux Command",
      "Network, Security and Protocols",
      "Proxy,Caching and Load Balancer",
      "Web Server",
      "CI/CD Tools",
      "Container and Infrastructure",
      "Design Pattern",
    ],
  },
];

const keyBenefits = [
  {
    title: "Coding Session",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Doubt Session",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Hands-on Learning",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Build Potfoilo",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Career Assitance",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Get Certified",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
];

const technologies = [
  {
    img: git,
    subTxt: "Git",
  },
  {
    img: css,
    subTxt: "CSS",
  },
  {
    img: js,
    subTxt: "Javascript",
  },
  {
    img: bootstrap,
    subTxt: "Bootstrap",
  },
  {
    img: API,
    subTxt: "RestAPI",
  },
  {
    img: mongoDB,
    subTxt: "MongoDB",
  },
  {
    img: react,
    subTxt: "ReactJS",
  },
  {
    img: node,
    subTxt: "NodeJS",
  },
  {
    img: docker,
    subTxt: "Docker",
  },
  {
    img: html5,
    subTxt: "HTML",
  },
];

const Quedemy = () => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const { site } = data;

  return (
    <>
      <Seo
        title={site.siteMetadata.title}
        image={logoPrimary}
        description={site.siteMetadata.description}
        slug=""
        type="website"
      />
      <Layout>
        {/* 1. Cover Page */}
        <div className="container-fluid py-5 softbg--gradient-light border border-secondary border-bottom-1">
          <div className="container px-2 pt-2 pb-4">
            <div className="row justify-content-center align-items-center g-5">
              <div className="col-12 col-md-12 col-lg-7 col-xl-8 text-center text-md-start">
                <Fade bottom>
                  <h1 className="display-2 mt-3 text-center text-md-start fw-bold heading--dark">
                    {/* Delivering Digital Experience */}
                    Become{" "}
                    <span style={{ color: "#4f15ac" }}>
                      Industry Ready
                    </span>{" "}
                    Full Stack Developer
                  </h1>
                </Fade>
                <Fade bottom>
                  <p className="fs-5 mt-3 text-center text-md-start text--dark">
                    4 months* intensive job ready training program. Industry
                    defined curriculum that helps you crack your dream job in
                    top companies upto 25 LPA.
                    {/* linear-gradient(277deg, #ef1237, hsl(337deg 87% 44%)) */}
                  </p>
                  <CallToActionQ
                    btnText="Book Now"
                    btnSubTxt=" and Get 90% Scholarship&nbsp;"
                  />
                </Fade>
              </div>
              <div className="col-8 col-md-7 col-lg-5 col-xl-4 text-white">
                <Zoom>
                  <img src={digitalNomad} className="img-fluid" />
                </Zoom>
              </div>
            </div>
          </div>

          <div className="container pb-4 px-2">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-11 col-lg-10">
                <div
                  className="card mt-4 p-5 py-4 text-center shadow-lg border-0 rounded-3"
                  style={{ background: "#fffefa00" }}
                >
                  <div className="row justify-content-center">
                    <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                      <div className="card-body">
                        <h5 className="card-title fs-5 fw-bold">Next Batch</h5>
                        <p className="card-text fs-5">July 15, 2022</p>
                      </div>
                    </div>
                    <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                      <div className="card-body">
                        <h5 className="card-title fs-5 fw-bold">Duration</h5>
                        <p className="card-text fs-5">4 months</p>
                      </div>
                    </div>
                    <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                      <div className="card-body">
                        <h5 className="card-title fs-5 fw-bold">Mode</h5>
                        <p className="card-text fs-5">Online</p>
                      </div>
                    </div>

                    <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                      <div className="card-body">
                        <h5 className="card-title fs-5 fw-bold">Projects</h5>
                        <p className="card-text fs-5">15+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* key features */}
        <div
          className="container-fluid py-5 border border-secondary border-bottom-1"
          style={{ backgroundColor: "#f6f1fd" }}
        >
          <div className="container py-4 px-2">
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-lg-12">
                <h2 className="display-3 mb-5 pb-3 fw-bold text-center heading--dark">
                  Key Features
                </h2>
              </div>
            </div>
            <div className="row g-4">
              {keyBenefits.map((learn) => (
                <div className="col-12 col-md-6 col-xl-4">
                  <CardQ
                    title={learn.title}
                    para={learn.para}
                    img={learn.img}
                    alt={learn.imgAlt}
                    cardBgColor="#fff"
                    headingColor="heading--dark"
                    txtColor="text--dark"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. What will you learn */}
        <div className="container-fluid py-5 border border-secondary border-bottom-1">
          <div className="container py-4 px-2">
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-lg-12">
                <h2 className="display-3 mb-5 pb-3 fw-bold text-center heading--light">
                  What Will You Learn
                </h2>
              </div>
            </div>
            <div className="row g-4">
              {whatWillYouLearn.map((learn) => (
                <div className="col-12 col-lg-6">
                  <CardQ
                    title={learn.title}
                    para={learn.para}
                    img={learn.img}
                    alt={learn.imgAlt}
                    cardBgColor="#ffffff0f !important"
                    headingColor="heading--light"
                    txtColor="text--light"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Meet your instructor */}
        <div
          className="container-fluid py-5 border border-secondary border-bottom-1 softbg--gradient-light"
          style={{ backgroundColor: "#4f15ac" }}
        >
          <div className="container px-2 py-4">
            <div className="row g-4 justify-content-center">
              <div className="col-10 col-md-8 col-lg-12">
                <h2 className="display-3 mb-5 pb-3 fw-bold text-center heading--dark">
                  Meet Your Instructors
                </h2>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                <div className="card p-3 pb-2 rounded-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src={arun}
                        className="rounded-circle me-3 mb-1 border border-2"
                        alt=".."
                        width="75px"
                      />
                    </div>
                    <div>
                      <h5 className="fs-4 heading--dark mb-1">
                        Arun Pratap Singh
                      </h5>
                      <p
                        className="fs-6 text-secondary mb-1"
                        style={{ fontWeight: "500" }}
                      >
                        Founder, AppQue
                      </p>
                      {/* <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                <div className="card p-3 pb-2 rounded-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src={rahul}
                        className="rounded-circle me-3 mb-1 border border-2"
                        alt=".."
                        width="75px"
                      />
                    </div>
                    <div>
                      <h5 className="fs-4 heading--dark mb-1">Rahul Kumar</h5>
                      <p
                        className="fs-6 text-secondary mb-1"
                        style={{ fontWeight: "500" }}
                      >
                        QA Engineer, Informatica
                      </p>
                      {/* <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Syllabus */}
        <div className="container-fluid py-5 border border-secondary border-bottom-1">
          <div className="container py-4 px-2">
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-lg-12">
                <h2 className="display-3 mb-5 pb-3 fw-bold text-center heading--light">
                  Course Syllabus
                </h2>
              </div>
            </div>
            <div className="row g-4">
              {syllabi.map((syllab) => (
                <div key={syllab.title} className="col-12 col-md-10 col-lg-6">
                  <div className="card p-4 h-100 shadow-sm border-0 rounded-3 services--card">
                    <div className="card-body">
                      <h5
                        className="fs-2 mt-1 mb-3 heading--light"
                        style={{ fontWeight: "500" }}
                      >
                        {syllab.title}
                      </h5>
                      <ul style={{ paddingLeft: "0.25rem" }}>
                        {syllab.bulletPoint.map((point) => (
                          <li key={point} className="fs-5 text--light">
                            <span
                              style={{
                                color: "greenyellow",
                                color: "#8b5ed4",
                              }}
                            >
                              <i class="bi bi-check-circle-fill"></i>
                            </span>
                            &nbsp; &nbsp;{point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology master hands-on */}
        <div
          className="container-fluid py-5 border border-secondary border-bottom-1"
          style={{ backgroundColor: "#f6f1fd" }}
        >
          <div className="container py-4 px-2">
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-lg-12">
                <h2 className="display-3 mb-5 pb-3 fw-bold text-center heading--dark">
                  Technologies You Will Learn Hands-on
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-11 col-lg-8">
                <div className="card p-4 pb-3 rounded-3 shadow-lg border-0 softbg--gradient-color">
                  <div className="card-body">
                    <div className="row g-4 justify-content-center">
                      {technologies.map((tech) => (
                        <div className="col-5 col-sm-4 col-md-3">
                          <div
                            className="card p-2 h-100 border-0 text-center"
                            style={{
                              backgroundColor: "#fafbff !important",
                              borderRadius: "30px",
                            }}
                          >
                            <img
                              src={tech.img}
                              className="mt-1"
                              width="55"
                              style={{ alignSelf: "center" }}
                            />
                            <div className="card-body p-0">
                              <p className="fs-6 mb-1 fw-bold text--dark">
                                <small>{tech.subTxt}</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fixed CTA only visible on xs and sm mobile screen */}
        <div className="container-fluid position-relative border border-secondary border-bottom-1">
          <div className="container px-2">
            <div className="row">
              <div className="col d-block d-sm-block d-md-none text-center">
                <div
                  className=" position-fixed px-2"
                  style={{
                    zIndex: "1000",
                    left: "2%",
                    right: "2%",
                    bottom: "2%",
                  }}
                >
                  <CallToActionQ
                    btnText="Book Now"
                    btnSubTxt=" and Get 90% Scholarship&nbsp;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Extra */}
      </Layout>
    </>
  );
};

// rgb(235, 241, 255)
export default Quedemy;
