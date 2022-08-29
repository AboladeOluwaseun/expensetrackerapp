import React, { useState, useEffect } from "react";
import ItemDisplayType from "./ItemDisplayType";
import ItemsDisplay from "./ItemsDisplay";
import ToggleDisplayButton from "./ToggleDisplayButton";
import EntryForm from "./EntryForm";
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
      <div className="mt-10 relative lmd:mt-0 lmd:gap-0 grid grid-rows-itemsandformresponsive lmd:grid-rows-itemsandform">
        <ItemDisplayType />

        <ItemsDisplay toggle={toggle} />
        {windowWidth > 924 && <EntryForm />}
      </div>
      {windowWidth < 924 && (
        <ToggleDisplayButton setToggle={setToggle} toggle={toggle} />
      )}
    </>
  );
};

export default ItemsDisplayAndForm;
