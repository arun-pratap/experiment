import banner from "../assets/banner1.png";

export default function OfferBanner() {
  const whatsAppURL =
    "//api.whatsapp.com/send/?phone=+918505903150&text=दवाई या पर्चे की फोटो खींच कर भेजें";

  return (
    <div className="container-fluid px-0">
      <a href={whatsAppURL}>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={banner} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
