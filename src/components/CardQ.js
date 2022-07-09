import React from "react";

// style {cardBg,cardShadow,titleColor, paraColor}
// this card is for home page ONLY
export default function CardQ(props) {
  const { title, para, img, imgAlt, cardBgColor, headingColor, txtColor } =
    props;
  return (
    <div
      className="p-4 h-100 border-0 shadow-lg rounded-3 services--card"
      style={{ backgroundColor: `${cardBgColor}` }}
    >
      <div
        className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center"
        style={{
          width: "60px",
          height: "60px",
          background: "linear-gradient(100deg, #c3a4f488, #5916c599)",
          background: "#7a37e699",
        }}
      >
        <img src={img} alt={imgAlt} width="40px" className="img-fluid" />
      </div>
      <div className="card-body">
        <h5
          className={`fs-2 mt-1 mb-3 ${headingColor}`}
          style={{ fontWeight: "500" }}
        >
          {title}
        </h5>
        <p className={`fs-5 ${txtColor}`}>{para}</p>
      </div>
    </div>
  );
}
