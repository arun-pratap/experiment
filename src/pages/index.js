import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "./../components/Layout";
import Seo from "../components/Seo";
import logoPrimary from "../images/logo/logo-primary.png";

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

  console.log(site);
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
        <a href={logoPrimary}>hello</a>IndexPage
      </Layout>
    </>
  );
};

export default IndexPage;
