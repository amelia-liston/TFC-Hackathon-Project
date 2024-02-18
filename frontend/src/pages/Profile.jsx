// import React from "react";
// import { Link } from "react-router-dom";
import items from "./allData";
import { useState } from "react";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { Navbar } from "../components/navbar";

export const Profile = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [button, setButton] = useState([]);

  const filter = ({ button }) => {
    const filteredData = menuItem.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div>
      <Navbar />
      <h1>Hello!</h1>
      <h2 className="profile-h2">Check Out Your Nearby Organizations</h2>
      <div className="profile-img">
        <img src="public/map.png"></img>
      </div>
      <h2 className="profile-h2">Sort by Category</h2>
      <div className="title">
        <h2>
          <span></span>
        </h2>
      </div>
      <Button filter={filter} />
      {/* <Menu menuItem={menuItem} /> */}
      <h2>Popular</h2>
      <div className="examples-outer">
        <div className="examples">
          <h2>Greater Boston Food Bank</h2>
          <p>
            The Greater Boston Food Bank works passionately to end hunger across
            Eastern Massachusetts by providing our neighbors in need the healthy
            food and resources they need to thrive.
          </p>
          <div className="icon">fighting hunger</div>
          <div className="icon">charity</div>
        </div>
        <div className="examples">
          <h2>BU Spark!</h2>
          <p>
            BU Spark! is an innovation and experiential learning lab housed in
            the Boston University Faculty of Computing and Data Sciences.
          </p>
          <div className="icon">education</div>
          <div className="icon">technology</div>
        </div>
        <div className="examples">
          <h2>Tech For Change</h2>
          <p>
            Tech for Change is a national network of student clubs founded on
            the belief that technology can be used as a catalyst to foster a
            better and more equal society.
          </p>
          <div className="icon">education</div>
          <div className="icon">technology</div>
        </div>
        <div className="examples">
          <h2>ProteClime</h2>
          <p>
            ProteClime is an organization that aims to protect the climate in
            the Greater Boston Area through community projects and monthly
            neighborhood cleanings.
          </p>
          <div className="icon">environemnt</div>
          <div className="icon">volunteer</div>
        </div>
        <div className="examples">
          <h2>T Reworks Society</h2>
          <p>
            T Reworks Society is a community level organization that promotes
            active engagement on local transportation issues.
          </p>
          <div className="icon">transportation</div>
          <div className="icon">DEI</div>
        </div>
      </div>
    </div>
  );
};
