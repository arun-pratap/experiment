import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "./../components/Layout";
import Seo from "../components/Seo";
import logoPrimary from "../images/logo/logo-primary.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import digitalNomad from "../svgs/undraw-digital-nomad.svg";
import results from "../svgs/undraw-results.svg";
import CallToAction from "../components/CallToAction";

const IndexPage = () => {
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
        {/* Cover Page */}
        <div className="container-fluid py-5 bg--primary softbg--gradient-dark">
          <div className="container py-4">
            <div className="row justify-content-center align-items-center g-5">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7 text-white">
                <Fade bottom>
                  <h1 className="display-2 mt-3 fw-bold">
                    Delivering Digital Experience
                  </h1>
                </Fade>
                <Fade bottom>
                  <p className="fs-4 mt-3">
                    Accelerate your business growth with the power of fastest
                    and modern technology.
                  </p>
                  <CallToAction btnText="Request a proposal&nbsp;&nbsp;" />
                </Fade>
              </div>
              <div className="col-12 col-md-7 col-lg-4 col-xl-5 text-white">
                <Zoom>
                  <img src={digitalNomad} className="img-fluid" />
                </Zoom>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5 justify-content-between align-items-start">
              <div className="col-12 col-md-7 col-lg-6 col-xl-7">
                <h2 className="display-4 mb-4 fw-bold text-start ">
                  Our tech-driven services help your business build trust,
                  credibility and engage visitors.
                </h2>
                <p className="fs-4 mb-4 text-secondary">
                  Combining our team and modern cutting-edge teachnology keeps
                  you one step ahead from your competition. Our web development
                  services help you create impact that drive success. We deliver
                  measurable and effective results for your business.
                </p>
                <p className="fs-4 text-secondary">
                  We are not just talking. We have the results to&nbsp;
                  <a href="#">show</a>. Get in touch with us today and learn
                  what makes appQue different from others web development
                  agency.
                </p>
              </div>
              <div className="col-12 col-md-5 col-lg-5 d-none d-md-block text-center">
                <img src={results} alt="..." className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid py-5"
          style={{ backgroundColor: "rgb(235, 241, 255)" }}
        >
          <div className="container py-5">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-12 col-md-7 col-lg-6">
                <h2 className="display-4 mb-4 fw-bold text-start">
                  Ready to grow with us? Get your free proposal today
                </h2>
                <p className="fs-4 mb-4 text-secondary">
                  Our team closely analyse the successful competitors of your
                  business. We put together all of that and create a success
                  plan for your business. It unlocks more possibilites and
                  engagements.
                </p>
                <CallToAction btnText="Request a proposal&nbsp;&nbsp;" />
              </div>

              <div className="col-12 col-md-5 col-lg-5 d-none d-md-block text-center">
                <img src={results} alt="..." className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* 
        - Satisfied Customers [ 2 to 3 ] (optional)
        - 4 to 6 Features with icon, heading and paragraph
        - Services Listed heading, para and link to individual service page
        - Talk in Numbers what we can help to establish (optional)
        - large highlighted contact form with two column => 1:heading, paragraph,cta 2:image

        */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-12 col-md-6">
                <h2 className="display-4 mb-4 fw-bold text-start">
                  What we can do for you?
                </h2>
                <p className="fs-4 mb-4 text-secondary">
                  Our strength lies in the comprehensive suite of services we
                  offer to our clients. From full-stack development to just
                  consultancy- you demand, we deliver.
                </p>
              </div>
              <div classname="col-12 col-md-6">
                <h2 className="display-4 mb-4 fw-bold text-start">
                  What we can do for you?
                </h2>
                <p className="fs-4 mb-4 text-secondary">
                  Our strength lies in the comprehensive suite of services we
                  offer to our clients. From full-stack development to just
                  consultancy- you demand, we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

// rgb(235, 241, 255)
export default IndexPage;
