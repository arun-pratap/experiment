import React from "react";
import image from "../images/Scalable-Frontend-Development-Services.svg";

const headingStyles = {
  maxWidth: "800px",
};
const paragraphStyles = {
  maxWidth: "800px",
};
const btnStyles = {};
export function CoverPageVariant1({
  heading,
  helper,
  inlineSpan,
  paragraph,
  cta,
}) {
  return (
    <div className="bg-white">
      <h1 className="py-2 mx-auto fw-bold">
        {heading}&nbsp;
        <span className="gradient--heading-blue">
          {helper}
          <br />
          {inlineSpan}
        </span>
      </h1>
      <p className="mb-4 mx-auto fs-5">
        {paragraph}
      </p>
      <button
        style={btnStyles}
        className="btn btn-lg px-3 py-2 mb-4 text-capitalize font--weight-500 bg--primary text--white"
      >
        {cta}
      </button>

      {/* <div className="text-center pt-2">
        <img src={image} className="img-fluid" alt="..." />
      </div> */}
    </div>
  );
}

export function CoverPageVariant2() {
  return <div>CoverPage</div>;
}
