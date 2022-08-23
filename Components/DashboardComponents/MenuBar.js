import React from "react";

const MenuBar = () => {
  const menuitems = ["Dashboard", "Stats", "Profile", "Settings"];
  const menu = menuitems.map((menuItem, index) => {
    return (
      <li className="mt-4 cursor-pointer" key={index}>
        {menuItem}
      </li>
    );
  });

  return (
    <div className=" bg-incomegreen rounded-lg text-white p-4 mt-6 hidden lmd:block">
      <ul>{menu}</ul>
    </div>
  );
};

export default MenuBar;
