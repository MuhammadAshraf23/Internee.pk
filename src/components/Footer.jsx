import React from "react";
import { Link } from "react-router-dom";
import { SiWebmoney } from "react-icons/si";
import { BsPerson, BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="md:flex md:text-left text-center justify-between w-full">
          <div
            className="lg:w-1/4 md:w-full w-full px-10"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={"/"}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://internee.pk/1st-logo.jpg"
                  alt="logo"
                  style={{ width: "18%" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1 className="text-3xl font-bold text-black px-2 py-1 rounded">
                    <b style={{ color: "green" }}>Internee</b>.pk
                  </h1>
                  <p
                    className="text-indigo-700 font-bold"
                    style={{ fontSize: "0.7rem" }}
                  >
                    VIRTUAL INTERNSHIP PLATFORM
                  </p>
                </div>
              </div>
            </Link>
            <nav className="list-none mb-10">
              <li className="flex items-center text-green-500">
                <SiWebmoney size={32} />
                <Link to={"/"} className="mx-3 my-3 text-gray-500 text-xl">
                  www.internee.pk
                </Link>
              </li>
              <li className="flex text-green-500 text-xl">
                <BsTelephoneForward />
                <div>
                  <Link to={"/"} className="mx-3 my-3 text-gray-500">
                    +92 345 3191638
                  </Link>{" "}
                  <br />
                  <Link to={"/"} className="mx-3 text-gray-500">
                    +92 345 3191638
                  </Link>
                </div>
              </li>
              <li className="flex items-center text-green-500 text-xl">
                <AiOutlineMail />
                <Link to={"/"} className="mx-3 my-3 text-gray-500 ">
                  info@internee.pk
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900  text-xl mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={"/"} className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/internship"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Internships{" "}
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contact Us
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl mb-3">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/privacypolicy"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  to={"/privacypolicy"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/privacypolicy"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Podcast
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 h-full w-full px-10 bg-blue-50 rounded-md">
            <h2 className="text-xl font-bold mt-5">
              Get Updates About Internships
            </h2>
            <div className="relative pb-10">
              <BsPerson className="absolute top-12 left-8" />
              <input
                type="text"
                placeholder="yourname@gmail.com"
                className="p-5 px-10 rounded-full m-5 outline-none"
              />
              <CiLocationArrow1 className="absolute top-10 bottom-0 left-60 text-green-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 w-full">
        <div className="container px-5 py-5 mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-sm text-white-500 sm:ml-6 sm:mt-0">
              Copyright © internee.pk 2023{" "}
            </p>
            <Link
              to={"/privacypolicy"}
              className="text-white-600 hover:text-gray-800 mx-5"
            >
              Privacy Policy
            </Link>
            <Link to={"/term"} className="text-white-600 hover:text-gray-800">
              Term
            </Link>
          </div>
          <div className="flex max-sm:items-center justify-start lg:flex max-md:hidden max-sm:hidden mt-4 justify-center sm:justify-start">
            <a className="bg-indigo-500 text-white rounded-full p-2">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 bg-indigo-500 text-white rounded-full p-2 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 bg-indigo-500 text-white rounded-full p-2">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 bg-indigo-500 text-white rounded-full p-2">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </div>
          <div className=" max-sm:hidden">
            <p>
              Powered by{" "}
              <Link
                to={"/privacypolicy"}
                className="text-white hover:text-indigo-800 font-bold"
              >
                Techvio Chats
              </Link>
            </p>
          </div>
        </div>
        <div>
          <Link
            to={"/"}
            className="flex justify-end fixed bottom-0 right-0 p-3"
          >
            <div className="flex bg-white rounded-full w-1/3">
              <img
                src="https://internee.pk/1st-logo.jpg"
                alt="logo"
                className="w-full h-full cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
