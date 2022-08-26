import React, { useState, useEffect } from "react";
import ItemDisplayType from "./ItemDisplayType";
import ItemsDisplay from "./ItemsDisplay";
import ToggleDisplayButton from "./ToggleDisplayButton";

const ItemsDisplayAndForm = () => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="mt-10 lmd:mt-0 lmd:gap-3 grid grid-rows-itemsandformresponsive lmd:grid-rows-itemsandform">
        <ItemDisplayType />

        <ItemsDisplay toggle={toggle} />
        {windowWidth > 924 ? (
          <div className=" bg-gray-900 rounded-lg">entry form</div>
        ) : (
          <ToggleDisplayButton setToggle={setToggle} toggle={toggle} />
        )}
      </div>
    </>
  );
};

export default ItemsDisplayAndForm;
