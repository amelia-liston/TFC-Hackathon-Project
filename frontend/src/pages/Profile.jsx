import React from "react";
import { Link } from "react-router-dom";
import items from "./allData";
import { useState } from "react";
import Menu from "./components/Menu";
import Button from "./components/Button";

export const Profile = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState([]);

  return (
    <div>
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
      <Button />
      <Menu menuItem={menuItem} />
    </div>
  );
};
