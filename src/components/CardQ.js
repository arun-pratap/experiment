import React from "react";

// style {cardBg,cardShadow,titleColor, paraColor}
// this card is for home page ONLY
export default function CardQ({ title, para, img, imgAlt }) {
  return (
    <div className="card p-4 h-100 border-0 shadow-lg rounded-3 services--card" style={{backgroundColor:"#ffffff0f !important"}}>
      <div
        className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center"
        style={{
          width: "75px",
          height: "75px",
          background: "linear-gradient(100deg, #c3a4f488, #5916c599)",
          background: "#7a37e699",
        }}
      >
        <img src={img} alt={imgAlt} width="50px" className="img-fluid" />
      </div>
      <div className="card-body">
        <h5
          className="display-6 mt-1 mb-3 heading--light"
          style={{ fontWeight: "500" }}
        >
          {title}
        </h5>
        <p className="fs-5 text--light">{para}</p>
      </div>
    </div>
  );
}
