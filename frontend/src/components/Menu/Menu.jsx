/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import FilterIcon from "../../assets/filter.png";
import ChecklistIcon from "../../assets/checklist.png";
import GameIcon from "../../assets/game.png";
import ShopeIcon from "../../assets/shope.png";
import AboutUsIcon from "../../assets/aboutus.png";

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    document.getElementById("menuclose").classList.toggle("active");
  };

  return (
    <div className={`menu ${isMenuOpen ? "open" : ""}`}>
      <input
        type="checkbox"
        id="toggle"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label id="show-menu" htmlFor="toggle">
        <div
          className={`btn ${isMenuOpen ? "active" : ""}`}
          id="menuclose"
          onClick={handleMenuClick}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <NavLink to="/filter" className="btn">
          <img src={FilterIcon} className="material-icons " alt="Filter" />
        </NavLink>
        <NavLink to="/checklist" className="btn">
          <img
            src={ChecklistIcon}
            alt="CheckList"
            className="material-icons "
          />
        </NavLink>
        <NavLink to="/game" className="btn">
          <img src={GameIcon} alt="Game" className="material-icons" />
        </NavLink>
        <NavLink to="/shope" className="btn">
          <img src={ShopeIcon} alt="Shope" className="material-icons" />
        </NavLink>
        <NavLink to="/aboutus" className="btn">
          <img src={AboutUsIcon} alt="AboutUs" className="material-icons " />
        </NavLink>
      </label>
    </div>
  );
}

export default Menu;
