import React from "react";

// style {cardBg,cardShadow,titleColor, paraColor}
// this card is for home page ONLY
export default function Card({ title, para, img, imgAlt }) {
  return (
    <div className="card p-4 pb-3 h-100 border-0 shadow services--card">
      <div
        style={{ width: "75px", height: "75px" }}
        className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center bg--gradient-blue"
      >
        <img src={img} alt={imgAlt} width="28px" className="img-fluid" />
      </div>
      <div className="card-body">
        <h5 className="display-6 mt-1 mb-3 fw-bold heading--light">{title}</h5>
        <p className="fs-4 text--light">
          {para}
        </p>
      </div>
    </div>
  );
}
