import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyBurger } from "../redux";

const HooksBurgerContainer = () => {
  const numOfBurger = useSelector((state) => state.burger.numOfBurgers);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of burgers = {numOfBurger}</h2>
      <button onClick={()=> dispatch(buyBurger())}>Buy Burger</button>
    </div>
  );
};

export default HooksBurgerContainer;
