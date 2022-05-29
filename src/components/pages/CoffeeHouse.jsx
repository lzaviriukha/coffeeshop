import React from "react";
import Header from "../Header/Header";
import BeansLogo from "../Icons/BeansLogo";

import s from "./CoffeeHouse.module.css";

const headerText = (
  <>
    <h1>Everything You Love About Coffee</h1>
    <p className={s.beansLogo}><BeansLogo /></p>
    <p >We makes every day full of energy and taste</p>
    <p>Want to try our beans?</p>
  </>
);

const CoffeeHouse = () => {
  return (
    <div>
      <Header>{headerText}</Header>
    </div>
  );
};

export default CoffeeHouse;
