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
      <nav className="nav_Bar space" style={{ backgroundColor: "#1A1A1A" }}>
        <img src={logo} alt="" className="logo_Nav" />
        <ul className="items_Nav">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.content}</Link>
              </li>
            );
          })}
        </ul>
        <button className="btn_Nav">
          <Link to={"/Contact"}>{btn}</Link>
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
                <Link to={item.url}>{item.content} </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
