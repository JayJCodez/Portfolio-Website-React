import lmsLogo from "../assets/Project/Java/LMS/Screenshot 2024-05-06 at 20.11.20.png";
import eventzLogo from "../assets/Project/Kotlin/Screenshot 2024-05-16 at 07.11.46.png";
import flutterLogo from "../assets/Project/Flutter/Screenshot 2024-06-13 at 17.26.27.png";
import "../styles/LandingCarousel.css";

const ProjectCarousel = () => {
  return (
    <>
      <div
        className="container-fluid p-3 d-flex justify-content-center text-white"
        style={{
          borderRadius: "10px",
          minHeight: "300px",
          padding: "0px",
        }}
      >
        <div className="row w-100">
          <div className="col-md-6 d-flex align-items-start">
            <div className="row">
              <div className="col">
                <div className="container">
                  <h1
                    className="h1 text-start bg-dark"
                    style={{ marginBottom: "30px" }}
                  >
                    Projects
                  </h1>
                  <p className="lead text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque elementum turpis ac quam gravida, in scelerisque
                    sapien scelerisque. Maecenas ut libero ac est faucibus
                    feugiat. Nulla facilisi. Cras egestas elit at risus
                    tincidunt,
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <h1
                        className="h4 text-start"
                        style={{ marginBottom: "30px" }}
                      >
                        Projects
                      </h1>
                      <p>
                        ac vestibulum odio consequat. Integer vehicula varius
                        quam, sit amet gravida ex vulputate id. Curabitur
                        accumsan nibh sed libero congue, nec egestas massa
                      </p>
                    </div>

                    <div
                      className="container"
                      style={{ minHeight: "280px", width: "10px" }}
                    >
                      <div className="vr" style={{ height: "250px" }}></div>
                    </div>

                    <div className="col">
                      <h1
                        className="h4 text-start"
                        style={{ marginBottom: "30px" }}
                      >
                        Projects
                      </h1>
                      <p>
                        ac vestibulum odio consequat. Integer vehicula varius
                        quam, sit amet gravida ex vulputate id. Curabitur
                        accumsan nibh sed libero congue, nec egestas massa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={lmsLogo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item ">
                  <img
                    src={eventzLogo}
                    className=""
                    alt="..."
                    style={{ height: "500px" }}
                  />
                </div>
                <div className="carousel-item">
                  <img src={flutterLogo} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
