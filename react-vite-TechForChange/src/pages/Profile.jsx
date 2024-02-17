import React from "react";
import { Link } from "react-router-dom";


export const Profile = () => {
  return (
    <div>
      <h1>Hello, Bella!</h1>
      <h2 className="profile-h2">Nearby Organizations</h2>
      <div className="profile-img">
        <img src="public/map.png"></img>
      </div>
      <h2 className="profile-h2">Sort by Category</h2>
      <p></p>
    </div>
  );
};
