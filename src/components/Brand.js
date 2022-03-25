import doctors from "../assets/doctors.png";

import bloodPressure from "../assets/bloodPressure.jpg";
import logo from "../assets/logo.png";

export default function Brand({ brandPopulation }) {
  const brandPopulation = [];
  return (
    <div
      className="container-fluid pt-5 pb-5"
      style={{ backgroundColor: "#0e408d10" }}
    >
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 text-center">
            <h1 className="mb-4 text-start">
              <strong>समस्या के हिसाब से दवाइयां ऑर्डर करें </strong>
            </h1>
          </div>

          {brandPopulation.map((category) => (
            <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
              <div
                className="card shadow p-3 bg-body"
                style={{
                  width: "95%",
                  border: "none",
                  margin: "auto"
                }}
              >
                <img src={medicine} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4>
                    <strong>{category.heading}</strong>
                  </h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href={whatsAppURL}
                    className="btn btn-primary btn-lg shadow"
                    style={{
                      backgroundColor: "#0e8d6a",
                      borderColor: "#0e8d6a"
                    }}
                  >
                    <strong>अभी ऑर्डर करें</strong>
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/*  */}
        </div>
      </div>
    </div>
  );
}
