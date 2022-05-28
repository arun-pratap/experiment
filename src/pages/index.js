import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "./../components/Layout";
import Seo from "../components/Seo";
import CallToAction from "../components/CallToAction";
import logoPrimary from "../images/logo/logo-primary.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import digitalNomad from "../svgs/undraw-digital-nomad.svg";
import results from "../svgs/undraw-results.svg";
import unsplashTech from "../images/unsplash-techp.jpg";
import pexelsWomen from "../images/pexelsWomen.jpg";
import Card from "../components/Card";

import fasterLoad from "../svgs/faster-load.svg";
import seoEnabled from "../svgs/seo-enabled.svg";
import responsiveWeb from "../svgs/responsive.svg";

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
        <div className="container-fluid py-5 softbg--gradient-light">
          <div className="container pb-4">
            <div className="row justify-content-center align-items-center g-5">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7">
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

        <div
          className="container-fluid py-5 softbg--gradient-dark"
          style={{ color: "#b3b3b3" }}
        >
          <div className="container py-5">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-12 col-md-7 col-lg-6 col-xl-7">
                <h2 className="display-4 mb-4 fw-bold text-start text-white">
                  Our tech-driven services help your business build trust,
                  credibility and engage visitors.
                </h2>
                <Fade bottom>
                  <p className="fs-4 mb-4">
                    Combining our team's experience in web development services
                    and modern cutting-edge technology keeps you one step ahead
                    of your competition. Our web development services help you
                    create an impact that drives success. We deliver measurable
                    and effective results for your business.
                  </p>
                </Fade>
                <Fade bottom>
                  <p className="fs-4">
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
                <Fade bottom>
                  <p className="fs-4 mb-4 text-secondary">
                    Our team closely analyzes the successful strategies of your
                    competitors. We combine this knowledge with our expertise
                    and create a success plan for your business that unlocks
                    more possibilities and engagements.
                  </p>
                  <CallToAction btnText="Request a proposal&nbsp;&nbsp;" />
                </Fade>
              </div>

              <div className="col-12 col-md-5 col-lg-5 d-none d-md-block text-center">
                <div className="rtg">
                  <Zoom>
                    <img src={pexelsWomen} alt="..." className="img-fluid" />
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5 justify-content-center">
              <div className="col">
                
                <div className="card p-4 pb-3 h-100 border-0 shadow services--card">
                  <div
                    style={{ width: "75px", height: "75px" }}
                    className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center bg--gradient-blue"
                  >
                    <img
                      src={seoEnabled}
                      alt="..."
                      width="28px"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="display-6 mt-1 mb-3 fw-bold">Services to Provide</h5>
                    <p className="fs-4" style={{ color: "var(--grey-500)" }}>
                    Being a top-notch mobile app development company in USA, we deliver an exquisite experience with our powerful mobile apps iOS Android Ionic React Native
                    </p>
                    <CallToAction others={{
                      href:"/car"
                    }}/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* @TODO
        - Cover Page done
        - Hook headline done
        - Contact Form done
        - Satisfied Customers [ 2 to 3 ] (optional)
        - 4 to 6 Features with icon, heading and paragraph done
        - Services Listed heading, para and link to individual service page
        - Talk in Numbers what we can help to establish (optional)
        - large highlighted contact form with two column => 1:heading, paragraph,cta 2:image

        */}
      </Layout>
    </>
  );
};

// rgb(235, 241, 255)
export default IndexPage;
