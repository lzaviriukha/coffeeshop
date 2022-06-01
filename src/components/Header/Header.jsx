import React from "react";
import { useMatch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import s from "./Header.module.css";

const Header = (props) => {
  const ourCoffePagePath = useMatch("/ourcoffee");

  const mainPageClasses = `${s.mainPage_header__height} ${s.headerContainer__mainPageBackground}`
  const ourCoffeePageClassees = `${s.ourCoffee_header__height} ${s.headerContainer__ourCoffeePageBackground}`
  const relativeCLasses = ourCoffePagePath ? ourCoffeePageClassees : mainPageClasses
  return (
    <div className={`${s.headerContainer} ${relativeCLasses}`}>
      <div className={s.navbarContainer}>
        <NavBar />
      </div>
      <div className={s.children}>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
