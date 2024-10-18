import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

const Cart = () => {
  // const items = useSelector(state => state)
  const items = useSelector(getItemsSelector)
  const totalprice = items.reduce((a,b) => a+b.price , 0)
  console.log("items",items)
  return (
    <div className="alert alert-success"> 
      <h3 className="text-center">  Total Items: {items.length} , {totalprice} </h3>
    </div> 
  );
};

export default Cart;
