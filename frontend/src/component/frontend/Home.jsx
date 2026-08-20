import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazin Construction</span>
                <h1>
                  Crafting dreams with <br /> precision and excellence.
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftsman <br /> attention to detail. With years
                  of experience and dedication to quality
                </p>
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
                <p>
                  Building enduring structures requires a comprehensive aaproach
                  that combines advanced materials. resilient design. routine
                  maintenance and sustainable practices. By drawing on
                  historical insights and utilizing modern technology. designing
                  structures that stand the test of time involves a seamless
                  blend of cutting-edge materials. durables design. ongoing
                  upkeep. and eco-friendly practices. By combining lessons from
                  the past with the power of modern technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-3 p-5 bg-light">
          <div className="container-fluid ">
            <div className="section-header text-center">
                <span>Our Services</span>
                <h2>Our construction services</h2>
                <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.
                </p>
            </div>
          </div>
          <div className="row">
           <div className="col-md-3 col-lg-3">
            <div className="items">
             <div className="service-image">
               <img src="" alt="" />
             </div>
             <div className="service-body">
                <div className="service-title">
                 <h3>Specialty Construction</h3>
                </div>
                <div className="service-content">
                   <p>
                    Speacially 
                   </p>
                </div>
             </div>
            </div>
           </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
