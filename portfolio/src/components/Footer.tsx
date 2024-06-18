import React from "react";
import "../styles/Footer.css"; // Ensure this file includes Tailwind CSS imports

const Footer: React.FC = () => {
  return (
    <footer className="tw-bg-black tw-text-white tw-py-10 tw-px-4">
      <div className="tw-border-t tw-border-gray-700 tw-mt-8 tw-pt-4 tw-text-center">
        <p className="tw-text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
