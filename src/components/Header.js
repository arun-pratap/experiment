import logo from "../assets/logo-green-bg.png";

export default function Header() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#084441" }}>
      <div className="container">
        <div className="row align-items-center justify-content-start py-3">
          {/* logo+navigation */}
          <div className="col-6">
            <div className="row align-items-center justify-content-start">
              <div className="col-1 d-none" style={{ paddingRight: "25px" }}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#fff"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-3 px-4">
                <img src={logo} alt="25mg" height="45px" />
              </div>
            </div>
          </div>

          {/* signin+cart */}
          <div className="col-6 d-none">
            <div className="row align-items-center justify-content-start">
              <div className="col d-none text-end">
                <div>
                  <span>
                    <strong style={{ color: "#fff" }}>Sign In</strong>
                  </span>
                </div>
              </div>
              <div className="col text-end">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#fff"
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* search-box */}
          <div className="col-12 d-none pt-3">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder="Search medicines"
                aria-label="Search-box"
                aria-describedby="addon-wrapping"
              />
              <span className="input-group-text" id="addon-wrapping">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
