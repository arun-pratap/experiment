import React from "react";

export default function Card({ title, para, img, imgAlt, step }) {
    return (
        <div className="card p-4 h-100 border-0 shadow cardbg--light bg-white">
            <div
                style={{ width: "65px", height: "65px" }}
                className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center bg--gradient-blue"
            >
                <img
                    src={img}
                    alt={imgAlt}
                    width="25px"
                    className="img-fluid"
                />
            </div>
            <div className="card-body">
                <h5
                    className={`fs-1 mt-1 mb-3 fw--700 step--${step + 1
                        }`}
                >
                    {title}
                </h5>
                <p className="fs-5 text--dark">{para}</p>
            </div>
        </div>
    );
}