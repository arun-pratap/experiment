import React from "react";
import Zoom from "react-reveal/Zoom";

export default function ContactCall() {
  return (
    <div
      className="container-fluid px-5"
      style={{
        backgroundColor: "rgba(1, 8, 25, 1)",
      }}
    >
      <div className="container text-white rounded pb-1">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-12 text-center">
            <h2 className="fw-bold display-4">
              Would you prefer to talk to someone ?
            </h2>
          </div>
          <div className="col-12 text-center mt-5">
            <Zoom>
              <a
                href="tel:7838200710"
                className=" btn btn-lg py-3 bg--primary text-light"
              >
                <div className="d-flex align-items-center">
                  <span>
                    <i className="bi bi-telephone-fill display-5 pe-3"></i>
                  </span>
                  <div className="text-start">
                    <span className="fs-6 d-block">
                      SPEAK WITH US:
                    </span>
                    <span className="fs-3 fw-bold d-block">783-820-0710</span>
                  </div>
                </div>
              </a>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}
