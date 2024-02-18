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
      <Menu menuItem={menuItem} />
      <h2>Popular</h2>
      <div className="examples-outer">
        <div className="examples">
          <h2>Greater Boston Food Bank</h2>
          <p>
            The Greater Boston Food Bank works passionately to end hunger across
            Eastern Massachusetts by providing our neighbors in need the healthy
            food and resources they need to thrive.
          </p>
        </div>
      </div>
    </div>
  );
};
