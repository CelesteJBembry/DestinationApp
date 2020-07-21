import React from "react";
import { Link } from "react-router-dom";


function NavTabs(props) {

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/Home"
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">

        <Link
          to="/Quiz"
          className={props.currentPage === "Quiz" ? "nav-link active" : "nav-link"}
        >
          Quiz
        </Link>
      </li>
      <li className="nav-item">

        <Link
          to="/Destination"
          className={props.currentPage === "Destination" ? "nav-link active" : "nav-link"}
        >
          Destination
        </Link>
      </li>
      <li className="nav-item">

        <Link
          to="/Contact"
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Us
        </Link>
      </li>
    </ul >
  );
}

export default NavTabs;
