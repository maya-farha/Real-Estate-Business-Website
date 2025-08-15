import React from "react";
import "./NavBar.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import "../../index.css";
import { Link, NavLink } from "react-router-dom";
>>>>>>> master
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";

function NavBar({ logo, items, btn }) {
  const [show, setShow] = useState(false);
  const showHandel = () => {
    setShow(!show);
  };

  return (
    <>
<<<<<<< HEAD
      <nav className="nav_Bar space" style={{ backgroundColor: "#1A1A1A" }}>
        <img src={logo} alt="" className="logo_Nav" />
=======
      <nav className="nav_Bar space">
        <img src={logo} alt="logo" className="logo_Nav" />
>>>>>>> master
        <ul className="items_Nav">
          {items.map((item, index) => {
            return (
              <li key={index}>
<<<<<<< HEAD
                <Link to={item.url}>{item.content}</Link>
=======
                <NavLink to={item.url} className="link">
                  {item.content}
                </NavLink>
>>>>>>> master
              </li>
            );
          })}
        </ul>
        <button className="btn_Nav">
<<<<<<< HEAD
          <Link to={"/Contact"}>{btn}</Link>
=======
          <NavLink to={"/Contact"} className="link">
            {btn}
          </NavLink>
>>>>>>> master
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
<<<<<<< HEAD
                <Link to={item.url}>{item.content} </Link>
=======
                <NavLink to={item.url}>{item.content} </NavLink>
>>>>>>> master
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
