// import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-logo">
        <img src="public/logo.png" className="logo"></img>
      </div>
      <h1>Welcome to Get Civic!</h1>
      <h2 className="home-text">
        Your community needs you. Whether it's through the arts or political
        action, find your place in civic engagement by completing this brief
        survey. You''ll let us know your passions and we'll match you with
        personalized civic engagement opportunities near you. Discover your
        strengths, support your community, and get civic! to find your best fits
        for civic opportunities in your local area!
      </h2>
      <div className="home-survey">
        <a
          href="https://drexel.qualtrics.com/jfe/form/SV_0jgAhKqxJ5gOnXw"
          className="survey"
        >
          {" "}
          Take the survey here!{" "}
        </a>
      </div>
      <h2>
        Take a Look at some nearby organizations you can get involved with!
      </h2>
      <div className="home-images">
        <img src="https://www.bu.edu/files/2021/05/social-spark.jpg"></img>
        <img src="public/greater-boston-food-bank-img.png"></img>
        <img src="public/volunteer-img.png"></img>
        <img src="https://i0.wp.com/techfc.org/wp-content/uploads/2022/12/cropped-techforchange-logo.png?fit=1438%2C426&ssl=1"></img>
      </div>

      <footer>
        This website was developed by Amelia Liston, and the hackathon project
        was developed along with Catherine Liu, Cindy Frempong, Chloe Mshana,
        and Stella Zhai{" "}
      </footer>
    </div>
  );
};
