import React from "react";

const Laungh = () => {
  return (
    <div className="container flex flex-wrap justify-center my-10 w-full" style={{margin:'0px auto'}}>

        <div
          className="custom-text-block lg:px-20 md:px-10 sm:px-8 px-5 lg:py-20 md:py-10 sm:py-8 lg:pr-5 md:pr-0 py-5 rounded-tl-lg lg:mr-4"
          style={{ height: "600px", width: "590px", backgroundColor:'#43a724', }}
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
              <div>
                <h1 className="text-4xl font-bold">5000+</h1>
              <p>Registered users</p>
              </div>
              <div>
                <h1 className="text-4xl font-bold">35+</h1>
              <p>Opening Internships</p>
            </div>
            </div>
          </p>
        </div>

      <div className="w-[540px] h-[600px]">  
          <img
            src="https://internee.pk/images/people-working-as-team-company.jpg"
            className="chineseImage rounded-r-lg img-fluid object-cover h-full"
            alt=""
          />
      </div>
    </div>
  );
};

export default Laungh;
