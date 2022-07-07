import React from "react";

export default function CallToActionQ({ btnText, others }) {
  return (
    <button
      {...others}
      className="d-inline-flex align-items-center btn btn-lg text-white mt-2 px-4 fs-5"

      style={{ paddingTop: "0.60rem", paddingBottom: "0.75rem", background:"#4f15ac",fontWeight:"500" }}
    >
      {btnText}
      <i className="bi bi-chevron-right fs-5"></i>
    </button>
  );
}
