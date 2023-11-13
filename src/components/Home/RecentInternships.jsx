import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { IoLocationOutline } from "react-icons/io5";
import { BiTime } from "react-icons/bi";
const trendingCardData = [
  {
    image: "https://internee.pk/images/jobs/analysis.jpg",
    title: "Data Analyist",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfB54UTzaFooJ5sTPKDORpX2ZpGosDpLnbVOgvMS6qV8-xXiQ/closedform",
  },
  {
    image: "https://internee.pk/images/jobs/hack.jpeg",
    title: "Cyber Security",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSd5vM8tV8vOwnXLXkHSfMUZs6tLWIVv7dcnPTLB2Jh2DYbcjg/closedform",
  },
  {
    image: "https://internee.pk/images/jobs/cloud.jpg",
    title: "Cloud Computing",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfuyq_LSLbiHml7NlnsgvFKBHIa1iuOvJ4y3FGH0hLpFCSOpA/closedform",
  },
  {
    image: "https://internee.pk/images/jobs/FrontEnd.jpeg",
    title: "Frontend Developement",
    link: "https://internee.pk/web-design.html",
  },
  {
    image: "https://internee.pk/images/jobs/BackendDevelopment.jpeg",
    title: "Backend Developement",
    link: "https://internee.pk/web-development.html",
  },
  {
    image: "https://internee.pk/images/jobs/chatbotDevelopment.jpeg",
    title: "Chatbot Developement",
    link: "https://internee.pk/chatbot.html",
  },
  {
    image: "https://internee.pk/images/jobs/Machine%20Learning.jpeg",
    title: "Machine Learning",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdeML8FaOdydZzxAhgcCssTHBAuIchqVDBAxG-x5SvQJVwPJA/closedform",
  },
  {
    image: "https://internee.pk/images/jobs/Mobile%20App%20Developer.jpeg",
    title: "Mobile App Developement",
    link: "https://internee.pk/mobile-development.html",
  },
  {
    image:
      "https://internee.pk/images/jobs/logo-designer-working-computer-desktop.jpg",
    title: "Graphic Design",
    link: "https://internee.pk/graphic.html",
  },
];
const RecentInternships = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between my-10">
        {trendingCardData.map((items) => (
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-3 py-5 hover:shadow-2xl"
            key={items.title}
          >
            <Card className="all-card">
              <CardMedia
                component="img"
                height="194"
                image={items.image}
                alt="Image"
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {items.title}
                </Typography>
                <div className="flex items-center ">
                  <IoLocationOutline className="text-green-500" />{" "}
                  <p className="mr-5 ml-1 text-gray-400">Remote</p>
                  <BiTime className="text-green-500" />{" "}
                  <p className="ml-1 text-gray-400">1 Month</p>
                </div>
              </CardContent>{" "}
              <hr />
              <div className="flex justify-end py-5 px-5">
                <a href={items.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="contained"
                    style={{ borderRadius: "30px", padding: "10px 12px" }}
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex lg:justify-end md:justify-end justify-start lg:pb-10 md:pb-10 pb-5">
        <Button
          variant="contained"
          style={{
            borderRadius: "30px",
            padding: "20px 40px",
            textTransform: "capitalize",
            fontSize: "20px",
          }}
        >
          Browser Internships
        </Button>
      </div>
    </>
  );
};

export default RecentInternships;
