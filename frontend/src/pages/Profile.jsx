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
      <h1>Hello, Bella!</h1>
      <h2 className="profile-h2">Nearby Organizations</h2>
      <div className="profile-img">
        <img src="public/map.png"></img>
      </div>
      <h2 className="profile-h2">Sort by Category</h2>
      <div className="title">
        <h2>
          Sort by Category <span>Filter</span>
        </h2>
      </div>
      <Button filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  );
};
