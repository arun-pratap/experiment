import React from "react";

export default function CallToAction({ btnText, others }) {
  return (
    <button
      {...others}
      className="d-inline-flex align-items-center btn btn-lg text-white mt-2 px-4 bg--primary fs-4"
      style={{ paddingTop: "0.60rem", paddingBottom: "0.75rem" }}
    >
      {btnText}
      <i className="bi bi-arrow-right fs-4"></i>
    </button>
  );
}
