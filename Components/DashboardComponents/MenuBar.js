import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
const MenuBar = () => {
  const menuitems = [
    { icon: <DashboardIcon />, name: "Dashboard" },
    { icon: <ShowChartIcon />, name: "Stats" },
    { icon: <PersonIcon />, name: "Profile" },
    { icon: <SettingsIcon />, name: "Settings" },
  ];
  const menu = menuitems.map((menuItem, index) => {
    return (
      <li className="mt-4 cursor-pointer" key={index}>
        <div className="flex items-center justify-start space-x-6">
          {menuItem.icon}
          {menuItem.name}
        </div>
      </li>
    );
  });

  return (
    <div className=" bg-black rounded-lg text-white p-4 mt-6 hidden lmd:block">
      <ul>{menu}</ul>
    </div>
  );
};

export default MenuBar;
