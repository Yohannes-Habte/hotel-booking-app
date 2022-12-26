import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdPerson, MdForwardToInbox, MdHelpOutline } from "react-icons/md"
import { AiFillEdit, AiOutlineLogout } from "react-icons/ai";
import "./Navbar.scss";
import { useRef } from "react";

const Navbar = () => {
  // State variables
  const [ open, setOpen ] = useState(true);

  // Function that open and close the drop down menue 
  const handleClick = () => {
    setOpen(!open);
  }

  // To detect where the user has clicked in the dropdown menu
  const clickRef = useRef()

  // Function that is used to close the opend dropdown menu by clicking on any part of the screen.
  useEffect(() => {
    let handler = (event) => {
      if(!clickRef.current.contains(event.target)) {
        setOpen(true);
        console.log(handler)
      }
    };

    document.addEventListener("mousedown", handler);

    // to revove the event listener
    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });


  return (
    <nav className="navbar" >
      <div className="nav-container" ref={clickRef}>
        <div className="logo-buttons-wrapper">
          <NavLink to="/" className="logo">Hotel Booking in LisaConsult </NavLink>

          <div className="navbar-btn-container">
            <button className="navbar-btn"> Register </button>
            <button className="navbar-btn"> Login </button>
          </div>
        </div>

        <div className="navbar-menu-container">
          <div onClick={handleClick} className="navbar-icon-wrapper">
            <MdPerson className="navbar-icon" />
          </div>
          <ul className= {open ? "hide" : "dorpdown-menu"}>
            <li className="dropdown-menu-item"> 
              <AiFillEdit className="dropdown-icon" /> 
              <NavLink className="item-link"> Edit Profile </NavLink> 
            </li>
            <li className="dropdown-menu-item"> 
              <MdForwardToInbox className="dropdown-icon" /> 
              <NavLink className="item-link"> Inbox </NavLink> 
            </li>
            <li className="dropdown-menu-item"> 
              <MdHelpOutline className="dropdown-icon" /> 
              <NavLink className="item-link"> Help </NavLink> 
            </li>
            <li className="dropdown-menu-item"> 
              <AiOutlineLogout className="dropdown-icon" /> 
              <NavLink className="item-link"> Logout </NavLink> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
