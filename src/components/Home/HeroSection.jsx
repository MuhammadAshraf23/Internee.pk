import React from "react";

function HeroSection() {
  const heroImg = {
    backgroundImage:
      "url('/images/background/close-up-young-business-team-working.jpg')",
  };

  const overlayStyle = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.3)), rgba(0, 128, 0, 0.6)",
  };
  return (
    <div
      className="bg-cover bg-center bg-top h-screen relative pt-20"
      style={heroImg}
    >
      <div className="absolute inset-0" style={overlayStyle}></div>
      <div className="container lg:mx-auto md:mx-20 sm:mx-4 h-full flex items-center relative">
        <div className="lg:w-6/12 w-full mb-5 lg:ml-20 md:ml-10 max-sm:ml-3 mb-lg-0">
          <div className="text-white">
            <h6 className="lg:text-lg sm:text-base text-sm font-bold text-white">
              Are you looking for your dream Internship ?
            </h6>

            <h1 className="text-white lg:text-5xl md:text-5xl sm:text-4xl text-3xl mt-4 mb-4 font-bold">
              Join <br /> Internee.pk now..!
            </h1>
            <p className="lg:text-lg sm:text-base text-sm text-white">
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
