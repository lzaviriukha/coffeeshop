// The NavBar component gets the linksActivity property.
//{header = true} enable bottom border when the component is active
// and on hover by adding the .activity class from NavBar.module.css

// HeaderFooterIcon component track {header = true}.

import React from "react";
import { NavLink } from "react-router-dom";
import HeaderFooterIcon from "../Icons/NavBarIcon";
import s from './NavBar.module.css' // style module

const NavBar = (props) => {
  const {header = true} = props;

  const activeStyle = ({isActive}) => (isActive && header) ? s.activeLink : undefined;
  const linksClasses = `${header ? s.activity : s.default}`; 

  return (
      <nav className={s.navBar}>
        <ul className={s.navBar_list}>
          <li className={linksClasses}>
            <NavLink to="/" className={activeStyle}>
              <HeaderFooterIcon header={header ? true : false}/>
              Coffee house
            </NavLink>
          </li>
          <li className={linksClasses}>
            <NavLink to="/ourcoffee" className={activeStyle}>Our coffee</NavLink>
          </li>
          <li className={linksClasses}>
            <NavLink to="/pleasure"className={activeStyle}>For your pleasure</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
