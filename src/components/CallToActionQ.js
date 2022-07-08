import React from "react";

export default function CallToActionQ({ btnText, btnSubTxt, others }) {
  return (
    <button
      {...others}
      className="d-inline-flex align-items-center btn btn-lg text-white mt-2 px-4 fs-4 rounded-2"
      style={{
        boxShadow: "0 0.25rem 2rem #e6428c8c !important",
        paddingTop: "1.1rem",
        paddingBottom: "1.25rem",
        background: "#af30e8",
        background: "linear-gradient(37deg, #e8304f, #eb6547)",
        background: "linear-gradient(164deg, #4f15ac, #e61997)",
        background:
          "linear-gradient(330deg, hsl(263deg 78% 55%), hsl(336deg 80% 60%))",
        // background:
        //   "linear-gradient(330deg, hsl(263deg 78% 58%), hsl(152deg 80% 40%))",
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

// 0 0.25rem 2rem hwb(333deg 26% 10% / 55%) !important
