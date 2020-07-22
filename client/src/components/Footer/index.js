import React from "react";
import styles from './index.css';
import { Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar sticky="bottom" >
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary footer">
      <a className="navbar-brand" href="/">
        Destiny App
      </a>
    </nav>
    </Navbar>
  );
}

export default Footer;
