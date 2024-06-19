import "../styles/About.css";
import jsLogo from "../assets/javascript-logo-svgrepo-com.svg";
import reactLogo from "../assets/react-svgrepo-com.svg";
import nodeJS from "../assets/node-js-svgrepo-com.svg";
import mongoDB from "../assets/mongodb-svgrepo-com.svg";
import sqlLogo from "../assets/sql-database-generic-svgrepo-com.svg";
import htmlLogo from "../assets/Project/icons/icons8-html5-96.png";
import githubLogo from "../assets/github-svgrepo-com.svg";
import BootstrapNav from "../components/BootsrapNav";
import gsap from "gsap";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(GSAPScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".aboutmetxt",
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: {
          each: 0.4, // Adjust this value for the delay between each animation
        },
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".aboutmetxt",
          start: "",
          end: "",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".skills",
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        ease: "power1.inOut",
        scrollTrigger: { trigger: ".skills", start: "", end: "" },
      }
    );

    gsap.fromTo(
      ".skillcomponent",
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 1,
        stagger: {
          each: 0.4, // Adjust this value for the delay between each animation
        },
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".skillcomponent",
          start: "top 85%",
          end: "bottom 0%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".experience",
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 1,
        stagger: {
          each: 0.4, // Adjust this value for the delay between each animation
        },
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".experience",
          start: "top 85%",
          end: "bottom 7%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".education",
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 1,
        stagger: {
          each: 0.4, // Adjust this value for the delay between each animation
        },
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".education",
          start: "top 85%",
          end: "bottom 7%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".interests",
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 1,
        stagger: {
          each: 0.2, // Adjust this value for the delay between each animation
        },
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".interests",
          start: "top 85%",
          end: "bottom 7%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      }
    );
  });

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div
          className="tw-left-0 tw-right-0 tw-bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] tw-bg-[size:24px_24px]"
          style={{}}
        >
          <BootstrapNav />
          <section className="about" id="about">
            <div className="container">
              <h2
                className="text-white text-white aboutmetxt"
                style={{ fontFamily: "Poppins" }}
              >
                About Me
              </h2>
              <br />

              {/* Summary Section */}
              <div className="summary">
                <p className="text-white aboutmetxt" style={{}}>
                  My name is Jesse Okuji, I'm 23-years-old and a graduate in
                  Computer Science. In 2021, I was admitted to London
                  Metropolitan University, where I immersed myself in the world
                  of computing and science.{" "}
                </p>
                <br />
                <p className="text-white aboutmetxt">
                  During my time at university, I honed my skills in programming
                  and software development across various platforms. I am
                  proficient in building applications using a diverse range of
                  programming languages including Flutter, Java, JavaScript
                  Python, Kotlin, TypeScript, HTML, CSS, PHP, SQL, MSSQL,NoSQL
                  and JavaScript.
                </p>
                <br />
                <p className="text-white aboutmetxt">
                  My practical experience includes developing a variety of
                  applications such as Library Management Systems for
                  desktops/laptops, Event Management Applications for Android
                  using Kotlin, and a Gadget Fixer Web App built with Flutter,
                  compatible with all major operating systems and many more+.
                  Additionally, I independently created a cryptocurrency wallet
                  on the Ethereum blockchain, utilizing Python for backend
                  development and Flask for frontend implementation.
                </p>
                <br />
                <p className="text-white aboutmetxt">
                  I am adept at self-directed learning, utilizing online
                  resources such as YouTube and Stack Overflow to expand my
                  knowledge, troubleshoot challenges, and acquire new skills
                  autonomously.
                </p>
              </div>
            </div>

            <br />

            {/* Skills Section */}
            <section
              id="skills"
              className="projects-section p-5 m-3 skills"
              style={{
                borderRadius: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="skills">
                <h3 className="text-center" style={{ fontFamily: "Poppins" }}>
                  Skills
                </h3>
                <hr />
                <br />
                <div className="row">
                  <div className="col">
                    <div className="container">
                      <div className="row mb-3">
                        <div className="col-10">
                          <div className="skill_label skillcomponent">
                            <p className="text-white">JavaScript (ES6+)</p>
                          </div>
                          <br />
                          <div className="progress skillcomponent">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                              role="progressbar"
                              style={{ width: "10%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="col-2">
                          <img
                            src={jsLogo}
                            className="img-small"
                            alt="JavaScript Logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row mb-3">
                        <div className="col-10">
                          <div className="skill_label skillcomponent">
                            <p className="text-white">React.js</p>
                          </div>
                          <br />
                          <div className="progress skillcomponent">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                              role="progressbar"
                              style={{
                                width: "10%",
                                backgroundColor: "rgb(97 218 251)",
                              }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="col-2">
                          <img
                            src={reactLogo}
                            className="img-small"
                            alt="React Logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row  mb-3">
                        <div className="col-10">
                          <div className="skill_label skillcomponent">
                            <p className="text-white">Node.js</p>
                          </div>
                          <br />
                          <div className="progress skillcomponent">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                              role="progressbar"
                              style={{
                                width: "10%",
                                backgroundColor: "rgb(74 108 36)",
                              }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="col-2">
                          <img
                            src={nodeJS}
                            className="img-small"
                            alt="NodeJS Logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="skill_label skillcomponent">
                        <p className="text-white">Express.js</p>
                      </div>
                      <br />
                      <div className="progress skillcomponent">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row mt-3">
                        <div className="col-10">
                          <div className="skill_label skillcomponent">
                            <p className="text-white">MongoDB</p>
                          </div>
                          <br />
                          <div className="progress skillcomponent">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              style={{
                                width: "10%",
                                backgroundColor: "rgb(73 157 74)",
                              }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="col-2">
                          <img
                            src={mongoDB}
                            className="img-small"
                            alt="MongoDB Logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="container">
                      <div className="row mb-3">
                        <div className="col-10">
                          <div className="skill_label skillcomponent">
                            <p className="text-white">SQL</p>
                          </div>
                          <br />
                          <div className="progress skillcomponent">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              style={{
                                width: "10%",
                                backgroundColor: "rgb(68 188 242)",
                              }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="col-2">
                          <img
                            src={sqlLogo}
                            className="img-small"
                            alt="SQL Logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row mb-3">
                        <div className="col-10">
                          <div className="skill_label skillcomponent">
                            <p className="text-white">HTML5 & CSS3</p>
                          </div>
                          <br />
                          <div className="progress skillcomponent">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              style={{
                                width: "10%",
                                backgroundColor: "rgb(230 81 0)",
                              }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="col-2">
                          <img
                            src={htmlLogo}
                            className="img-small"
                            alt="HTML5 Logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row mb-3">
                        <div className="col-10">
                          <div className="skill_label skillcomponent">
                            <p className="text-white">Git & Github</p>
                          </div>
                          <br />
                          <div className="progress skillcomponent">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              style={{
                                width: "10%",
                                backgroundColor: "#758ca3",
                              }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="col-2">
                          <img
                            src={githubLogo}
                            className="img-small"
                            alt="GitHub Logo"
                          />
                        </div>
                      </div>
                    </div>{" "}
                    <div className="container">
                      <div className="skill_label skillcomponent">
                        <p className="text-white">Agile Methodologies</p>
                      </div>
                      <br />
                      <div className="progress skillcomponent">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <br />

            <div className="container ">
              {/* Experience Section */}
              <div className="experience ">
                <h3 className="text-white" style={{ fontFamily: "Poppins" }}>
                  Experience
                </h3>
                <br />
                <ul>
                  <li>
                    <strong className="text-white">Software Engineer</strong>{" "}
                    <p>at Biterite (05/2024 - Present)</p>
                    <p className="text-white">
                      Working on various full-stack projects, contributing to
                      both front-end and back-end development.
                    </p>
                  </li>
                  <li>
                    <strong className="text-white">Front-End Developer</strong>{" "}
                    <p>at Self-Employed (05/2022 - Present)</p>
                    <p className="text-white">
                      Focused on building responsive and user-friendly web
                      applications using React and other front-end technologies.
                    </p>
                    <br />
                  </li>
                </ul>
              </div>
              {/* Education Section */}
              <div className="education">
                <h3 className="text-white" style={{ fontFamily: "Poppins" }}>
                  Education
                </h3>
                <br />
                <ul>
                  <li>
                    <strong className="text-white">
                      Bachelor of Science in Computer Science
                    </strong>{" "}
                    <p>- London Metropolitan University (09/2021 - 05/2024)</p>
                  </li>
                  {/* 
                      //Extra space for education
                  
                  <li>
                    <strong className="text-white">
                      Certified JavaScript Developer
                    </strong>{" "}
                    - [Certification Body] (MM/YYYY)
                  </li> */}
                </ul>
              </div>
              <br />
              {/* Personal Interests Section */}
              <div className="interests">
                <h3 className="text-white" style={{ fontFamily: "Poppins" }}>
                  Personal Interests
                </h3>
                <br />
                <p className="text-white">
                  In my free time, I enjoy exploring new technologies,
                  contributing to open-source projects, and blogging about
                  software development. I also love hiking, photography, and
                  traveling.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
