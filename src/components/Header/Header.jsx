import React from "react";
import NavBar from "../NavBar/NavBar";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={`${s.headerContainer} ${s.headerContainer__mainPageBackground}`}>
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
