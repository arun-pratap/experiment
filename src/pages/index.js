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
import Card from "../components/SimpleCard";
import CardWithLink from "../components/CardWithLink";
import StepCard from "../components/StepCard";

import fasterLoad from "../svgs/faster-load.svg";
import seoEnabled from "../svgs/seo-enabled.svg";
import responsiveWeb from "../svgs/responsive.svg";

import chat from "../svgs/chat.svg";
import ui from "../svgs/ui.svg";
import cart from "../svgs/cart.svg";
import cms from "../svgs/cms.svg";
import integration from "../svgs/integration.svg";
import erp from "../svgs/erp.svg";

import strategicDiscovery from "../svgs/discovery.svg";
import productDesigning from "../svgs/designing.svg";
import productDevelopment from "../svgs/development.svg";
import automateDeployment from "../svgs/deployment.svg";
import optimimizePerformance from "../svgs/performance.svg";
import ContactForm from "../components/ContactForm";
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

const offers = [
  {
    iconImage: chat,
    iconAlt: "Strategy and Consultation",
    heading: "Web Application Development",
    // Our team will help your business to
    para: "Secure, fast and flexible e-commerce store to drive more traffic and revenue",
    link: "web-application-development",
  },
  {
    iconImage: ui,
    iconAlt: "Website Design and Development",
    heading: "Frontend Development",
    para: "Secure, fast and flexible e-commerce store to drive more traffic and revenue",
    link: "frontend-development",
  },
  {
    iconImage: cart,
    iconAlt: "Cart Development",
    heading: "Ecommerce Development",
    para: "Secure, fast and flexible e-commerce store to drive more traffic and revenue",
    link: "ecommerce-development",
  },
  {
    iconImage: cms,
    iconAlt: "Headless CMS Development",
    heading: "Headless Development",
    para: "Secure, fast and flexible e-commerce store to drive more traffic and revenue",
    link: "headless-ecommerce-development",
  },
  {
    iconImage: integration,
    iconAlt: "Integration",
    heading: "Progressive Web Application",
    para: "Secure, fast and flexible e-commerce store to drive more traffic and revenue",
    link: "pwa-development",
  },
];

const howWeDo = [
  {
    iconImage: strategicDiscovery,
    iconAlt: "Strategic Discovery",
    heading: "Strategic Discovery",
    para: "Collect information about your business, target market, competitors, customer and align your business goals to deliver great value to your customer.",
  },
  {
    iconImage: productDesigning,
    iconAlt: "Designing",
    heading: "Website Designing",
    para: "Refine unique values of your business. We create a roadmap and design a great UX to establish a strong brand voice and drive more conversions.",
  },
  {
    iconImage: productDevelopment,
    iconAlt: "Development",
    heading: "Website Development",
    para: "Highly skilled teams to deploy your business rapidly. We deliver smooth, fast and flexible ecommerce experience on any device.",
  },
  {
    iconImage: automateDeployment,
    iconAlt: "Deployment",
    heading: "Automate Deployment",
    para: "Our experts help you launch your eCommerce store successfully. We provide fast, easy, secure and hassle-free deployment.",
  },
  {
    iconImage: optimimizePerformance,
    iconAlt: "Performance",
    heading: "Boost Performance",
    para: "Check necessary performance parameters of your ecommerce and optimize it. It ensures a smooth browsing experience.",
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
        <div className="container-fluid py-5 bg--light-gradient">
          <div className="container pb-4">
            <div className="row justify-content-center align-items-center g-5">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                <Fade bottom>
                  <h1 className="display-2 mt-3 fw--700">
                    Delivering Digital Experience
                  </h1>
                </Fade>
                <Fade bottom>
                  <p className="fs-5 mt-3 text--dark">
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

        <div className="container-fluid py-5 softbg--gradient-dark">
          <div className="container py-5">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-12 col-md-7 col-lg-6 col-xl-7">
                <h2 className="display-5 mb-4 text-start fw--700">
                  Our tech-driven services help your business build trust,
                  credibility and engage visitors.
                </h2>
                <Fade bottom>
                  <p className="fs-5 mb-4 text--dark">
                    Combining our team's experience in web development services
                    and modern cutting-edge technology keeps you one step ahead
                    of your competition. Our web development services help you
                    create an impact that drives success. We deliver measurable
                    and effective results for your business.
                  </p>
                </Fade>
                <Fade bottom>
                  <p className="fs-5 text--dark">
                    We have the experience and demonstrated&nbsp;
                    results to show you how we can help with
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
          className="container-fluid py-5 bg--light-gradient"
        >
          <div className="container py-5">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-12 col-md-7 col-lg-6">
                <h2 className="display-4 mb-4 text-start fw--700">
                  Ready to grow with us? Get your free proposal today
                </h2>
                <Fade bottom>
                  <p className="fs-5 mb-4 text--dark">
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

        <div className="container-fluid py-5 text-white softbg--gradient-dark">
          <div className="container py-5">
            <div className="row">
              <h2 className="display-4 mb-4 pb-5 text-center underline fw--700">
                Our Offerings
              </h2>
            </div>
            <div className="row g-5">
              {offers.map((offer) => (
                <Fade key={offer.heading} bottom>
                  <div className="col-12 col-md-6 col-xl-4">
                    <CardWithLink title={offer.heading}
                      para={offer.para}
                      img={offer.iconImage}
                      imgAlt={offer.iconAlt}
                      link={offer.link} />
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 softbg--gradient-light">
          <div className="container py-5">
            <div className="row">
              <h2 className="display-4 mb-4 pb-5 text-center underline fw--700">
                How We Do It
              </h2>
            </div>
            <div className="row g-5">
              {howWeDo.map((step, index) => (
                <Fade key={step.heading} bottom>
                  <div className="col-12 col-md-6 col-xl-4">
                    <StepCard title={step.heading}
                    para={step.para}
                    img={step.iconImage}
                    alt={step.iconAlt}
                    step={index}
                    />
                    
                  </div>
                </Fade>
              ))}
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
        <ContactForm />
      </Layout>
    </>
  );
};

// rgb(235, 241, 255)
export default IndexPage;
