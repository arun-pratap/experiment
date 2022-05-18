import React from "react";

export default function CallToAction({ btnText, others }) {
  return (
    <button
      {...others}
      className="d-inline-flex align-items-center btn btn-lg text-white mt-2 px-4 bg--primary"
      style={{ paddingTop: "0.65rem", paddingBottom: "0.65rem" }}
    >
      {btnText}
      <i class="bi bi-arrow-right fs-4"></i>
    </button>
  );
}
