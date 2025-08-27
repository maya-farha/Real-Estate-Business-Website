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
      <nav className="nav_Bar white-spacing">
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
        <div>
          <button className="btn_Nav">
            <Link to={"/Contact"} className="link">
              {btn}
            </Link>
          </button>
          <button className="btn_Nav">
            <Link to={"/dashboard"} className="link">
              dashboard
            </Link>
          </button>
        </div>

        <button className="bars" onClick={showHandel}>
          <HiMiniBars3BottomRight />
        </button>
      </nav>
      <div className={`navMenu ${show ? "show" : ""}`}>
        <button className="closeBtn" onClick={showHandel}>
          x
        </button>

        <ul className="items_Bars">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.url}
                  onClick={showHandel}
                  className="barsLink"
                >
                  {item.content}{" "}
                </NavLink>
              </li>
            );
          })}
          <li>
            <NavLink to={"/contact"} onClick={showHandel}>
              contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"} onClick={showHandel}>
              dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
