import React from "react";
import NavBar from "../NavBar/NavBar";
import BeansLogo from "../Icons/BeansLogo";
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_item}>
        <NavBar header={false} />
      </div>
      <div className={s.footer_item}>
        <BeansLogo fill="black" stroke="black" />
      </div>
    </div>
  );
};

export default Footer;
