import { products } from "./../database/products";
import medicine from "../assets/medicine.png";

export default function Products() {
  const whatsAppURL =
    "//api.whatsapp.com/send/?phone=+918505903150&text=दवाई या पर्चे की फोटो खींच कर भेजें";

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {products.data.map((product) => (
            <div className="col-sm-6 col-md-4 col-xl-3 mb-4 justify-content-around">
              <div
                className="card pb-1 bg-body"
                style={{
                  width: "95%",

                  margin: "auto",
                }}
              >
                <img src={medicine} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5>
                    <strong>{product.name}</strong>
                  </h5>
                </div>
              </div>
              <div className="mt-3 mb-5" style={{ width: "95%", margin: "auto" }}>
                <a
                  href={whatsAppURL}
                  className="btn btn-primary btn shadow py-2"
                  style={{
                      width:"100%",
                    //   #e58594,#d8586c,#0e8d6a, #22809f, #991aa2,#005132,#b3e1d3
                    backgroundColor: "#36fdc9",
                    borderColor: "#36fdc9",
                    color:"#000"
                  }}
                >
                  <strong>अभी ऑर्डर करें</strong>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
