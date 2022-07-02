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
              <h2 className="display-4 mb-5 fw-bold text-center">
                How Can We Help You?
              </h2>
              <img src={contactImage} className="img-fluid" alt="contact" />
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="row g-2">
                <h2 className="display-4 fw-bold text-center d-lg-none mb-4">
                  How Can We Help You?
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
                        ₹10000-₹15000
                      </option>
                      <option className="font--weight-500">
                        ₹15000-₹30000
                      </option>
                      <option className="font--weight-500">
                        ₹30000-₹50000
                      </option>
                      <option className="font--weight-500">&gt;₹50000</option>
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
                    className="btn btn-lg fs-5 text-white bg--primary font--weight-500"
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
              <h2 className="fw-bold display-4 heading--light">
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
                      <span className="fs-6 d-block">SPEAK WITH US:</span>
                      <span className="fs-3 fw-bold d-block">783-820-0710</span>
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
