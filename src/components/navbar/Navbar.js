import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./amb.svg";

function Navbar() {
  const mainMenu = useRef();
  const close = useRef();

  const handleClick = () => {
    if (mainMenu) {
      mainMenu.current.classList.toggle("menu-show");
      console.log("classlist ", mainMenu.current);
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="icon-menu">
          <div className="icon-menu__bar" onClick={handleClick}></div>
        </div>
      </div>
      <nav className="nav-menu">
        <ul className="menu" id="main-menu" ref={mainMenu}>
          <li className="menu__item">
            <div ref={close} className="close" onClick={handleClick}></div>
          </li>
          <li className="menu__item">
            <Link className="btn-secondary" to="/">
              Ordenes de venta
            </Link>
          </li>
          <li className="menu__item ">
            <Link className="btn-primary" to="/createorder">
              Crear orden
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
