import React from "react";
import "../../App.css";
const AboutIntern = () => {
  const img = {
    height: "750px",
  };
  const aboutInfo = {
    position: "absolute",
    bottom: "0",
    right: "0",
    margin: "20px",
    padding: "20px",
  };
  return (
    <div className="container lg:flex mx-auto mt-20 justify-center w-full">
      <div className="lg:w-1/4 h-100 md:w-full lg:pr-5 md:pr-0  ">
        <div className="bg-green-500 h-100 rounded-l-3xl relative">
          <img
            src="https://internee.pk/images/founder.jpg"
            style={img}
            className="about-image rounded-l-3xl img-fluid object-cover h-full md:w-full"
            alt=""
          />

          <div
            className="about-info bg-green-500 p-3 rounded-3xl"
            style={aboutInfo}
          >
            <h4 className="text-white mb-0 me-2 text-3xl font-bold">
              Hammad Sheikh
            </h4>
            <p className="text-white mb-0">Founder</p>
          </div>
        </div>
      </div>
      <div className="custom-text-block bg-indigo-500 px-20 py-20 max-sm:px-5 max-sm:py-8 w-full">
        <h2 className="text-white mb-2 font-bold text-4xl max-sm:text-xl leading-relaxed">
          Welcome to Internee.pk
        </h2>
        <p className="text-white leading-relaxed">
          Our internship program is designed to give students the opportunity to
          work on meaningful projects and tasks, while also receiving mentorship
          and guidance from experienced professionals in the field. Our goal is
          to help interns develop the skills and knowledge they need to succeed
          in their careers, while also building a strong network of talented
          individuals who may become valuable members of our team in the future.
          If you're looking for a challenging and rewarding internship
          experience, we invite you to explore our program and
          <a
            href="/job-listings.html"
            className="text-green-500 font-semibold"
            target="_parent"
          >
            {" "}
            Apply Today
          </a>
        </p>

        <div className="flex items-center mt-10">
          <a
            href="/job-listings.html"
            className="text-white border-2 border-white p-2 mr-5 hover:bg-white-500 hover:border-white-500 hover:text-black rounded-full transition duration-300"
          >
            Get To Know Us
          </a>
          <a href="job-listings.html" className="custom-link smoothscroll">
            Explore Internships
          </a>
        </div>
      </div>

      <div className="lg:w-1/4 w-50 lg:pl-5  md:pl-0">
        <div className="h-100 rounded-r-3xl relative">
          <img
            src="https://internee.pk/images/rayyan.jpg"
            style={img}
            className="about-image rounded-r-3xl img-fluid object-cover w-full h-full"
            alt=""
          />
          <div
            className="about-info bg-green-500 p-3 rounded-md"
            style={aboutInfo}
          >
            <h4 className="text-white mb-0 me-2 text-3xl font-bold">
              Rayyan Zain
            </h4>
            <p className="text-white mb-0">CMO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntern;
