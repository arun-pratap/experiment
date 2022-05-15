import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "./../components/Layout";
import Seo from "../components/Seo";
import logoPrimary from "../images/logo/logo-primary.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import digital from "../svgs/undraw-digital-nomad.svg";

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
        <div
          className="container-fluid py-5 text-white bg--primary"

        >
          {/* rgb(249, 251, 255) */}
          <div className="container">
            <div className="row justify-content-center align-items-center g-5">
              <div className="col-12 col-lg-7">
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
                  <button className="btn btn-lg bg-dark text-white mt-2 font--weight-500 bg--primary">
                    Request a proposal
                  </button>
                </Fade>
              </div>
              <div className="col-12 col-md-8 col-xl-5">
                <Zoom>
                  <img src={digital} className="img-fluid pt-4 pb-5" />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
