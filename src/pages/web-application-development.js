import * as React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import ContactForm from "../components/ContactForm";

import imageSecondary from "../images/revenue-secondary.svg";
import chat from "../svgs/chat.svg";
import ui from "../svgs/ui.svg";
import cart from "../svgs/cart.svg";
import cms from "../svgs/cms.svg";
import integration from "../svgs/integration.svg";
import erp from "../svgs/erp.svg";

import growBusiness from "../svgs/undraw-grow.svg";

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
import CallToAction from "./../components/CallToAction";
import StepCard from "../components/StepCard";
import SimpleCard from "../components/SimpleCard"

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
    heading: "Web Development From Scratch",
    para: " Help you to choose the right platform and tenchnolgy stacks along with qualified and expert developers. We will help you to build a fast and scalable frontend that looks great on any device (mobile, desktop, and iPad).",
    imagePicture: fromScratch,
    imageAlt: "Web Development From Scratch",
    order: "0",
  },
  {
    heading: "Headless CMS Development",
    para: "Scale your ecommerce website so you can reach your customer effortlessly. We will make sure that your business works without any problems and deliver great customer experiences.",
    imagePicture: websiteLaunch,
    imageAlt: "Headless CMS Development",
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
    heading: "Website Strategy and Consultation",
    // Our team will help your business to
    para: "Increase revenue and get more traffic with strategic planning that matches your customer expectations and your business requirements",
  },
  {
    iconImage: ui,
    iconAlt: "Website Design and Development",
    heading: "Website Design and Development",
    para: "Drive more conversions and establish a unique brand voice with conversion-focused, visually stunning templates.",
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

export default function WebApplicationDevelopment() {
  return (
    <Layout>
      {/* Cover Page */}
      <div className="container-fluid py-5 bg--secondary-dark text-white">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center g-5">
            <div className="col-12 col-xl-7">
              <Fade bottom>
                <h1 className="display-1 mt-3 fw--700 text-light">
                  Web Application Development Services To&nbsp;
                  <span className="text--primary-gradient">
                    Grow Your Business
                  </span>
                </h1>
              </Fade>
              <Fade bottom>
                <p className="fs-5 mt-3 text-light">
                  Helping businesses to build secure, fast and flexible
                  e-commerce store to drive more traffic and revenue
                </p>
                <CallToAction btnText="Request a proposal&nbsp;&nbsp;" />
              </Fade>
            </div>
            <div className="col-12 col-md-8 col-xl-5 mx-auto text-center">
              <Zoom>
                <img src={growBusiness} className="img-fluid" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>

      {/* How appQue can help you */}
      <div className="container-fluid py-5 softbg--gradient-light">
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            <h2 className="display-2 mb-4 pb-5 text-center underline fw--700">
              We Can Help You
            </h2>
          </div>
          {canHelp.map((help, index) => (
            <div
              key={index}
              className="row justify-content-between align-items-center g-5 mb-5 pb-5"
            >
              <div className={`col-12 col-lg-7 col-xl-6 order-lg-${help.order}`}>
                <span className="text--primary fw-bold">
                  <small>Headless Ecommerce Development</small>
                </span>
                <Fade bottom>
                  <h4 className="display-5 fw-bold mt-3 text-dark">{help.heading}</h4>
                </Fade>
                <Fade bottom>
                  <p className="fs-5 mt-3">{help.para}</p>
                </Fade>
              </div>
              <div className="col-12 col-lg-5 col-xl-5 text-center position-relative">
                <Zoom>
                  <img src={help.imagePicture} className="img-fluid p-4" />
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
            <h2 className="display-2 mb-4 pb-5 text-center underline fw--700">
              Our Offerings
            </h2>
          </div>
          <div className="row g-5">
            {offers.map((offer) => (
              <Fade key={offer.heading} bottom>
                <div className="col-12 col-md-6 col-xl-4">
                  <SimpleCard title={offer.heading}
                    para={offer.para}
                    img={offer.iconImage}
                    imgAlt={offer.iconAlt} />
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
            <h2 className="display-2 mb-4 pb-5 text-center underline fw--700">
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

      {/* our tech optional */}

      {/* Why choose Appque */}

      <ContactForm />
    </Layout>
  );
}
