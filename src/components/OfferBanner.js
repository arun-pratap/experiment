import banner from "../assets/banner-white.png";

export default function OfferBanner() {
  const whatsAppURL =
    "//api.whatsapp.com/send/?phone=+919193497332&text=दवाई या पर्चे की फोटो खींच कर भेजें";

  return (
    <div className="container-fluid px-0">
      <a href={whatsAppURL}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
