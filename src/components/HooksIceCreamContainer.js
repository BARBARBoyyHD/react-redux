import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

const HooksIceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Hook of IceCream</h2>
      <h3>Number of Ice Cream - {numOfIceCream}</h3>
      <button onClick={()=> dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
};

export default HooksIceCreamContainer;
