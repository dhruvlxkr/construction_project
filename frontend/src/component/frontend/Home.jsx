import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <>

        <header>
                <div className="container py-3">
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
           </div>
        </header>

        <main>
          <section className="section-1">
           <div className="hero d-flex align-items-center">
            <div className="container-fluid">
             <div className="text-center">
               <span>Welcome Amazin Construction</span>
               <h1>Crafting dreams with <br/> precision and excellence.</h1>
               <p>We excel at transforming visions into reality through outstanding craftsman <br/> attention to detail. With years of experience and dedication to quality</p> 
               <div className="mt-5">
                <a className="btn btn-primary">Contact Now</a>
               <a class="btn btn-secondary ms-2">New Project</a>
               </div>
              
             </div>
             
            </div>
           </div>
          </section>
          <section className="section-2 p-5">
              <div className="container p-5">
                <div className="row">
                  <div className="col-md-6">
                    <img src="./images/about-us.jpg" alt="" className="w-100" />
                  </div>
                  <div className="col-md-6">
                    <span>about Us</span>
                    <h2>Crafting structures that last a lifetime</h2>
                    <p>Building enduring structures requires a comprehensive aaproach that combines advanced materials. resilient design. routine maintenance and sustainable practices. By drawing on historical insights and utilizing modern technology.
                      designing structures that stand the test of time involves a seamless blend of cutting-edge materials. durables design. ongoing upkeep. and eco-friendly practices. By combining lessons from the past with the power of modern technology.
                    </p>
                  </div>
                </div>
              </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h3 >Jai Sawariya Construction</h3>
                <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
              </div>
              <div className="col-md-3">
                   <h3>Our Services</h3>
                   <ul>
                       <li><a href="">Specialty Construction</a></li>
                       <li><a href="">Civil Construction</a></li>
                       <li><a href="">Residential Const</a></li>
                       <li><a href=""></a></li>
                       <li><a href=""></a></li>
                       <li><a href=""></a></li>
                   </ul>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </footer>
     

    </>
  );
};

export default Home;
