import { products } from "./../database/products";
import medicine from "../assets/medicine.png";

export default function Products() {
  const whatsAppURL =
    "//api.whatsapp.com/send/?phone=+918505903150&text=दवाई या पर्चे की फोटो खींच कर भेजें";

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center align-items-start">
          {products.data.map((product) => (
            <div className="col-sm-6 col-md-4 col-xl-3 mb-4 justify-content-around">
              <a href={`/${product.name}`} style={{ textDecoration: "none" }}>
                <div
                  className="card pb-4 px-3 shadow-sm"
                  style={{
                    width: "95%",
                    border: "none",
                    margin: "auto",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      height: "165px",
                      width: "100%",
                      position: "relative",
                      margin: "20px auto",
                      marginBottom: "0",
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={medicine}
                      style={{
                        width: "auto",
                        height: "auto",
                        maxHeight: "100%",
                        maxWidth: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        margin: "auto",
                      }}
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h5 style={{ color: "#454545" }}>{product.name}</h5>
                    <div>
                      <p style={{ fontSize: "18px", color: "#a33419" }}>
                        MRP&nbsp;
                        <span style={{ textDecoration: "line-through" }}>
                          ₹{product.actual_price}
                        </span>
                        <br />
                        <span style={{ fontSize: "18px", color: "#454545" }}>
                          <strong> ₹ {product.discounted_price}</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                  <a
                    href={whatsAppURL}
                    className="btn btn-primary btn py-2"
                    style={{
                      margin: "auto",
                      width: "95%",
                      backgroundColor: "transparent",
                      borderColor: "#fa50a1",
                      color: "#fa50a1",
                    }}
                  >
                    <strong>अभी ऑर्डर करें</strong>
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
