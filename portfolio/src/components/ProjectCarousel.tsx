import lmsLogo from "../assets/Project/Java/LMS/Screenshot 2024-05-06 at 20.11.20.png";
import eventzLogo from "../assets/Project/Kotlin/Screenshot 2024-05-16 at 07.11.46.png";
import flutterLogo from "../assets/Project/Flutter/Screenshot 2024-06-13 at 17.26.27.png";
import "../styles/LandingCarousel.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(GSAPScrollTrigger);
const ProjectCarousel = () => {
  const navigate = useNavigate();

  const handleProjectShortcut = () => {
    navigate("/projects");
  };

  useGSAP(() => {
    gsap.fromTo(
      ".para",
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".para",
          start: "top 90%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 20%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".p_para",
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".p_para",
          start: "top 90%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 20%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".project_one",
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".project_one",
          start: "top 90%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 20%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".project_two",
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".project_two",
          start: "top 90%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 20%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".project_two",
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".project_two",
          start: "top 90%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 20%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );
  });

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
              <div className="col ">
                <div className="container ">
                  <div className="row para">
                    <h1
                      className="h1 text-start bg-transparent p-2"
                      style={{
                        marginBottom: "30px",
                        borderRadius: "20px",
                        borderWidth: "1px",
                        borderColor: "rgb(59, 30, 139)",
                        color: "rgb(59, 30, 139)",
                      }}
                    >
                      Projects
                    </h1>
                  </div>
                  <p className="lead text-start text-white p_para">
                    As a Full Stack Developer, I have undertaken several
                    self-directed projects that showcase my ability to develop
                    and manage both front-end and back-end systems. These
                    projects span various technologies and platforms,
                    demonstrating my versatility and commitment to continuous
                    learning and improvement in software development.
                  </p>
                  <hr />
                  <br />
                  <div className="container-fluid project_one">
                    <h3>Event Management Mobile App (Kotlin/Java)</h3>
                    <ul>
                      <li>
                        <strong>Features:</strong>{" "}
                        <p>
                          Implemented ticket purchasing, attendee tracking, and
                          event modification.
                        </p>
                      </li>
                      <li>
                        <strong>Backend:</strong>{" "}
                        <p>
                          Used PHP for server requests and JavaScript (CommonJS)
                          for backend development.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="container-fluid project_two">
                    <h3>Library Management System (Java/JavaFX)</h3>
                    <ul>
                      <li>
                        <strong>UI Development:</strong>
                        <p>Created with JavaFX.</p>
                      </li>
                      <li>
                        <strong>Database Integration:</strong>
                        <p>Used SQLConnector for Azure-hosted database.</p>
                      </li>
                      <li>
                        <strong>Interfaces:</strong>{" "}
                        <p>Designed for both admins and users.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="container-fluid">
                  <button
                    className="seemorebtn m-4 text-center"
                    style={{ width: "85%", justifyContent: "center" }}
                    type="submit"
                    onClick={handleProjectShortcut}
                  >
                    See more
                  </button>
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
