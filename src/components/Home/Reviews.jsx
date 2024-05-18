import React from "react";

const Reviews = () => {
  const heroImg = {
    backgroundImage:
      "url('images/background/image.jpg')",
  };

  const overlayStyle = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.3)), rgba(0, 128, 0, 0.6)",
  };

  const textWhite = {
    color: "white",
  };
  return (
    <>
      <div
        className="bg-cover bg-center bg-top h-full relative lg:pt-20 md:pt-20 sm:pt-10 pt-5"
        style={heroImg}
      >
        <div className="absolute inset-0" style={overlayStyle}></div>
        <div className="container lg:mx-auto h-full flex items-center relative">
          <div className="lg:w-6/12 w-full mb-5 lg:ml-20 md:ml-16 ml-3 mr-10 mb-lg-0 lg:py-20 md:py-16 py-8">
            <div className="text-white">
              <h1
                className="text-white lg:text-4xl md:text-3xl text-2xl lg:mt-4 md:mt-4 mb-4 font-bold"
                style={{ lineHeight: "50px" }}
              >
                Internships every months
              </h1>
              <p className="text-lg" style={textWhite}>
                Introducing Internee.pk, the ultimate platform designed to
                turbocharge the IT sector in Pakistan! We recognize the immense
                potential of talented individuals in the country and aim to
                bridge the gap between them and the thriving IT industry.
                Internee.pk offers a comprehensive range of virtual internship
                opportunities exclusively in the IT field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
