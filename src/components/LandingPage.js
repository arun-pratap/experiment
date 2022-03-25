import doctors from "../assets/doctors.png";
import medicine from "../assets/medicine.png";
import logo from "../assets/logo.png";

export default function Landingpage() {
  const whatsAppURL =
    "//api.whatsapp.com/send/?phone=+918505903150&text=दवाई या पर्चे की फोटो खींच कर भेजें";
  return (
    <>
      {/* Logo */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <img src={logo} alt="25mg" height="100px" />
          </div>
        </div>
      </div>

      {/* cover Page*/}
      <div className="container mb-5">
        <div className="row align-items-center text-sm-left text-lg-start">
          <div className="col-sm-12 col-lg-6">
            <h1 className="mb-3 mt-3">
              <strong>
                डायबिटीज, नींद, घबराहट और ब्लड प्रेशर की दवाइयां सीधे आपके घर
              </strong>
            </h1>
            <a
              href={whatsAppURL}
              style={{ backgroundColor: "#0e8d6a", borderColor: "#0e8d6a" }}
              className="btn btn-primary btn-lg shadow mb-5"
            >
              <strong>अभी WhatsApp पर संपर्क करें</strong>
            </a>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div>
              <img src={doctors} alt="doctor" width="100%" />
            </div>
          </div>
        </div>
      </div>

      {/* Medicine Category Section */}
      <div
        className="container-fluid pt-5 pb-5"
        style={{ backgroundColor: "#0e408d10" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="mt-4 mb-5">
                <strong>समस्या के हिसाब से दवाइयां ऑर्डर करें </strong>
              </h1>
            </div>

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
                    <strong>डायबिटीज की दवाइयां</strong>
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
                    <strong>नींद की दवाइयां</strong>
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
                    <strong> ब्लड प्रेशर की दवाइयां</strong>
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
                    <strong>घबराहट की दवाइयां</strong>
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
          </div>
        </div>
      </div>
    </>
  );
}
