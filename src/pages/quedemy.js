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
import CardQ from "../components/CardQ";
import Card from "../components/Card";

import fasterLoad from "../svgs/faster-load.svg";
import seoEnabled from "../svgs/seo-enabled.svg";
import responsiveWeb from "../svgs/responsive.svg";

import fundamentals from "../svgs/fundamentalsQ.svg";
import buildApps from "../svgs/build_appsQ.svg";
import dsAlgo from "../svgs/ds_algoQ.svg";
import interviewPrep from "../svgs/interviewQ.svg";

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
    title: "Programming fundamentals",
    para: "basic of programming like variable,types, conditional statements loop, array, string and more",
    img: fundamentals,
    imgAlt: "Fundamentals",
  },
  {
    title: " Data structures and algorithms",
    para: "  big O notation, arrays, linked lists, stacks, queues, searching, sorting and string manipulation.",
    img: dsAlgo,
    imgAlt: "DS and Algo",
  },
  {
    title: " Build Apps from scratch",
    para: "build apps and webpages from scratch using HTML, CSS, Javascript, Node.js and React.js",
    img: buildApps,
    imgAlt: "Build Apps",
  },
  {
    title: " Interview preparation",
    para: "improving your portfolio,resume and soft skills and conduct mock interviews or tests.",
    img: interviewPrep,
    imgAlt: "Interview Prep",
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
        <div className="container-fluid py-5 softbg--gradient-light">
          {/* 1. Cover Page */}
          <div className="container pt-2 pb-4">
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
                  <p className="fs-4 mt-3 text-center text-md-start text--dark">
                    4-month intensive job ready training program. Industry
                    defined curriculum that helps you crack your dream job in
                    top companies upto 25 LPA.
                    {/* linear-gradient(277deg, #ef1237, hsl(337deg 87% 44%)) */}
                  </p>
                  <CallToActionQ btnText="Book Now and Get 90% Scholarship &nbsp;" />
                </Fade>
              </div>
              <div className="col-8 col-md-7 col-lg-5 col-xl-4 text-white">
                <Zoom>
                  <img src={digitalNomad} className="img-fluid" />
                </Zoom>
              </div>
            </div>
          </div>

          {/* 2.  */}
          <div className="container pb-4">
            <div
              className="card mt-4 py-3 text-center shadow border-0"
              style={{ background: "transparent" }}
            >
              <div className="row justify-content-center">
                <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                  <div className="card-body">
                    <h5 className="card-title fs-4">Next Batch</h5>
                    <p className="card-text fs-5">July 15, 2022</p>
                  </div>
                </div>
                <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                  <div className="card-body">
                    <h5 className="card-title fs-4">Duration</h5>
                    <p className="card-text fs-5">4 months</p>
                  </div>
                </div>
                <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                  <div className="card-body">
                    <h5 className="card-title fs-4">Mode</h5>
                    <p className="card-text fs-5">Online</p>
                  </div>
                </div>

                <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                  <div className="card-body">
                    <h5 className="card-title fs-4">Projects</h5>
                    <p className="card-text fs-5">15+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. */}
        <div
          className="container-fluid py-5"
          style={{ backgroundColor: "#110425" }}
        >
          <div className="container py-4">
            <div className="row">
              <h2 className="display-3 mb-5 fw-bold heading--light">
                What will you learn
              </h2>
            </div>
            <div className="row g-4">
              {whatWillYouLearn.map((learn) => (
                <div className="col-12 col-lg-6">
                  <CardQ
                    title={learn.title}
                    para={learn.para}
                    img={learn.img}
                    alt={learn.imgAlt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 softbg--gradient-dark">
          <div className="container py-5">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-12 col-md-7 col-lg-6 col-xl-7">
                <h2 className="display-4 mb-4 fw-bold text-start heading--light">
                  Our tech-driven services help your business build trust,
                  credibility and engage visitors.
                </h2>
                <Fade bottom>
                  <p className="fs-4 mb-4 text--light">
                    Combining our team's experience in web development services
                    and modern cutting-edge technology keeps you one step ahead
                    of your competition. Our web development services help you
                    create an impact that drives success. We deliver measurable
                    and effective results for your business.
                  </p>
                </Fade>
                <Fade bottom>
                  <p className="fs-4 text--light">
                    We have the experience and demonstrated&nbsp;
                    <a href="#">results</a> to show you how we can help with
                    your web development project. Contact us today to schedule a
                    free consultation.
                  </p>
                </Fade>
              </div>
              <div className="col-12 col-md-5 col-lg-5 d-none d-md-block text-center">
                <div className="mb-4">
                  <Zoom>
                    <img src={unsplashTech} alt="..." className="img-fluid" />
                  </Zoom>
                </div>
              </div>
            </div>
            <div className="row g-5 mt-3 justify-content-center text-white">
              {features.map((feature) => (
                <div className="col-12 col-lg-10 col-xl-4">
                  <Fade bottom key={feature.title}>
                    <Card
                      title={feature.title}
                      para={feature.para}
                      img={feature.img}
                      alt={feature.imgAlt}
                    />
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

// rgb(235, 241, 255)
export default Quedemy;
