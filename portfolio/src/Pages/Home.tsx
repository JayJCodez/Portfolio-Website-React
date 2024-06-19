import "../styles/Home.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import linkedinLogo from "../assets/linkedin-linked-in-svgrepo-com.svg";
import gmailLogo from "../assets/gmail-svgrepo-com.svg";
import githubLogo from "../assets/github-svgrepo-com.svg";
import myself from "../assets/Project/personal_images/image.png";
import communication from "../assets/Project/icons/icons8-communication-64.png";
import React, { useEffect, useRef, useState } from "react";
import purplecontentimg from "../assets/stars-2616537_1280.jpg";
import whatsapp from "../assets/Project/icons/icons8-whatsapp-96.png";
// import PopoverImage from "../components/PopoverImage.tsx";
import techimage from "../assets/Project/icons/icons8-tech-64.png";
import multidevice from "../assets/Project/icons/icons8-multiple-devices-96.png";
import developIcon from "../assets/Project/icons/icons8-developer-64.png";
import collaboration from "../assets/Project/icons/icons8-collaboration-64.png";
import assurance from "../assets/Project/icons/icons8-approval-64.png";
import gsap from "gsap";
import contentimg from "../assets/waterfall-8162449_1280.jpg";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/all";
import ProjectCarousel from "../components/ProjectCarousel.tsx";
import BootstrapNav from "../components/BootsrapNav.tsx";

