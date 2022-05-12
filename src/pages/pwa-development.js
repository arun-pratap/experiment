import * as React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import ContactForm from "../components/ContactForm";
import ContactCall from "../components/ContactCall";

import imageSecondary from "../images/revenue-secondary.svg";
import chat from "../svgs/chat.svg";
import ui from "../svgs/ui.svg";
import cart from "../svgs/cart.svg";
import cms from "../svgs/cms.svg";
import integration from "../svgs/integration.svg";
import erp from "../svgs/erp.svg";

import nativeExperience from "../svgs/undraw-native.svg";

import fromScratch from "../svgs/undraw-scratch.svg";
import websiteLaunch from "../svgs/undraw-website-launch.svg";
import websiteOptimization from "../svgs/undraw-optimization.svg";
import websiteMigration from "../svgs/undraw-migration.svg";

import strategicDiscovery from "../svgs/discovery.svg";
import productDesigning from "../svgs/designing.svg";
import productDevelopment from "../svgs/development.svg";
import automateDeployment from "../svgs/deployment.svg";
import optimimizePerformance from "../svgs/performance.svg";
import Layout from "../components/Layout";

/* @TODO
  1. Cover Page with contact Form or just cta
  <show branded testimonial if any>
  2.Trust Hooks
  3. Offerings
  4. How we can help or capabilities
  5. Why us or advantages or benefits
  4. Portfolio /Showcase if any
  5. Testimonials /Success Stories if any
  6. Award and Recognitions If Any
  7. Recommended Insights/ blogs/books if any
*/
const canHelp = [
  {
    heading: "Development From Scratch",
    para: " Help you to choose the right platform and tenchnolgy stacks along with qualified and expert developers. We will help you to build a fast and scalable frontend that looks great on any device (mobile, desktop, and iPad).",
    imagePicture: fromScratch,
    imageAlt: "Frontend Development From Scratch",
    order: "0",
  },
  {
    heading: "Headless Ecommerce Development",
    para: "Scale your ecommerce website so you can reach your customer effortlessly. We will make sure that your business works without any problems and deliver great customer experiences.",
    imagePicture: websiteLaunch,
    imageAlt: "Headless Ecommerce Development",
    order: "1",
  },
  {
    heading: "Single Page Web Application Development",
    para: "Web apps become complex as it grows. We will use cutting edge technologies and frameworks that makes your web application fast, flexible and, smooth. It will unlock more possiblities for your business.",
    imagePicture: websiteOptimization,
    imageAlt: "Single Page Application Development",
    order: "0",
  },
];

