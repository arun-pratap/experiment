// import medicine from "../assets/white-bg.jpg";


export default function Products({ filteredProducts,categoryName }) {
  const cart = {
    disabledAddToCart: false,
    itemInCart: [],
  };

  return (
    <div
      className="container-fluid pt-5 px-0"
      style={{ position: "relative",backgroundColor:"#0e8d6a21" }}
    >
      <div className="container mt-4">
        
        <div id={categoryName} className="row justify-content-start">
        <div className="col-12 text-center">
            <h1 className="mb-4 text-start">
              <strong>आपके लिए दवाइयां</strong>
            </h1>
          </div>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-sm-6 col-md-4 col-xl-3 px-0 g-3"
            >
              <div
                className="card px-2 py-4 shadow h-100"
                style={{
                  width: "95%",
                  border: "none",
                  margin: "auto",
                }}
              >
                <a
                  href={`//api.whatsapp.com/send/?phone=+918505903150&text=मुझे ये वाली दवाई चाहिए => ${product.name}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div className="row g-0 align-items-center">
                    <div
                      className="col col-sm-12 align-self-center"
                      style={{
                        position: "relative",
                        height: "180px",
                        width: "100%",
                      }}
                    >
                      <img
                        src={require(`../assets/medicines/${product.images}`)}
                        alt="..."
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          width: "auto",
                          height: "auto",
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          margin: "auto",
                        }}
                      />
                      <span
                        className="px-2 py-1"
                        style={{
                          position: "absolute",
                          backgroundColor: "#0e8d6a22",
                          color: "#00000088",
                          fontSize: "8px",
                          left: "-8px",
                          top: "-25px",
                          display: "none",
                        }}
                      >
                        <strong>Prescription Required</strong>
                      </span>
                    </div>
                    <div className="col-8 col-sm-12">
                      <div className="card-body mx-2">
                        <h6 className="mb-0" style={{ color: "#555555" }}>
                          {product.name}
                        </h6>
                        <span style={{ color: "#555555ee", fontSize: "13px" }}>
                          {/* NOT IN USE */}
                        </span>
                        <p
                          className="mb-2 mt-2"
                          style={{ fontSize: "14px", color: "#a33419" }}
                        >
                          <span style={{ fontSize: "20px", color: "#454545" }}>
                            Price: <strong>₹{product.actual_price}</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                {/* handleCart from Here */}
                <div className="row g-0 px-3">
                  <div className="mb-5 pb-2" style={{ position: "relative" }}>
                    <a
                      href={`//api.whatsapp.com/send/?phone=+918505903150&text=मुझे ये वाली दवाई चाहिए => ${product.name}`}
                      className="btn"
                      style={{
                        // #45edb5,#15d19c#5defc5
                        //green shade #0dfd9e
                        // complement color #cd3951,#d8586c

                        position: "absolute",
                        margin: "auto",
                        width: "100%",
                        color: "#fff",
                      }}
                    >
                      {/* AddToCart Button */}
                      <div
                        className="row px-0 justify-content-end"
                        style={{
                          display: `${
                            cart.disabledAddToCart === true ? "none" : ""
                          }`,
                        }}
                      >
                        <div className="col-12 px-0 text-start">
                          <span
                            className="btn btn-lg py-2"
                            style={{
                              borderWidth: "2px",
                              backgroundColor: "#15d19c",
                              borderColor: "#15d19c",
                              color: "#000",
                              fontSize: "16px",
                              fontWeight: "500",
                              width: "100%",
                            }}
                          >
                            <strong> अभी ऑर्डर करें</strong>
                          </span>
                        </div>
                      </div>

                      {/* plus, minus and amount */}
                      <div
                        className="row px-0 justify-content-end"
                        style={{
                          display: `${
                            cart.disabledAddToCart === true ? "" : "none"
                          }`,
                        }}
                      >
                        <div className="col-2 px-0 text-start">
                          <span
                            style={{
                              display: "inline-block",
                              textAlign: "center",
                              backgroundColor: "#15d19c",
                              color: "#000",
                            }}
                            className="px-3 py-1 rounded cart-border"
                          >
                            <strong>-</strong>
                          </span>
                        </div>
                        <div className="col-3 px-0 text-center">
                          <span
                            style={{
                              display: "inline-block",
                              textAlign: "center",
                              color: "#000",
                            }}
                            className="px-2 py-1 rounded"
                          >
                            <strong>1</strong>
                          </span>
                        </div>
                        <div className="col-2 px-0 text-end">
                          <span
                            style={{
                              display: "inline-block",
                              textAlign: "center",
                              backgroundColor: "#15d19c",
                              color: "#000",
                            }}
                            className="px-3 py-1 rounded cart-border"
                          >
                            <strong>+</strong>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sticky Filter at Bottom */}
      <div
        className="container my-0"
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: "1020",
        }}
      >
        <div className="row justify-content-end align-items-center">
          <div
            className="col-12 text-center"
            style={{
              borderTop: "1px solid #cfcfcf",
              backgroundColor: "#666666dd",
             }}
          >
            <button className="btn py-3" style={{
              color:"#ffffff"
            }}>
              <h5 className="my-0" >Apply Filters</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
