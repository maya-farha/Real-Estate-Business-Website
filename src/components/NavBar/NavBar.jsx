import React from "react";
import "./NavBar.css";
import "../../index.css";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";

function NavBar({ logo, items, btn }) {
  const [show, setShow] = useState(false);
  const showHandel = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="nav_Bar space">
        <img src={logo} alt="logo" className="logo_Nav" />
        <ul className="items_Nav">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className="link">
                  {item.content}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="btn_Nav">
          <NavLink to={"/Contact"} className="link">
            {btn}
          </NavLink>
        </button>
        <button className="bars" onClick={showHandel}>
          <HiMiniBars3BottomRight />
        </button>
      </nav>
      <div className={`navMenu ${show ? "show" : ""}`}>
        <ul className="items_Bars">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url}>{item.content} </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
