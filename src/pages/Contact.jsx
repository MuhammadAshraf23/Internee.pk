import React from "react";
import Layout from "../Layout/Layout";
import HeroSection from "../components/Contact/HeroSection";
import Reviews from "../components/Home/Reviews";
import ContactUs from "../components/Contact/ContactUs";

const Contact = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <ContactUs />
        <Reviews />
      </Layout>
    </div>
  );
};

export default Contact;
