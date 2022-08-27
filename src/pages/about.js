import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import developmentTeam from "../svgs/undraw-development.svg";

import rdDevelopment from "../svgs/undraw-research.svg";
import bncTogether from "../svgs/undraw-build.svg";
import commitedToGrowth from "../svgs/undraw-commited.svg";

import latestTechnology from "../svgs/undraw-technology.svg";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container-fluid py-5 bg--secondary-dark text-white">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center g-5">
            <div className="col-12">
              <Fade bottom>
                <h1 className="display-1 fw-bold mt-3 text-light text-left text-md-center">
                  Empowering Businesses&nbsp;
                  <span className="text--primary-gradient">With Technologies</span>
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
              <h2 className="display-2 px-5 pb-5 mb-4 text-center fw-bold underline">
                Who We Are?
              </h2>
            </div>
          </div>
          <div className="row g-5 justify-content-between align-items-center">
            <div className="col-12 col-lg-7 col-xl-6">
              <Fade bottom>
                <h4 className="display-5 fw-bold text-dark">
                  Your Development Team
                </h4>
              </Fade>
              <Fade bottom>
                <p className="fs-5 mt-3 text--dark">
                  Helping businesses &amp; individuals to grow their online
                  presence and bring their targeted audience closer. We deliver
                  business solutions and experiences with the help of modern
                  cutting edge technologies.
                </p>
              </Fade>
            </div>
            <div className="col-12 col-lg-5 col-xl-6 text-center position-relative">
              <Zoom>
                <img
                  src={developmentTeam}
                  className="img-fluid"
                  style={{ width: "100%", maxWidth: "400px" }}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid py-5">
        <div className="container py-5 px-0">
          <div className="row g-3 justify-content-center">
            <div className="col-12">
              <h2 className="display-2 px-5 pb-5 mb-4 text-center fw-bold underline">
                Why Us?
              </h2>
            </div>
          </div>
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card border-0 card--about">
                <Zoom>
                  <img src={rdDevelopment} className="card-img-top p-5" />
                  <div className="card-body">
                    <h6 className="fs-2 fw-bold ps-3 text-dark">
                      Research Driven Development
                    </h6>
                  </div>
                </Zoom>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-6">
              <div className="card border-0 card--about">
                <Zoom>
                  <img src={commitedToGrowth} className="card-img-top p-5" />
                  <div className="card-body">
                    <h6 className="fs-2 fw-bold ps-3 text-dark">
                      Commited To Your Growth
                    </h6>
                  </div>
                </Zoom>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-6">
              <div className="card border-0 card--about">
                <Zoom>
                  <img src={latestTechnology} className="card-img-top p-5" />
                  <div className="card-body">
                    <h6 className="fs-2 fw-bold ps-3 text-dark">
                      Work With Latest Technologies
                    </h6>
                  </div>
                </Zoom>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card border-0 card--about">
                <Zoom>
                  <img src={bncTogether} className="card-img-top p-5" />
                  <div className="card-body">
                    <h6 className="fs-2 fw-bold ps-3 text-dark">
                      Build And Create Together
                    </h6>
                  </div>
                </Zoom>
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
          <div className="row g-5 justify-content-center align-items-center px-2 mb-1">
            <div className="col-12 col-lg-5 col-xl-6">
              <h2 className="display-2 text-center fw-bold">Ready To Grow?</h2>
            </div>
            <div className="col-12 col-md-10 col-lg-6 col-xl-5">
              <div
                className="card border-0"
                style={{ backgroundColor: "rgb(249 251 255)" }}
              >
                <div className="card-body p-5">
                  <h6 className="fs-2 fw-bold text-dark">
                    Join Our Team
                  </h6>
                  <p className="fs-5 text--dark">
                    Curious about how appQue team impact the growth of
                    businesses. Let's find out if we are the right match for
                    you.
                  </p>

                  <a
                    href="//forms.gle/mYbBzSs1fcuSCaZA9"
                    className="btn btn-primary fs-6 text-light py-2 text-uppercase fw-bold"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
