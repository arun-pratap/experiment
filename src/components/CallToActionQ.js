import React from "react";

export default function CallToActionQ({ btnText, btnSubTxt, others }) {
  return (
    <button
      {...others}
      className="d-inline-flex align-items-center btn btn-lg text-white mt-2 px-4 fs-5 rounded-3"
      style={{
        paddingTop: "0.60rem",
        paddingBottom: "0.75rem",
        background: "#af30e8",
        background: "linear-gradient(37deg, #e8304f, #eb6547)",
        background: "linear-gradient(164deg, #4f15ac, #e61997)",
        fontWeight: "500",
      }}
    >
      <p className="mb-0">
        {btnText}
        <small className="fs-5">{btnSubTxt}</small>
      </p>
      <i className="bi bi-chevron-right fs-4"></i>
    </button>
  );
}
