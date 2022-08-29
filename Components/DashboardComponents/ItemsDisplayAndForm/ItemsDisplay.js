import React, { useState, useEffect } from "react";
import { List, Paper } from "@mui/material";
import Item from "./Item";
import EntryForm from "./EntryForm";

const ItemsDisplay = ({ toggle }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data = [
    { Item: "Cash", price: 500, id: 1 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Book", price: -500, id: 2 },

    ,
    ,
  ];
  const dataDisplay = data.map((dataItem, index) => {
    return (
      <li key={index}>
        {" "}
        <Item name={dataItem.Item} amount={dataItem.price} />
      </li>
    );
  });
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
      {windowWidth > 924 ? (
        <Paper
          style={{
            borderRadius: "8px",
            marginTop: -8,
            maxHeight: 250,
            overflow: "auto",
          }}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          <List>{dataDisplay}</List>
        </Paper>
      ) : !toggle ? (
        <Paper
          style={{
            borderRadius: "8px",
            marginTop: 30,
            maxHeight: 430,
          }}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          <List>{dataDisplay}</List>
        </Paper>
      ) : (
        <EntryForm windowWidth={windowWidth}></EntryForm>
      )}
    </>
  );
};

export default ItemsDisplay;