gsap.registerPlugin(GSAPScrollTrigger);
export const Home: React.FC = () => {
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
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
  };

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
        duration: 2.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".about_para",
          start: "top 70%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 60%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".seemore",
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
          trigger: ".seemore",
          start: "top 90%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 15%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".stats",
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
          trigger: ".stats",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".aboutcontentimgtop",
      {
        rotateX: 360,
        opacity: 0,
      },
      {
        rotateX: 0,
        opacity: 1,
        duration: 2.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".aboutcontentimgtop",
          start: "top 70%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 60%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".aboutcontentimgbottom",
      {
        rotateX: 360,
        opacity: 0,
      },
      {
        rotateX: 0,
        opacity: 1,
        duration: 2.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".aboutcontentimgbottom",
          start: "top 70%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 60%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".circletext",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".circletext",
          start: "top 85%", // Trigger animation when the bottom of the element is 90% of the viewport height
          end: "top 30%", // End position for scrollTrigger
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
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

    gsap.fromTo(
      ".contact_para",
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
          trigger: ".contact_para",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".quote",
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".quote",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".personalcard",
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
          trigger: ".quote",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".boldnametop",
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5, // Adds control over the duration of the animation
        ease: "power3.out", // Smoother easing for a more natural effect
        scrollTrigger: {
          trigger: ".boldnametop",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".seemorebtn",
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
          trigger: ".seemorebtn",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".sendmessage",
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
          trigger: ".sendmessage",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".mailrow",
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
          trigger: ".mailrow",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".linkedInrow",
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
          trigger: ".linkedInrow",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".whatsapprow",
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
          trigger: ".linkedInrow",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );

    gsap.fromTo(
      ".githubrow",
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
          trigger: ".githubrow",
          start: "top 81%", // Trigger animation when the top of the element is at 80% of the viewport height
          end: "bottom 25%", // End position for scrollTrigger, for better control
          toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
          markers: false, // Set to true for development to see the start/end markers
        },
      }
    );
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <div className="absolute inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <div
            className="tw-left-0 tw-right-0 tw-bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] tw-bg-[size:24px_24px]"
            style={{}}
          >
            <BootstrapNav />
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
                  <div className="col-md-4 d-flex justify-content-start align-items-center">
                    <div className="container-fluid w-100 boldnametop">
                      <h1
                        className="name d-flex align-items-center "
                        style={{ fontFamily: "Poppins" }}
                      >
                        Jesse
                      </h1>
                      <br />
                      <h1
                        className="name d-flex align-items-center"
                        style={{ fontFamily: "Poppins" }}
                      >
                        <img src={developIcon} className="developIcon" />
                        kuji
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="container d-flex justify-content-center align-items-start">
                      <img
                        src={multidevice}
                        className="circle"
                        style={{
                          width: "30%",
                          height: "auto",
                          maxWidth: "90px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="container">
                      <div className="row d-flex justify-content-center align-items-center g-5">
                        <div className="seemore">
                          <p className="motivation_text">
                            Let's bring your ideas to life on all platfroms
                          </p>
                        </div>
                        <div className="container-fluid d-flex justify-content-center align-items-center seemore">
                          <img
                            src={techimage}
                            style={{ maxWidth: "20%", height: "auto" }}
                          />
                          <button
                            type="button"
                            className="learnmorebtn"
                            style={{ width: "50%" }}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row m-2 d-flex justify-content-center align-items-end">
                  <div className="col-md-6 d-flex justify-content-start align-items-center p-2 quote">
                    <figure className="container-fluid">
                      <blockquote className="blockquote">
                        <p className="motivation_text">
                          "The best way to predict the future is to invent it."
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <cite title="Source Title">Alan Kay</cite>
                      </figcaption>
                    </figure>
                    <br />
                  </div>
                  {/* <div className="col-md-2"></div> */}
                  <div className="col-md-4 personalcard">
                    <div
                      className="container w-70 d-flex justify-content-center align-items-center p-1"
                      style={{ padding: "0px" }}
                    >
                      <img
                        src={myself}
                        alt="Circular Image"
                        className="img-fluid rounded-circle p-2"
                        style={{
                          width: "100px",
                          height: "auto",
                          border: "2px solid rgb(59, 30, 139)",
                        }}
                      />
                      <div
                        className="vertical-line"
                        style={{ backgroundColor: "#3a1e87" }}
                      ></div>
                      <div className="overlay-text p-3">
                        <p>
                          <strong className="text-white">
                            Software Engineer
                          </strong>
                        </p>
                        <p>
                          <small className="text-white">
                            Computer Science Graduate
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container justify-content-center ">
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-start align-items-center circle_container">
                    <div className="circular-container">
                      <div className="row d-flex justify-content-center align-items-center">
                        <img
                          src={communication}
                          className=""
                          alt="..."
                          style={{ width: "100px", height: "auto" }}
                        />
                        <p
                          className="text-center text p-3 circletext"
                          style={{ fontSize: "12px" }}
                        >
                          Effective communication between clients and developers
                          is essential for ensuring project requirements are
                          understood, expectations are managed, and the final
                          product meets or exceeds expectations.
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
                        <p
                          className="text-center text p-3 circletext"
                          style={{ fontSize: "12px" }}
                        >
                          Collaboration between clients and developers is
                          crucial for combining diverse expertise, fostering
                          innovation, and ensuring the final product is
                          well-aligned with the client's vision and needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <div className="circular-container">
                      <div className="row d-flex justify-content-center align-items-center">
                        <img
                          src={assurance}
                          className=""
                          alt="..."
                          style={{ width: "100px", height: "auto" }}
                        />
                        <p
                          className="text-center text p-3 pb-1 circletext"
                          style={{ fontSize: "12px" }}
                        >
                          Professional project execution ensures high quality,
                          reliability, and efficiency, resulting in a final
                          product that meets client expectations and business
                          goals.
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
            <section id="about" className="about-section p-2">
              <div className="row m-0">
                <div className="col-md-6 mb-3">
                  <div
                    className="container d-flex align-items-start mt-5 overflow-hidden"
                    style={{
                      borderWidth: "1px",
                      borderColor: "white",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                      height: toggle ? "300px" : "600px",
                      padding: "0px",
                    }}
                    ref={scrollRef}
                  >
                    <div className="container p-3 h-100 aboutmepara">
                      <h2
                        className="text-white text-center"
                        style={{ marginBottom: "30px" }}
                      >
                        About Me
                      </h2>
                      <p className="about_para wrap">
                        My name is Jesse Okuji, I'm 23-years-old and a graduate
                        in Computer Science. In 2021, I was admitted to London
                        Metropolitan University, where I immersed myself in the
                        world of computing and science. <br />
                        <br />
                        During my time at university, I honed my skills in
                        programming and software development across various
                        platforms. I am proficient in building applications
                        using a diverse range of programming languages including
                        Flutter, Java, Python, Kotlin, TypeScript, HTML, CSS,
                        PHP, SQL, MSSQL, and JavaScript.
                        <br />
                        <br />
                        My practical experience includes developing a variety of
                        applications such as Library Management Systems for
                        desktops/laptops, Event Management Applications for
                        Android using Kotlin, and a Gadget Fixer Web App built
                        with Flutter, compatible with all major operating
                        systems and many more+. Additionally, I independently
                        created a cryptocurrency wallet on the Ethereum
                        blockchain, utilizing Python for backend development and
                        Flask for frontend implementation.
                        <br />
                        <br />I am adept at self-directed learning, utilizing a
                        wide range of resources such as Popular Library
                        Documentation, YouTube, GitHub, Stack Overflow etc to
                        expand my knowledge, troubleshoot challenges, and
                        acquire new skills autonomously.
                      </p>
                    </div>
                  </div>
                  <div className="row px-5">
                    <button
                      className="seemorebtn mt-4 text-center"
                      type="submit"
                      onClick={toggler}
                    >
                      See more
                    </button>
                  </div>
                  <div
                    className="container p-3 mt-4"
                    style={{
                      borderWidth: "1px",
                      borderColor: "white",
                      borderRadius: "20px",
                      padding: "10px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <br />
                    <div className="row p-2 stats">
                      <div className="col p-2" ref={countUpRef}>
                        <h1 className="text-white">
                          <CountUp
                            start={0}
                            end={triggered ? 20 : 0}
                            separator=" "
                            duration={5}
                          ></CountUp>
                          +
                        </h1>
                        <hr style={{ color: "#FFFFFF" }} />
                        <h5 className="text-white">Completed Projects</h5>
                      </div>
                      <div className="col p-2" ref={countUpRef}>
                        <h1 className="text-white">
                          <CountUp
                            start={0}
                            end={triggered ? 4.5 : 0}
                            separator=" "
                            duration={5}
                          ></CountUp>
                          /
                          <CountUp
                            start={0}
                            end={triggered ? 5 : 0}
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
                            end={triggered ? 20 : 0}
                            separator=" "
                            duration={5}
                          ></CountUp>
                          +
                        </h1>
                        <hr style={{ color: "#FFFFFF" }} />
                        <h5 className="text-white">Happy Clients</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" style={{}}>
                  <div
                    className="h-50 container-fluid mb-4 mt-3 aboutcontentimgtop"
                    ref={scrollRef}
                    style={{
                      borderWidth: "1px",
                      borderColor: "white",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={purplecontentimg}
                      className="img-fluid"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                  <div
                    className="h-50 container-fluid aboutcontentimgbottom"
                    ref={scrollRef}
                    style={{
                      borderWidth: "1px",
                      borderColor: "white",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={contentimg}
                      className="img-fluid "
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
          <div className="vh-70 container-fluid mt-5">
            <ProjectCarousel />
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="contact-section py-5">
          <div className="vh-70 container">
            <hr />
            <h1
              className="h1 text-center bg-transparent p-2"
              style={{
                marginBottom: "30px",
                borderRadius: "20px",
                borderWidth: "1px",
                borderColor: "rgb(59, 30, 139)",
                color: "rgb(59, 30, 139)",
              }}
            >
              Contact Me
            </h1>
            <br />
            <p className="lead text-center text-white contact_para">
              Feel free to reach out to me via email or through my social media
              channels.
            </p>
            <br />
            <div className="container d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="container">
                  <div className="row mailrow">
                    <div className="col">
                      <img src={gmailLogo} className="img-fluid img" />
                    </div>
                    <div className="col">
                      <p>
                        Email:{" "}
                        <a
                          href="mailto:jesseokuji123@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          jesseokuji123@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row linkedInrow">
                    <div className="col ">
                      <img src={linkedinLogo} className="img-fluid img" />
                    </div>
                    <div className="col">
                      <p>
                        LinkedIn:{" "}
                        <a
                          href="https://www.linkedin.com/in/jaycodez"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          linkedin.com/in/jaycodez
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row githubrow">
                    <div className="col">
                      <img src={githubLogo} className="img-fluid img" />
                    </div>
                    <div className="col">
                      <p>
                        Github:{" "}
                        <a
                          href="https://github.com/JayJCodez"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github.com/JayJCodez
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row whatsapprow">
                    <div className="col">
                      <img src={whatsapp} className="img-fluid img" />
                    </div>
                    <div className="col">
                      <p>
                        Whatsapp:{" "}
                        <a
                          href="http://Wa.me/+447731349746"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Wa.me/+447731349746
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3 sendmessage">
                    <button type="button" className="seemorebtn">
                      Send a Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <hr className="hr hr-blurry" /> */}
      </div>
    </>
  );
};
