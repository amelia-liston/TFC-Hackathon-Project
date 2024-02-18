// import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Get Civic!</h1>
      <h2 className="home-text">
        Your community needs you. Whether it's through the arts or political
        action, find your place in civic engagement by completing this brief
        survey. You''ll let us know your passions and we'll match you with
        personalized civic engagement opportunities near you. Discover your
        strengths, support your community, and get civic! to find your best fits
        for civic opportunities in your local area!
      </h2>
      <a
        href="https://drexel.qualtrics.com/jfe/form/SV_0jgAhKqxJ5gOnXw"
        className="survey"
      >
        {" "}
        Take the survey here!{" "}
      </a>
    </div>
  );
};
