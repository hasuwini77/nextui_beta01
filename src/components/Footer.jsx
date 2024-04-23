import React from "react";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <footer>
      <div className="flex align-center justify-center p-4">
        <p className="p-4"> Copyright ® {currentYear} Edwin Andermyr</p>
      </div>
    </footer>
  );
};

export default Footer;
