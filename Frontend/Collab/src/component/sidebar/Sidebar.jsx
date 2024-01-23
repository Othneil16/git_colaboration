import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-main">
      <div className="content">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Projects</li>
          <li>Products</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
