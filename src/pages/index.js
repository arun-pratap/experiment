import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "./../components/Layout";
import Seo from "../components/Seo";
import logoPrimary from "../images/logo/logo-primary.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import digital from "../svgs/undraw-digital-nomad.svg";
import ContactForm from "../components/ContactForm";

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
                  <button className="d-inline-flex align-items-center btn btn-lg text-white mt-2 px-4 bg--primary">
                    Request a proposal&nbsp;&nbsp;
                    <i class="bi bi-arrow-right fs-4"></i>
                  </button>
                </Fade>
              </div>
              <div className="col-12 col-md-7 col-lg-4 col-xl-5 text-white">
                <Zoom>
                  <img src={digital} className="img-fluid" />
                </Zoom>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container py-4">
            <div className="row g-3 justify-content-center align-items-center">
              <div className="col-12">
                <h2 className="display-4 fw-bold text-capitalize text-start">
                  Our tech marketing service help your business grow online
                  leads, call, and revenue.
                </h2>
              </div>
              <div className="col-12">
                <p className="fs-4 mb-4">
                  Combining our technology platform and our expert online
                  marketing team gives you an unfair advantage over your
                  competition. As a leader in SEO, PPC, social, marketplaces,
                  and web design services, our digital marketing agency prides
                  itself on driving qualified traffic, converting visitors, and
                  using cutting-edge technology measuring effectiveness to
                  deliver real results for our clients.
                </p>
                <p className="fs-4 mb-4">
                  Combining our technology platform and our expert online
                  marketing team gives you an unfair advantage over your
                  competition. As a leader in SEO, PPC, social, marketplaces,
                  and web design services, our digital marketing agency prides
                  itself on driving qualified traffic, converting visitors, and
                  using cutting-edge technology measuring effectiveness to
                  deliver real results for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid py-5"
          style={{ backgroundColor: "rgb(235, 241, 255)" }}
        >
          <div className="container py-4">
            <div className="row g-3 justify-content-center">
              <div className="col-12 col-lg-8">
                <h2 className="display-4 fw-bold text-capitalize text-sm-center">
                  Ready to grow with us? Get your free proposal today
                </h2>
              </div>
              <div className="col-12 col-lg-8 text-sm-center">
                <p className="fs-4 mb-4 text-sm-center">
                  Our digital growth team have put otgether thousands of
                  seccessfuldigital marketing campaigns for businesses looking
                  to increase leads, phone calls, transactions, and qualified
                  website traffic.
                </p>
                <button className="d-inline-flex align-items-center btn btn-lg text-white mt-2 px-4 bg--primary">
                  Request a proposal&nbsp;&nbsp;
                  <i class="bi bi-arrow-right fs-4"></i>
                </button>
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
