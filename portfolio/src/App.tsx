import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import CardLayout from "./components/ProjectCarousel";
import TailwindTest from "./components/TailwindTest";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testtailwind" element={<TailwindTest />} />
          <Route path="/cardlayout" element={<CardLayout />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title, // Optionally send the page title
    });
  }, [location]);

  return null;
};

export default App;
