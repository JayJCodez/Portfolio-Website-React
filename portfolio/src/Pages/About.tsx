import "../styles/About.css";
import jsLogo from "../assets/javascript-logo-svgrepo-com.svg";
import reactLogo from "../assets/react-svgrepo-com.svg";
import nodeJS from "../assets/node-js-svgrepo-com.svg";
import mongoDB from "../assets/mongodb-svgrepo-com.svg";
import sqlLogo from "../assets/sql-database-generic-svgrepo-com.svg";
import htmlLogo from "../assets/Project/icons/icons8-html5-96.png";
import githubLogo from "../assets/github-svgrepo-com.svg";

const About = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div
          className="tw-left-0 tw-right-0 tw-bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] tw-bg-[size:24px_24px]"
          style={{}}
        >
          <section className="about" id="about">
            <div className="container">
              <h2 className="text-white" style={{ fontFamily: "Poppins" }}>
                About Me
              </h2>
              <br />

              {/* Summary Section */}
              <div className="summary">
                <p className="text-white" style={{}}>
                  Hello! I'm [Your Name], a passionate software engineer with a
                  strong background in full-stack development. I enjoy solving
                  complex problems and building efficient, scalable software
                  solutions. My goal is to continuously grow as a developer and
                  contribute to innovative projects.
                </p>
              </div>
            </div>

            <br />

            {/* Skills Section */}
            <section
              id="skills"
              className="projects-section p-5 m-3"
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
                          <div className="skill_label">
                            <p className="text-white">JavaScript (ES6+)</p>
                          </div>
                          <br />
                          <div className="progress">
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
                          <div className="skill_label">
                            <p className="text-white">React.js</p>
                          </div>
                          <br />
                          <div className="progress">
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
                          <div className="skill_label">
                            <p className="text-white">Node.js</p>
                          </div>
                          <br />
                          <div className="progress">
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
                      <div className="skill_label">
                        <p className="text-white">Express.js</p>
                      </div>
                      <br />
                      <div className="progress">
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
                          <div className="skill_label">
                            <p className="text-white">MongoDB</p>
                          </div>
                          <br />
                          <div className="progress">
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
                          <div className="skill_label">
                            <p className="text-white">SQL</p>
                          </div>
                          <br />
                          <div className="progress">
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
                          <div className="skill_label">
                            <p className="text-white">HTML5 & CSS3</p>
                          </div>
                          <br />
                          <div className="progress">
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
                          <div className="skill_label">
                            <p className="text-white">Git & Github</p>
                          </div>
                          <br />
                          <div className="progress">
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
                      <div className="skill_label">
                        <p className="text-white">Agile Methodologies</p>
                      </div>
                      <br />
                      <div className="progress">
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
                    <strong className="text-white">Software Engineer</strong> at
                    [Company Name] (MM/YYYY - Present)
                    <p className="text-white">
                      Working on various full-stack projects, contributing to
                      both front-end and back-end development.
                    </p>
                  </li>
                  <li>
                    <strong className="text-white">Front-End Developer</strong>{" "}
                    at [Company Name] (MM/YYYY - MM/YYYY)
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
                    - [University Name] (MM/YYYY - MM/YYYY)
                  </li>
                  <li>
                    <strong className="text-white">
                      Certified JavaScript Developer
                    </strong>{" "}
                    - [Certification Body] (MM/YYYY)
                  </li>
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
