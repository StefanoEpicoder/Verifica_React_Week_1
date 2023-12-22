import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="px-3 py-1">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="fw-bold">
            Home <span className="visually-hidden">(current)</span>
          </Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="d-flex">
        <FaSearch className="iconsHeader mx-3" /> <div id="kids">KIDS</div>
        <FaBell className="iconsHeader mx-3" />
        <FaUserAlt className="iconsHeader mx-3" />
      </div>
    </Navbar>
  );
};

export default TopBar;
