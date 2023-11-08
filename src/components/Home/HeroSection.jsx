import React from "react";

function HeroSection() {
  const heroImg = {
    backgroundImage:
      "url('https://internee.pk/images/close-up-young-business-team-working.jpg')",
  };

  const overlayStyle = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.3)), rgba(0, 128, 0, 0.6)",
  };

  const textWhite = {
    color: "white",
  };

  return (
    <div
      className="bg-cover bg-center bg-top h-screen relative pt-20"
      style={heroImg}
    >
      <div className="absolute inset-0" style={overlayStyle}></div>
      <div className="container mx-auto h-full flex items-center relative">
        <div className="lg:w-6/12 w-full mb-5 ml-20 mb-lg-0">
          <div className="text-white">
            <h6 className="text-lg font-bold" style={textWhite}>
              Are you looking for your dream Internship ?
            </h6>

            <h1 className="text-white text-5xl mt-4 mb-4 font-bold">
              Join <br /> Internee.pk now..!
            </h1>
            <p className="text-lg" style={textWhite}>
              Pakistan's Virtual Internship Platform Powered By{" "}
              <a
                href="https://techviochats.com/"
                className="font-bold text-blue-300 text-lg"
              >
                TechvioChats
              </a>
            </p>

            <a
              href="/job-listings.html"
              className="text-white border-2 border-white p-2 inline-block mt-4 hover:bg-indigo-500 hover:border-indigo-500 hover:text-black rounded-full transition duration-300"
            >
              Browse Internships
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
