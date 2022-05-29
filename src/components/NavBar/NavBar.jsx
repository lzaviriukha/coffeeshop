// The NavBar component gets the linksActivity property.
//{linksActivity = true} enable bottom border when the component is active
// and on hover by adding the .activity class from NavBar.module.css

import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoImg } from "./Group.svg";
import s from './NavBar.module.css' // style module

const NavBar = (props) => {
  const {linksActivity = true} = props;

  const activeStyle = ({isActive}) => (isActive && linksActivity) ? s.activeLink : undefined;
  const linksClasses = `${linksActivity ? s.activity : null}`; 

  return (
      <nav className={s.navBar}>
        <ul className={s.navBar_list}>
          <li className={linksClasses}>
            <NavLink to="house" className={activeStyle}>
              <LogoImg className={s.logoImage}/>
              Coffee house
            </NavLink>
          </li>
          <li className={linksClasses}>
            <NavLink to="ourcoffee" className={activeStyle}>Our coffee</NavLink>
          </li>
          <li className={linksClasses}>
            <NavLink to="pleasure"className={activeStyle}>For your pleasure</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
