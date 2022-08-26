import React from "react";
import contactImage from "../svgs/undraw-contact.svg";
import Zoom from "react-reveal/Zoom";

export default function ContactForm() {
  return (
    <div className="container-fluid py-5 softbg--gradient-dark">
      <Zoom>
        <div className="container pt-5 my-5 rounded shadow-lg softbg--gradient-light">
          {/* Contact Form */}
          <div className="row justify-content-center align-items-start  g-5 pt-2 pb-5 ">
            <div className=" col-6 col-xl-5 d-none d-lg-block">
              <h2 className="display-4 mb-4 text-center underline fw--700">
                We Can Help You.
              </h2>
              <img src={contactImage} className="img-fluid" alt="contact" />
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="row g-2">
                <h2 className="display-4 mb-4 text-center underline d-lg-none fw--700">
                  We Can Help You.
                </h2>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label visually-hidden">Name:</label>
                    <input
                      className="form-control fs-5"
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label visually-hidden">Email:</label>
                    <input
                      className="form-control fs-5"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label visually-hidden">
                      Mobile Number:
                    </label>
                    <input
                      className="form-control fs-5"
                      name="phone"
                      type="phone"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label visually-hidden">
                      Select Budget:
                    </label>
                    <select className="form-select fs-5">
                      <option defaultValue="none">Select Budget</option>
                      <option className="font--weight-500">
                        less than ₹ 10000
                      </option>
                      <option className="font--weight-500">
                        ₹ 10000 - ₹ 15000
                      </option>
                      <option className="font--weight-500">
                        ₹ 15000 - ₹ 30000
                      </option>
                      <option className="font--weight-500">
                        ₹ 30000 - ₹ 50000
                      </option>
                      <option className="font--weight-500">&gt; ₹ 50000</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label visually-hidden">
                      Messages:
                    </label>
                    <textarea
                      className="form-control fs-5"
                      name="messages"
                      type="text"
                      placeholder="Please Share Your Business Requirements"
                      rows={4}
                      required
                    />
                  </div>
                </div>

                <div className="col-12 text-end">
                  <button
                    className="d-inline-flex align-items-center btn btn-primary text-white mt-2 px-4 fs-6 fw--600 text-uppercase"
                    style={{ paddingTop: "0.60rem", paddingBottom: "0.75rem" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="container-fluid px-5">
          {/* Contact Call */}
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-12 text-center">
              <h2 className="fw-bold display-5">
                Would You Prefer To Talk To Someone ?
              </h2>
            </div>
            <div className="col-12 text-center mt-5">
              <Zoom>
                <a
                  href="tel:7838200710"
                  className=" btn btn-lg py-3 px-3 bg--primary text-light"
                >
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="bi bi-telephone-fill display-6 pe-2"></i>
                    </span>
                    <div className="text-center">
                      <span className="fs-6 d-block fw-bold">
                        SPEAK WITH US:
                      </span>
                      <span className="fs-5 fw-bold d-block">783-820-0710</span>
                    </div>
                  </div>
                </a>
              </Zoom>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
