// import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Feed = () => {
  return (
    <div>
      <Navbar />
      <div className="feed-title">Your Top Matches</div>
      <div className="examples-feed">
        <h2>BU Spark!</h2>
        <p>
          BU Spark! is an innovation and experiential learning lab housed in the
          Boston University Faculty of Computing and Data Sciences.
        </p>
        <div className="icon">education</div>
        <div className="icon">technology</div>
      </div>
      <div className="examples-feed">
        <h2>Tech For Change</h2>
        <p>
          Tech for Change is a national network of student clubs founded on the
          belief that technology can be used as a catalyst to foster a better
          and more equal society.
        </p>
        <div className="icon">education</div>
        <div className="icon">technology</div>
      </div>
      <div className="examples-feed">
        <h2>ProteClime</h2>
        <p>
          ProteClime is an organization that aims to protect the climate in the
          Greater Boston Area through community projects and monthly
          neighborhood cleanings.
        </p>
        <div className="icon">environemnt</div>
        <div className="icon">volunteer</div>
      </div>
      <div className="examples-feed">
        <h2>T Reworks Society</h2>
        <p>
          T Reworks Society is a community level organization that promotes
          active engagement on local transportation issues.
        </p>
        <div className="icon">transportation</div>
        <div className="icon">DEI</div>
      </div>
    </div>
  );
};
