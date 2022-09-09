import React from "react";
import Image from "next/image";
import { useAuth } from "../../../context/AuthContext";
import avatar from "../../../Assets/AuthAssets/image-avatar.png";
import SearchBar from "./SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountDetails from "../../UI/AccountDetails";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../../config/fire";
import { doc, onSnapshot } from "firebase/firestore";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
const DashboardHeader = () => {
  const [show, setShow] = useState(false);
  const { currentUser } = useAuth();
  const [username, setUserName] = useState("");
  useEffect(() => {
    onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
      setUserName(doc.data().username);
    });
  }, []);

  return (
    <>
      {show && <AccountDetails show={show} setShow={setShow} />}
      <div className="pt-4 flex items-center justify-between">
        {/* <h2 className="hidden lmd:block text-[2rem] font-bold">Logo</h2> */}
        <div>
          <h1 className="text-[2.5rem] font-bold">
            Hello <span className="text-violet">{username}</span>,
          </h1>
          <p className="text-[1.3rem]"> Welcome</p>
        </div>

        <div className="hidden lmd:block">
          <SearchBar />
        </div>

        <IconButton
          onClick={() => {
            setShow(!show);
          }}
        >
          <AccountCircle
            sx={{
              width: 50,
              height: 50,
              // border: "1px solid black",
              // borderRadius: 50,
            }}
          />
        </IconButton>
      </div>
    </>
  );
};

export default DashboardHeader;
