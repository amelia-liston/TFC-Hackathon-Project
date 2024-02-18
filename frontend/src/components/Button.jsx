// import React from "react";

function Button({ filter }) {
  return (
    <div className="style-btns">
      <button type="button" onClick={() => filter("Volunteer")}>
        Volunteer
      </button>
      <button type="button" onClick={() => filter("Education")}>
        Education
      </button>
      <button type="button" onClick={() => filter("Transportation")}>
        Transportation
      </button>
      <button type="button" onClick={() => filter("Environment")}>
        Environment
      </button>
      <button type="button" onClick={() => filter("DEI")}>
        DEI
      </button>
      <button type="button" onClick={() => filter("Infrastructure")}>
        Infrastructure
      </button>
      <button type="button" onClick={() => filter("Budgeting")}>
        Budgeting
      </button>
    </div>
  );
}

export default Button;