const offers = [
  {
    iconImage: chat,
    iconAlt: "Strategy and Consultation",
    heading: "E-commerce Website Strategy and Consultation",
    // Our team will help your business to
    para: "Increase revenue and get more traffic with strategic planning that matches your customer expectations and your business requirements",
  },
  {
    iconImage: ui,
    iconAlt: "Website Design and Development",
    heading: "E-commerce Website Design and Development",
    para: "Drive more conversions and establish a unique brand voice with conversion-focused, visually stunning templates.",
  },
  {
    iconImage: cart,
    iconAlt: "Cart Development",
    heading: "Custom Shopping Cart Development",
    para: "Reduce cart abandonment and deliver a great user experience with features like quick checkout and custom discounts.",
  },
  {
    iconImage: cms,
    iconAlt: "CMS Development",
    heading: "CMS Development",
    para: "We provide CMS(Contemt Management System) development and integration services to build a fully-fumctional eCommerce website.",
  },
  {
    iconImage: integration,
    iconAlt: "Integration",
    heading: "Third Party Integration",
    para: "Get real-time updates on customers’ orders, delivery and other important information by integrating any CRM, CMS, and ERP using APIs.",
  },
  {
    iconImage: erp,
    iconAlt: "ERP System",
    heading: "Dedicated ERP System",
    para: "Improve coordination between departments with a centralized ERP to have a real-time view of the current business situation.",
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

export default function PWADevelopment() {
  return (
    <Layout>
      {/* Cover Page */}
      <div className="container-fluid py-5 softbg--gradient-dark text-white">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center g-5">
            <div className="col-12 col-xl-7">
              <Fade bottom>
                <h1 className="display-3 fw-bold mt-3">
                  Progressive Web Applications Services To&nbsp;
                  <span className="text--gradient-blue">
                    Deliver Native Experiences
                  </span>
                </h1>
              </Fade>
              <Fade bottom>
                <p className="fs-5 mt-3">
                  Helping businesses to build feature-rich web application that
                  works like a native mobile app and deliver fast &amp; smooth
                  browsing experiences
                </p>
                <button className="btn btn-lg text-white mt-2 font--weight-500 bg--primary">
                  Request a proposal
                </button>
              </Fade>
            </div>
            <div className="col-12 col-md-8 col-xl-5 mx-auto text-center">
              <Zoom>
                <img src={nativeExperience} className="img-fluid" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>

      {/* How appQue can help you */}
      <div className="container-fluid py-5 softbg--gradient-light">
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <h2 className="display-4 px-5 pb-5 mb-4 text-center fw-bold underline">
              We Can Help You
            </h2>
          </div>
          {canHelp.map((help, index) => (
            <div
              key={index}
              className="row justify-content-between align-items-center g-5 mb-5 pb-5"
            >
              <div
                className={`col-12 col-lg-7 col-xl-5 order-lg-${help.order}`}
              >
                <span className="text--primary fw-bold">
                  <small>Progressive Web Application</small>
                </span>
                <Fade bottom>
                  <h2 className="display-6 fw-bold mt-3">{help.heading}</h2>
                </Fade>
                <Fade bottom>
                  <p className="fs-5 mt-3">{help.para}</p>
                </Fade>
              </div>
              <div className="col-12 col-lg-5 col-xl-6 text-center position-relative">
                <Zoom>
                  <img src={help.imagePicture} className="img-fluid" />
                </Zoom>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Offerings or Services */}
      <div className="container-fluid py-5 text-white softbg--gradient-dark">
        <div className="container py-5">
          <div className="row">
            <h2 className="display-4 mb-4 pb-5 text-center underline font--weight-500">
              Our Offerings
            </h2>
          </div>
          <div className="row g-5">
            {offers.map((offer) => (
              <Fade key={offer.heading} bottom>
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="card p-4 h-100 border-0 shadow services--card">
                    <div
                      style={{ width: "65px", height: "65px" }}
                      className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center bg--gradient-blue"
                    >
                      <img
                        src={offer.iconImage}
                        alt={offer.iconAlt}
                        width="28px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="card-body">
                      <h5
                        className="fs-3 mt-1 mb-3 fw-bold"
                        style={{ color: "var(--grey-300)" }}
                      >
                        {offer.heading}
                      </h5>
                      <p className="fs-5" style={{ color: "var(--grey-500)" }}>
                        {offer.para}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>

      {/* how we do it
    @todo 
    designing >engineering> automation > implementation
    1.Strategic Discovery 
    2.Product Designing  [wireframe and ux/ui]
    3.Product Development  [write code and business logic]
    4.Automate Deployment  [testing to deployment includes ci/cd(optional)]
    5.Optimimize Performance [Check performance after deployment and optimize if required]
    .  */}
      <div className="container-fluid py-5 softbg--gradient-light">
        <div className="container py-5">
          <div className="row">
            <h2 className="display-4 mb-4 pb-5 text-center fw-bold underline">
              How We Do It
            </h2>
          </div>
          <div className="row g-5">
            {howWeDo.map((step, index) => (
              <Fade key={step.heading} bottom>
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="card p-4 pb-3 h-100 border-0 shadow services--card">
                    <div
                      style={{ width: "65px", height: "65px" }}
                      className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center bg--gradient-blue"
                    >
                      <img
                        src={step.iconImage}
                        alt={step.iconAlt}
                        width="28px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="card-body">
                      <h5
                        className={`fs-3 mt-1 mb-3 fw-bold step--${index + 1}`}
                      >
                        {step.heading}
                      </h5>
                      <p className="fs-5">{step.para}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>

      {/* our tech optional */}

      {/* Why choose Appque */}
      <div className="container-fluid pt-5 hide">
        <div className="container pt-5">
          <div className="row g-5">
            <h2 className="display-4 mb-5 pb-5 px-5 text-center fw-bold underline">
              AppQue Advantages
            </h2>
          </div>

          <div className="row g-5">
            <div className="col-12 col-xl-6 ">
              <span className="text--primary fw-bold">
                <small>Ecommerce Website Development</small>
              </span>
              <Fade bottom>
                <h2 className="display-6 fw-bold mt-3">
                  eCommerce development from scratch
                </h2>
              </Fade>
              <Fade bottom>
                <p className="fs-5 mt-3">
                  Right from suggesting you the right platform and technology
                  stacks to providing highly qualified eCommerce developers,
                  Simform helps you build a robust online store that is
                  flexible, scalable, and easy to manage.
                </p>
              </Fade>
            </div>

            <div className="col-12 col-xl-6 ">
              <Fade bottom>
                <ul>
                  <li className="d-flex align-items-start mb-3">
                    <span className="text--primary fs-4">
                      <i className="bi bi-check2-circle"></i>
                    </span>
                    <span className="fs-5 font--weight-500 ">
                      &nbsp; Always growing and committed to quality Always
                      growing and committed to quality
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="text--primary fs-4">
                      <i className="bi bi-check2-circle"></i>
                    </span>
                    <span className="fs-5 font--weight-500 ">
                      &nbsp; Always growing and committed to quality
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="text--primary fs-4">
                      <i className="bi bi-check2-circle"></i>
                    </span>
                    <span className="fs-5 font--weight-500 ">
                      &nbsp; Always growing and committed to quality
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="text--primary fs-4">
                      <i className="bi bi-check2-circle"></i>
                    </span>
                    <span className="fs-5 font--weight-500 ">
                      &nbsp; Always growing and committed to quality
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="text--primary fs-4">
                      <i className="bi bi-check2-circle"></i>
                    </span>
                    <span className="fs-5 font--weight-500 ">
                      &nbsp; Always growing and committed to quality
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="text--primary fs-4">
                      <i className="bi bi-check2-circle"></i>
                    </span>
                    <span className="fs-5 font--weight-500 ">
                      &nbsp; Always growing and committed to quality
                    </span>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <ContactCall />
    </Layout>
  );
}
