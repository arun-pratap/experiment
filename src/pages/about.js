import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import ContactCall from "../components/ContactCall";
import ContactForm from "../components/ContactForm";

import developmentTeam from "../svgs/undraw-development.svg";

import rdDevelopment from "../svgs/undraw-research.svg";
import bncTogether from "../svgs/undraw-build.svg";
import commitedToGrowth from "../svgs/undraw-commited.svg";

import latestTechnology from "../svgs/undraw-technology.svg";

export default function About() {
  return (
    <>
      <div className="container-fluid py-5 bg--about text-white">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center g-5">
            <div className="col-12">
              <Fade bottom>
                <h1 className="display-1 fw-bold mt-3 text-left text-md-center">
                  Empowering Businesses&nbsp;
                  <span className="text--gradient-blue">With Technologies</span>
                </h1>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <section
        className="container-fluid py-5"
        style={{ backgroundColor: "#f2f4fe" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="display-4 px-5 pb-5 mb-4 text-center fw-bold underline">
                Who We Are?
              </h2>
            </div>
          </div>
          <div className="row g-5 justify-content-between align-items-center">
            <div className="col-12 col-lg-7 col-xl-5">
              <Fade bottom>
                <h3 className="display-6 fw-bold">Your Development Team</h3>
              </Fade>
              <Fade bottom>
                <p className="fs-5 mt-3">
                  Helping businesses &amp; individuals to grow their online
                  presence and bring their targeted audience closer. We deliver
                  business solutions and experiences with the help of modern
                  cutting edge technologies.
                </p>
              </Fade>
            </div>
            <div className="col-12 col-lg-5 col-xl-6 text-center position-relative">
              <Zoom>
                <img src={developmentTeam} className="img-fluid" />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <div className="col-12">
              <h2 className="display-4 px-5 pb-5 mb-4 text-center fw-bold underline">
                Why Us?
              </h2>
            </div>
          </div>
          <div className="row g-5 justify-content-center align-items-center">
            <div className="col-10 col-sm-6 col-lg-4">
              <div className="card border-0 card--about">
                <img src={rdDevelopment} className="card-img-top p-5" />
                <div className="card-body">
                  <h5 className="fs-3 fw-bold ps-3">
                    Research Driven Development
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-lg-6">
              <div className="card border-0 card--about">
                <img src={commitedToGrowth} className="card-img-top p-5" />
                <div className="card-body">
                  <h5 className="fs-3 fw-bold ps-3">Commited To Your Growth</h5>
                </div>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-lg-6">
              <div className="card border-0 card--about">
                <img src={latestTechnology} className="card-img-top p-5" />
                <div className="card-body">
                  <h5 className="fs-3 fw-bold ps-3">
                    Work With Latest Technologies
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-lg-4">
              <div className="card border-0 card--about">
                <img src={bncTogether} className="card-img-top p-5" />
                <div className="card-body">
                  <h5 className="fs-3 fw-bold ps-3">
                    Build And Create Together
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pb-5">
        <div
          className="container py-5 mb-5 rounded"
          style={{ backgroundColor: "rgb(235 241 255)" }}
        >
          <div className="row g-4 justify-content-center align-items-center px-2 mb-1">
            <div className="col-12 col-md-6">
              <h2 className="display-4 text-center fw-bold">Ready To Grow?</h2>
            </div>
            <div className="col-12 col-md-5">
              <div
                className="card border-0"
                style={{ backgroundColor: "rgb(249 251 255)" }}
              >
                <div className="card-body p-5">
                  <h5 className="fs-3 fw-bold">Join Our Team</h5>
                  <p className="fs-5">
                    Curious about how appQue team impact the growth of
                    businesses. Let's find out if we are the right match for
                    you.
                  </p>
                  <a
                    href="/career"
                    className="btn btn-lg text-white bg--primary font--weight-500"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
