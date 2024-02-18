import React from "react";

function Menu({ menuItem }) {
  const menu = menuItem.map((item) => {
    return (
      <li key={item}>
        <div className="item-con" key={item.id}>
          <div className="item-container">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      </li>
    );
  });

  return <ol>{menu}</ol>;
}
export default Menu;
