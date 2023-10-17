import React from "react";
import { SidebarData } from "./SidebarData";
import "../styles/App.css";
import AuthButton from "../Auth/AuthButton.jsx";
import LogoutIcon from "@mui/icons-material/Logout";

const SideBar = () => {
  return (
    <div className="sidebar-main">
      <ul className="sidebar-list">
        {SidebarData.map((value, key) => {
          return (
            <>
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
            </>
          );
        })}
      </ul>
      <div
        className="sidebar-list"
        id={window.location.pathname === "/login" ? "active" : ""}
        onClick={() => {
          window.location.pathname = "/login";
        }}
      >
        <div className="row">
          <div id="icon">
            <LogoutIcon />
          </div>
          <div id="title">
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
