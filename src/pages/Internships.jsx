import React from "react";
import Layout from "../Layout/Layout";
import HeroSection from "../components/Internships/HeroSection";
import Reviews from "../components/Home/Reviews";
import RecentInternships from "../components/Home/RecentInternships";

const Internships = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <div className="container">
          <div className="pt-48 font-bold ">
            <h1 className="text-3xl">Internships on Different Tech Domain</h1>
          </div>
          <RecentInternships />
        </div>
        <Reviews />
      </Layout>
    </div>
  );
};

export default Internships;
