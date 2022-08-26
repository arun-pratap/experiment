import React from "react";

export default function Card({ title, para, img, imgAlt, link }) {
    return (
        <div className="card p-3 h-100 border-0 shadow cardbg--light bg-white">
            <div
                style={{ width: "65px", height: "65px" }}
                className="d-flex ms-3 mt-3 p-3 rounded-circle justify-content-center iconbg--gradient-light"
            >
                <img
                    src={img}
                    alt={imgAlt}
                    width="28px"
                    className="img-fluid"
                />
            </div>
            <div className="card-body">
                <h5 className="fs-1 mt-1 mb-2 fw--700">
                    {title}
                </h5>
                <p className="fs-5 text--dark">{para}</p>
                <a
                    href={`/${link}`}
                    className="d-inline-flex align-items-center btn btn-primary text-white mt-2 px-4 fs-6 fw--600 text-uppercase"
                    style={{ paddingTop: "0.60rem", paddingBottom: "0.75rem" }}
                >
                    Learn More &nbsp;
                    <i className="bi bi-arrow-right fs-6"></i>
                </a>
            </div>
        </div>

    )
}