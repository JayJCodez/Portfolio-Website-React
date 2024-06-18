// PopoverImage.tsx
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover } from "bootstrap";
import "../styles/PopoverImage.css";
import navimg from "../assets/Project/icons/icons8-navigator-48.png";

const PopoverImage: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      const popover = new Popover(imgRef.current, {
        title: "Popover title",
        content: "And here's some amazing content. It's very engaging. Right?",
        trigger: "click",
      });

      return () => {
        popover.dispose();
      };
    }
  }, []);

  return (
    <li>
      <a
        className="nav-links dropdown-toggle d-flex align-items-center justify-content-center p-3"
        data-bs-toggle="dropdown"
        href=""
        role="button"
      >
        <img
          ref={imgRef}
          src={navimg}
          alt="Popover Image"
          className="img-thumbnail"
          data-bs-toggle="popover"
        />
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#scrollspyHeading3">
            Third
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#scrollspyHeading4">
            Fourth
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#scrollspyHeading5">
            Fifth
          </a>
        </li>
      </ul>
    </li>
  );
};

export default PopoverImage;
