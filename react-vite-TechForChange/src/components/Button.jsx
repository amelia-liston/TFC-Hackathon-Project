// import React from "react";

function Button({ filter }) {
  return (
    <div>
      <button type="button" onClick={() => filter("Volunteer")}>
        Volunteer
      </button>
    </div>
  );
}

export default Button;
