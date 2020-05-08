import React, { useState, useEffect } from "react";

function Header2() {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className="container-fluid">
    <header className= {header}>
      <div className="fnt-fmly logo-seting fnt-35">EXPERT</div>
      <ul className="fnt-fmly links fnt-header fnt-19 hover-effect ">
        <li className="fnt-fmly link-item underline">Home</li>
        <li className="fnt-fmly link-item underline">Projects</li>
        <li className="fnt-fmly link-item underline">Process</li>
        <li className="fnt-fmly link-item underline">Testimonials</li>
        <li className="fnt-fmly link-item underline">Process</li>
        <li className="fnt-fmly link-item underline">Services</li>
        <li className="fnt-fmly link-item text-dark left-side underline ">Pricing</li>
        <li className="link-item "><button type="button" class="btn btn-danger">Contact</button></li>
      </ul>
      
    </header>
    </div>
  );
}

export default Header2;
