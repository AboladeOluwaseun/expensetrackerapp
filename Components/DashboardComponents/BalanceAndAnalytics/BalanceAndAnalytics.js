import React, { useEffect, useState, useRef } from "react";
import BalanceDisplay from "./BalanceDisplay";
import Analytics from "./Analytics";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
});

const BalanceAndAnalytics = () => {
  const [windowWidth, setWindowWidth] = useState("");
  const [displayIndex, setDisplayIndex] = useState(0);
  const timeOutRef = useRef(null);
  const BalanceAndAnalyticsDisplay = [
    <BalanceDisplay key={"1"} />,
    <Analytics key={"2"} />,
  ];
  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  const displayChangeHandler = (type) => {
    if (type === "next") {
      if (displayIndex < BalanceAndAnalyticsDisplay.length - 1) {
        setDisplayIndex(displayIndex + 1);
      }
    }
    if (type === "prev") {
      if (displayIndex > 0) {
        setDisplayIndex(displayIndex - 1);
      }
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= 924 ? (
        <div className="  grid grid-rows-layout gap-y-[1.6rem]">
          <BalanceDisplay></BalanceDisplay>
          <Analytics></Analytics>
        </div>
      ) : (
        <div className="relative">
          <div
            onClick={() => {
              displayChangeHandler("prev");
            }}
            className="absolute cursor-pointer left-6 top-[5.5rem] "
          >
            <ArrowBackIosIcon theme={theme} color="neutral" />
          </div>

          <div className="grid grid-rows-1">
            {BalanceAndAnalyticsDisplay[displayIndex]}
          </div>
          <div
            onClick={() => {
              displayChangeHandler("next");
            }}
            className=" cursor-pointer absolute right-[2rem] top-[5.5rem]"
          >
            <ArrowForwardIosOutlinedIcon theme={theme} color="neutral" />
          </div>
        </div>
      )}
    </>
  );
};

export default BalanceAndAnalytics;
