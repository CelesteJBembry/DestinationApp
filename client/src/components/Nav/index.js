import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Quiz"
          onClick={() => props.handlePageChange("Quiz")}
          className={props.currentPage === "Quiz" ? "nav-link active" : "nav-link"}
        >
          Quiz
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Destination"
          onClick={() => props.handlePageChange("Destination")}
          className={props.currentPage === "Destination" ? "nav-link active" : "nav-link"}
        >
          Destination
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
