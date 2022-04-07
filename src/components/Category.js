import { category } from "../database/products";

export default function Category({ handleClick }) {
  return (
    <div
      id="problem"
      className="container-fluid pt-5 pb-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 text-center">
            <h1 className="mb-4 mt-4 text-start">
              <strong>समस्या के हिसाब से दवाइयां ऑर्डर करें </strong>
            </h1>
          </div>

          {category.data.map((category) => (
            <div
              key={category.category_id}
              className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4"
            >
                                <a
                    onClick={() => handleClick(category.category_name)}
                    href={`#${category.category_name}`} style={{textDecoration:"none",color:"#000"}}>
              <div
                className="card shadow-sm h-100"
                style={{
                  // backgroundColor:"#9bffc7",
                  backgroundColor: "#ffffff",
                  backgroundImage:
                    "linear-gradient(0deg, #ffffff 0%, #d7e1ec 74%)",
                  width: "95%",
                  border: "none",
                  margin: "auto",
                }}
              >
                <img
                  style={{ margin: "auto" }}
                  src={require(`../assets/categories/${category.image}`)}
                  className="card-img-top pt-4 w-25"
                  alt="..."
                />
                <div className="card-body">
                  <h5>
                    <strong>{category.heading}</strong>
                  </h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => handleClick(category.category_name)}                   
                    className="btn shadow-lg px-4 py-2 mb-2 secondary-button"
                  >
                    <strong>अभी ऑर्डर करें</strong>
                  </button>
                </div>
              </div>
              </a>
            </div>
          ))}
          <div
            key={category.category_id}
            className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4"
          >
            <div
              className="card shadow-sm h-100"
              style={{
                // backgroundColor:"#9bffc7",
                backgroundColor: "#ffffff",
                backgroundImage:
                  "linear-gradient(0deg, #ffffff 0%, #d7e1ec 74%)",
                width: "95%",
                border: "none",
                margin: "auto",
              }}
            >
              <img
                style={{ margin: "auto" }}
                src={require(`../assets/categories/apparatus.png`)}
                className="card-img-top pt-4 w-25"
                alt="..."
              />
              <div className="card-body">
                <h5>
                  <strong>मेडिकल उपकरण</strong>
                </h5>
                <p className="card-text"></p>
                <a
                  href={`//api.whatsapp.com/send/?phone=+919193497332&text=मेडिकल उपकरण का नाम बताएं`}
                  className="btn btn-primary shadow-lg px-4 py-2 mb-2 secondary-button"
                >
                  <strong>अभी ऑर्डर करें</strong>
                </a>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
