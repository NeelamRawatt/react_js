import React from "react";
import "./style.css";
import { Nav, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/home">INTERNSHALA</NavLink>
        <div className="dropdown">
          <button className="dropbtn">Internships</button>
          <div className="dropdown-content">
            <NavLink to="">Link 1</NavLink>
            <NavLink to="">Link 2</NavLink>
            <div className="dropdown">
              <button className="dropbtn">Link 3</button>
              <div className="dropdown-content">
                <NavLink to="">Link 1</NavLink>
                <NavLink to="">Link 2</NavLink>
                <NavLink to="">Link 3</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="navItem">
          <div className="dropdown">
            <button className="dropbtn">
              {" "}
              <NavLink to="/nested">Courses </NavLink>
            </button>

            <div className="dropdown-content">
              <NavLink to="">Link 1</NavLink>
              <NavLink to="">Link 2</NavLink>
              <NavLink to="">Link 3</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
