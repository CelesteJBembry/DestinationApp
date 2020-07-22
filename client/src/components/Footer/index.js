import React from "react";
import styles from './index.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary footer">
      <Link className="navbar-brand" to="/Contact">
        Contact Us
      </Link>
    </nav>
  );
}

export default Footer;
