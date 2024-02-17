import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cats">Profile</Link>
      </li>
      <li>
        <Link to="/sheeps">Feed</Link>
      </li>
      <li>
        <Link to="/goats">More</Link>
      </li>
    </div>
  );
};
export default navbar;
