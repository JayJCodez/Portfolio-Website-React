import "../styles/Home.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import linkedinLogo from "../assets/linkedin-linked-in-svgrepo-com.svg";
import gmailLogo from "../assets/gmail-svgrepo-com.svg";
import githubLogo from "../assets/github-svgrepo-com.svg";
import myself from "../assets/Project/personal_images/image.png";
import communication from "../assets/Project/icons/icons8-communication-64.png";
import { useEffect, useRef, useState } from "react";
import lmsLogo from "../assets/Project/Java/LMS/Screenshot 2024-05-06 at 20.11.20.png";
// import PopoverImage from "../components/PopoverImage.tsx";
import techimage from "../assets/Project/icons/icons8-tech-64.png";
import multidevice from "../assets/Project/icons/icons8-multiple-devices-96.png";
import developIcon from "../assets/Project/icons/icons8-developer-64.png";
import collaboration from "../assets/Project/icons/icons8-collaboration-64.png";
import assurance from "../assets/Project/icons/icons8-approval-64.png";
import gsap from "gsap";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/all";
import ProjectCarousel from "../components/ProjectCarousel.tsx";

gsap.registerPlugin(GSAPScrollTrigger);
export const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // const [text] = useState<string>("Weelcome to my Portfolio Website");
  // const [typedText, setTypedText] = useState<string>("");

  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     if (index < text.length) {
  //       setTypedText((prevTypedText) => prevTypedText + text.charAt(index));
  //       index++;
  //     } else {
  //       clearInterval(interval);
  //       // setTimeout(() => {
  //       //   setTypedText("");
  //       //   index = 0;
  //       // }, 1000);
  //     }
  //   }, 100); // Change the delay here if needed

  //   return () => clearInterval(interval);
  // }, [text]);

  // const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  const countUpRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px", // margin around the root
      threshold: 1.0, // percentage of the target's visibility needed to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".circular-container",
      {
        duration: 2,
        y: -30,
        rotation: 360,
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.4, // Adjust this value for the delay between each animation
        },
        ease: "power1",
      },
      {
        y: 0,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1",
        stagger: {
          each: 0.4, // Adjust this value for the delay between each animation
        },
      }
    );

    gsap.fromTo(
      ".para",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".para",
          start: "bottom, bottom",
          end: "bottom 20%",
        },
      }
    );

    gsap.fromTo(
      ".about_para",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".about_para",
          start: "top center 20%",
        },
      }
    );

    gsap.fromTo(
      ".contact_para",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".contact_para",
          start: "top center 50%",
        },
      }
    );

    gsap.fromTo(
      ".circle",
      {
        opacity: 0,
      },
      {
        duration: 5,
        opacity: 1,
        rotation: 360,
      }
    );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div
          className="tw-left-0 tw-right-0 tw-bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] tw-bg-[size:24px_24px]"
          style={{}}
        >
          <header className="full-screen-header" style={{ height: "100vh" }}>
            <div
              className="container d-flex justify-content-center align-items-center"
              ref={scrollRef}
            >
              {/* <PopoverImage /> */}
            </div>
            <div className="container-fluid firstsection text-center">
              {/* <h1 className="display-4 heading text-center">{typedText}</h1> */}
              <div className="row">
                <div className="col-md-6 d-flex justify-content-start align-items-center">
                  <div className="container-fluid w-100">
                    <h1 className="name d-flex align-items-center ">Jesse</h1>
                    <br />
                    <h1 className="name d-flex align-items-center">
                      <img src={developIcon} className="developIcon" />
                      kuji
                    </h1>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-start align-items-start">
                  <img
                    src={multidevice}
                    className="circle"
                    style={{ maxWidth: "50%", height: "auto" }}
                  />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <p className="motivation_text">
                        Let's bring your ideas to life on all platfroms
                      </p>
                      <img
                        src={techimage}
                        style={{ maxWidth: "20%", height: "auto" }}
                      />
                      <button
                        type="button"
                        className="btn text-white"
                        style={{
                          background: "rgba(0, 0, 0, 0.5)",
                          borderWidth: "1px",
                          borderColor: "#FFFFFF",
                          width: "50%",
                        }}
                      >
                        Learn More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-2 d-flex justify-content-center align-items-end">
                <div className="col-md-6 d-flex justify-content-start align-items-center">
                  <figure className="container-fluid">
                    <blockquote className="blockquote">
                      <p className="motivation_text">
                        " A well-known quote, contained in a blockquote
                        element."
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </figure>
                  <br />
                </div>
                {/* <div className="col-md-2"></div> */}
                <div className="col-md-4">
                  <div
                    className="container w-70 d-flex justify-content-center align-items-center p-1"
                    style={{ padding: "0px" }}
                  >
                    <img
                      src={myself}
                      alt="Circular Image"
                      className="img-fluid rounded-circle p-2"
                      style={{ width: "100px", height: "auto" }}
                    />
                    <div className="vertical-line"></div>
                    <div className="overlay-text p-3">
                      <p>
                        <strong className="text-white">
                          Software Engineer
                        </strong>
                      </p>
                      <p>
                        <small>Computer Science Graduate</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container justify-content-center ">
              <div className="row p-3">
                <div className="col-md-4 d-flex justify-content-center align-items-center circle_container">
                  <div className="circular-container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <img
                        src={communication}
                        className=""
                        alt="..."
                        style={{ width: "100px", height: "auto" }}
                      />
                      <p className="card-text text-center text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="circular-container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <img
                        src={collaboration}
                        className=""
                        alt="..."
                        style={{ width: "100px", height: "auto" }}
                      />
                      <p className="card-text text-center text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="circular-container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <img
                        src={assurance}
                        className=""
                        alt="..."
                        style={{ width: "100px", height: "auto" }}
                      />
                      <p className="card-text text-center text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* About Section */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(195%_55%_at_34%_10%,#63e_5%,#000_50%)]">
        <div className="tw-left-0 tw-right-0 tw-bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] tw-bg-[size:24px_24px]">
          <section id="about" className="about-section p-5">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div
                  className="container d-flex align-items-start mt-5"
                  style={{
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRadius: "20px",
                  }}
                  ref={scrollRef}
                >
                  <div className="container p-3 h-100 aboutmepara">
                    <h2
                      className="text-white text-start"
                      style={{ marginBottom: "30px" }}
                    >
                      About Me
                    </h2>
                    <p className="lead about_para">
                      I'm a dedicated developer with a strong background in web
                      technologies. My journey in tech started with a passion
                      for creating visually appealing and user-friendly
                      websites.
                    </p>
                    <p className="about_para">
                      I specialize in React and have experience with various
                      front-end frameworks. I love coding, problem-solving, and
                      continuously learning new things.
                    </p>
                    <button
                      className="btn btn-outline-info mt-auto"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div
                  className="container p-3 mt-4"
                  style={{
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <br />
                  <div className="row p-2">
                    <div className="col p-2" ref={countUpRef}>
                      <h1 className="text-white">
                        <CountUp
                          start={0}
                          end={triggered ? 20000 : 0}
                          separator=" "
                          duration={5}
                        ></CountUp>
                      </h1>
                      <hr style={{ color: "#FFFFFF" }} />
                      <h5 className="text-white">Completed Projects</h5>
                    </div>

                    <div className="col p-2" ref={countUpRef}>
                      <h1 className="text-white">
                        <CountUp
                          start={0}
                          end={triggered ? 20000 : 0}
                          separator=" "
                          duration={5}
                        ></CountUp>
                      </h1>
                      <hr style={{ color: "#FFFFFF" }} />
                      <h5 className="text-white">Average Rating</h5>
                    </div>

                    <div className="col p-2" ref={countUpRef}>
                      <h1 className="text-white">
                        <CountUp
                          start={0}
                          end={triggered ? 20000 : 0}
                          separator=" "
                          duration={5}
                        ></CountUp>
                      </h1>
                      <hr style={{ color: "#FFFFFF" }} />
                      <h5 className="text-white">Happy Clients</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="h-50 container-fluid mb-4 overflow-hidden"
                  style={{
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <img
                    src={lmsLogo}
                    className="img-fluid"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div
                  className="h-50 container-fluid"
                  style={{
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <img
                    src={lmsLogo}
                    className="img-fluid"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* <div className="mt-20">
          <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
        </div> */}
          </section>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="projects-section py-5">
        <div className="vh-70 container-fluid">
          <ProjectCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="vh-70 container">
          <hr />
          <h2 className="text-white">Contact Me</h2>
          <br />
          <p className="lead text-center contact_para" ref={scrollRef}>
            Feel free to reach out to me via email or through my social media
            channels.
          </p>
          <br />
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img src={gmailLogo} className="img-fluid img" />
                  </div>
                  <div className="col">
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:your.email@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        jesseokuji123@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img src={linkedinLogo} className="img-fluid img" />
                  </div>
                  <div className="col">
                    <p>
                      LinkedIn:{" "}
                      <a
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/yourprofile
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img src={githubLogo} className="img-fluid img" />
                  </div>
                  <div className="col">
                    <p>
                      Github:{" "}
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/yourusername
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <button
                    type="button"
                    className="btn text-white"
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      borderWidth: "1px",
                      borderColor: "#FFFFFF",
                      width: "50%",
                    }}
                  >
                    Send a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="hr hr-blurry" /> */}
    </>
  );
};
