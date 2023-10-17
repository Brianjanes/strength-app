import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Program",
    icon: <MenuBookIcon />,
    link: "/program",
  },
  {
    title: "Lifting Log",
    icon: <LibraryBooksIcon />,
    link: "/logs",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },

  // {
  //   title: "Logout",
  //   icon: <LogoutIcon />,
  //   link: "/Logout",
  // },
];
