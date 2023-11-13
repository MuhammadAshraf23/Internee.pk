import React from "react";
import { CgBrowser } from "react-icons/cg";
import { SiWebmoney } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { PiPenNibBold } from "react-icons/pi";
import { AiOutlineMobile } from "react-icons/ai";
const Categories = () => {
  const position = {
    position: " absolute",
    top: " 0",
    right: "0",
    width: "40px",
    height: " 40px",
  };
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center py-10 mb-10">
        Browser By Categories
      </h1>
      <div className="flex justify-center flex-wrap">
        <div className="lg:w-1/6 md:w-1/3 sm:w-1/3 ">
          <div
            className="relative p-4 text-center mx-4 bg-green-500 h-full py-10"
            style={{
              borderRadius: "100%",
              borderColor: "indigo",
              borderWidth: "8px",
            }}
          >
            <a
              href="web-design.html"
              className="text-white flex flex-col justify-center items-center h-full"
            >
              <CgBrowser size={32} />
              <small className="mt-2 text-sm">Website Designing</small>
              <div
                className="flex flex-col justify-center items-center rounded-full bg-indigo-500 text-center"
                style={position}
              >
                <span className="text-xm">05</span>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 sm:w-1/3">
          <div
            className="relative p-4 mx-4 text-center bg-green-500 h-full py-10"
            style={{
              borderRadius: "100%",
              borderColor: "indigo",
              borderWidth: "8px",
            }}
          >
            <a
              href="web-design.html"
              className="text-white flex flex-col justify-center items-center h-full"
            >
              <SiWebmoney size={32} />
              <small className="mt-2 text-sm">Website Developement</small>
              <div
                className="flex flex-col justify-center items-center rounded-full bg-indigo-500 text-center"
                style={position}
              >
                <span className="text-xm">05</span>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 sm:w-1/3">
          <div
            className="relative border mx-4 p-4 text-center bg-green-500 h-full py-10"
            style={{
              borderRadius: "100%",
              borderColor: "indigo",
              borderWidth: "8px",
            }}
          >
            <a
              href="web-design.html"
              className="text-white flex flex-col justify-center items-center h-full"
            >
              <BsRobot size={32} />
              <small className="mt-2 text-sm">Chatbot Developement </small>
              <div
                className="flex flex-col justify-center items-center rounded-full bg-indigo-500 text-center"
                style={position}
              >
                <span className="text-xm">05</span>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 sm:w-1/3">
          <div
            className="relative border mx-4 p-4 text-center bg-green-500 h-full py-10"
            style={{
              borderRadius: "100%",
              borderColor: "indigo",
              borderWidth: "8px",
            }}
          >
            <a
              href="web-design.html"
              className="text-white flex flex-col justify-center items-center h-full"
            >
              <PiPenNibBold size={32} />
              <small className="mt-2 text-sm"> Graphics Designing and 3D</small>
              <div
                className="flex flex-col justify-center items-center rounded-full bg-indigo-500 text-center"
                style={position}
              >
                <span className="text-xm">05</span>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-1/6 md:w-1/3 sm:w-1/3">
          <div
            className="relative border mx-4 p-4 text-center bg-green-500 h-full py-10"
            style={{
              borderRadius: "100%",
              borderColor: "indigo",
              borderWidth: "8px",
            }}
          >
            <a
              href="web-design.html"
              className="text-white flex flex-col justify-center items-center h-full"
            >
              <AiOutlineMobile size={32} />
              <small className="mt-2 text-sm">
                Mobile Application Developement
              </small>
              <div
                className="flex flex-col justify-center items-center rounded-full bg-indigo-500 text-center"
                style={position}
              >
                <span className="text-xm">05</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
