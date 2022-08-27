import React, { useState, useEffect } from "react";
import { List, Paper } from "@mui/material";
import Item from "./Item";
import EntryForm from "./EntryForm";

const ItemsDisplay = ({ toggle }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data = [
    { Item: "Cash", price: 500, id: 1 },
    { Item: "Book", price: -500, id: 2 },
    { Item: "Insurance", price: 500, id: 3 },
    { Item: "Birthday", price: -500, id: 4 },
    { Item: "Food", price: 500, id: 5 },
    { Item: "Course", price: 500, id: 6 },
    { Item: "Salary", price: 500, id: 7 },
    { Item: "Gift", price: 500, id: 8 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
    { Item: "Travel", price: 500, id: 9 },
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
            maxHeight: 350,
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
            marginTop: 20,
            maxHeight: 350,
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
        <EntryForm></EntryForm>
      )}
    </>
  );
};

export default ItemsDisplay;
