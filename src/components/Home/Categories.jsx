import React from "react";
import { CgBrowser } from "react-icons/cg";
import { SiWebmoney } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { PiPenNibBold } from "react-icons/pi";
import { AiOutlineMobile } from "react-icons/ai";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesData = [
    { id: 1, icon: <CgBrowser size={32} />, title: "Website Designing", count: 5, slug: "website-designing" },
    { id: 2, icon: <SiWebmoney size={32} />, title: "Website Development", count: 5, slug: "website-development" },
    { id: 3, icon: <BsRobot size={32} />, title: "CRM's Chatbot Development", count: 5, slug: "chatbot-development" },
    { id: 4, icon: <PiPenNibBold size={32} />, title: "Graphics Designing & 3D Modeling", count: 5, slug: "graphics-3d-modeling" },
    { id: 5, icon: <AiOutlineMobile size={32} />, title: "Mobile Application Development", count: 5, slug: "mobile-app-development" },
  ];
  

  const colors = {
    backgroundColor: '#43a724',
  }
  const position = {
    position: "absolute",
    top: "0",
    right: "0",
    width: "40px",
    height: "40px",
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center py-10 mb-10">
        Browser By Categories
      </h1>
      <Link to="/internships">
      <div className="flex justify-center flex-wrap">
        {categoriesData.map((category) => {
          console.log("category-->",category.slug)
          return(
          <div className="lg:w-1/6 md:w-1/3 sm:w-1/3">
            <div
              className={`relative text-center mx-4 h-[160px] w-[160px] rounded-full borderColor`}
              style={colors}
            >
              <a
                href="web-design.html"
                className="text-white flex flex-col justify-center items-center h-full"
              >
                {category.icon}
                <small className="mt-2 text-sm">{category.title}</small>
                <div
                  className="flex flex-col justify-center items-center rounded-full bg-indigo-500 text-center"
                  style={position}
                >
                  <span className="text-xm">{category.count}</span>
                </div>
              </a>
            </div>
          </div>

          )
          })}
      </div>
      </Link>
    </div>
  );
};

export default Categories;

