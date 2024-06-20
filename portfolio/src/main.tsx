import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel";
import ReactGA from "react-ga4";

ReactGA.initialize("G-J83KE91TDZ");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
