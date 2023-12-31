import React from "react";

const Laungh = () => {
  return (
    <div className="container lg:flex justify-center my-10 w-full mx-auto">
      <div className="lg:pr-5 md:pr-0">
        <div
          className="custom-text-block bg-green-500 lg:px-20 md:px-10 sm:px-8 px-5 lg:py-20 md:py-10 sm:py-8 py-5"
          style={{ height: "600px", width: "540px" }}
        >
          <h2 className="text-white mb-2 font-bold lg:text-4xl md:text-4xl sm:text-3xl text-2xl leading-relaxed">
            Launching tech careers with internships, exposure, and networking.
          </h2>
          <p className="text-white leading-relaxed">
            Internee.pk kickstarts student's tech careers with first
            internships, providing industry exposure, practical skills, and
            networking opportunities, paving the way for their success in the
            tech industry.
            <div className="flex justify-around py-10">
              <p>Registered users</p>
              <p>Opening Internships</p>
            </div>
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="h-full w-full">
          <img
            src="https://internee.pk/images/people-working-as-team-company.jpg"
            className="chineseImage rounded-r-lg img-fluid object-cover h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Laungh;
