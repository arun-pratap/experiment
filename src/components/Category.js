import diabetes from "../assets/diabetes.jpg";
import bloodPressure from "../assets/blood-pressure.jpg";
import nervousness from "../assets/nervousness.jpg";
import medicalDevices from "../assets/medical-devices.jpg";

export default function Category({ categoryPopulation }) {
  const whatsAppURL =
    "//api.whatsapp.com/send/?phone=+918505903150&text=दवाई या पर्चे की फोटो खींच कर भेजें";

  categoryPopulation = [
    {
      category_id: "1",
      heading: "डायबिटीज की दवाइयां",
      image: diabetes,
      imageAlt: "...",
      para: "",
      linkText: "",
      link: ""
    },
    {
      category_id: "2",
      heading: "ब्लड प्रेशर की दवाइयां",
      image: bloodPressure
    },
    {
      category_id: "3",
      heading: "घबराहट की दवाइयां",
      image: nervousness
    },
    {
      category_id: "4",
      heading: "मेडिकल उपकरण",
      image:medicalDevices
    }
  ];
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

          {categoryPopulation.map((category) => (
            <div key={category.category_id} className="col-sm-12 col-md-6 col-xl-3 mb-4">
              <div
                className="card shadow bg-body"
                style={{
                  width: "95%",
                  border: "none",
                  margin: "auto"
                }}
              >
                <img src={category.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>
                    <strong>{category.heading}</strong>
                  </h4>
                  <p className="card-text">
                  
                  </p>
                  <a
                    href={whatsAppURL}
                    className="btn btn-primary btn shadow px-4 py-2"
                    style={{
                      backgroundColor: "#15d19c",
                      borderColor: "#15d19c",
                      color:"#000"
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
