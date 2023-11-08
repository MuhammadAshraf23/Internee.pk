import React from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";

function HeroSection() {
  const heroImg = {
    backgroundImage:
      "url('https://internee.pk/images/site-header/close-up-young-business-team-working.jpg')",
    height: "65vh",
  };

  const overlayStyle = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.3)), rgba(0, 128, 0, 0.6)",
  };

  return (
    <div
      className="bg-cover bg-center bg-bottom relative pt-20"
      style={heroImg}
    >
      <div className="absolute inset-0" style={overlayStyle}></div>
      <div className="container mx-auto h-full flex items-center justify-center relative">
        <div className="text-white tex-center">
          <h1 className="text-white text-5xl mt-4 mb-4 font-bold">About</h1>
          <button className="bg-white text-gray-500 px-5 py-2 rounded-full">
            {" "}
            <Link className="text-green-500 px-2" to={"/"} element={<Home />}>
              Home{" "}
            </Link>
            / About
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
