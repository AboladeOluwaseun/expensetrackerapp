import React from "react";
import Item from "./Item";

const ItemsDisplay = ({ toggle }) => {
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
  ];
  const dataDisplay = data.map((dataItem, index) => {
    return (
      <li key={index}>
        {" "}
        <Item name={dataItem.Item} amount={dataItem.price} />
      </li>
    );
  });
  return (
    <>
      {!toggle ? (
        <ul className="max-w-[100%] overflow-x-hidden scrollbar-hide md:scrollbar-default lmd:max-h-[90%] overflow-auto">
          {dataDisplay}
        </ul>
      ) : (
        <div className=" bg-gray-900 rounded-lg">entry form</div>
      )}
    </>
  );
};

export default ItemsDisplay;
