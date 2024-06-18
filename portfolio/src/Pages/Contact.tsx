import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [visibility, setVisibility] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent form submission
    setVisibility(true); // Show the toast notification
    setTimeout(() => setVisibility(false), 10000); // Hide the toast after 3 seconds
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div
          className="tw-left-0 tw-right-0 tw-bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] tw-bg-[size:24px_24px]"
          style={{}}
        ></div>
        <section className="contact" id="contact">
          <div className="container">
            <h2
              className="text-center text-white mb-5"
              style={{ fontFamily: "Poppins" }}
            >
              Contact Me
            </h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <h5 className="text-white">Name</h5>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  style={{ background: "transparent", color: "white" }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <h5 className="text-white">Email</h5>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={{ background: "transparent", color: "white" }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <h5 className="text-white">Message</h5>
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Enter your message"
                  style={{ background: "transparent", color: "white" }}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-block"
                style={{ backgroundColor: "#3a1e88" }}
              >
                Send
              </button>
            </form>
            {visibility && (
              <div
                className="toast show position-fixed bottom-0 end-0 p-3"
                style={{ zIndex: 11 }}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">Notification</strong>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setVisibility(false)}
                  ></button>
                </div>
                <div className="toast-body">Your message has been sent!</div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
