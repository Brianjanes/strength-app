import React from "react";
import { SidebarData } from "./SidebarData";
import "../styles/App.css";

const SideBar = () => {
  return (
    <div className="sidebar-main">
      <ul className="sidebar-list">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === value.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
