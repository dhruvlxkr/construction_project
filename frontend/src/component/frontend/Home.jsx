import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <>
      <div className="container py-3">
        <header>
          <Navbar expand="lg">
            <Navbar.Brand href="#home" className="logo">
              <span>Jai Sawariya</span> Construction
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  About Us
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Services
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Blogs
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    </>
  );
};

export default Home;
