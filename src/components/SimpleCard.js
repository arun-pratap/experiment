import React from "react";

export default function Card({ title, para, img, imgAlt }) {
  return (
    <div className="card p-4 pb-3 h-100 border-0 shadow services--card">
      <div
        style={{ width: "68px", height: "68px" }}
        className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center bg--gradient-blue"
      >
        <img src={img} alt={imgAlt} width="28px" className="img-fluid" />
      </div>
      <div className="card-body">
        <h5 className="fs-2 mt-1 mb-3 fw--700">{title}</h5>
        <p className="fs-5 text--dark">
          {para}
        </p>
      </div>
    </div>
  );
}
