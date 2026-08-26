import React from 'react'
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";

const Blog = () => {
  return (
   <>
    <Header />
      <main>
        <Hero preHeadig="Quality Intergrity Value" Heading="Blogs" Content=" We excel at transforming visions into reality."></Hero>
        <section className="section-3 p-5 bg-light">
          <div className="container-fluid ">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h2>Our construction services</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>
          
          <div className="row mt-5">
            <div className="col-md-3 col-lg-3">
              <div className="items">
                <div className="service-image">
                  <img
                    src="../../images/construction1.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Speacially construction is a niche sector within the
                      construction industry that focuses on projects requiring
                      specialized skills, materials and techniques
                    </p>
                  </div>
                  <a href="" className="btn btn-primary small-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3">
              <div className="items">
                <div className="service-image">
                  <img
                    src="../../images/construction1.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Speacially construction is a niche sector within the
                      construction industry that focuses on projects requiring
                      specialized skills, materials and techniques
                    </p>
                  </div>
                  <a href="" className="btn btn-primary small-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3">
              <div className="items">
                <div className="service-image">
                  <img
                    src="../../images/construction1.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Speacially construction is a niche sector within the
                      construction industry that focuses on projects requiring
                      specialized skills, materials and techniques
                    </p>
                  </div>
                  <a href="" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3">
              <div className="items">
                <div className="service-image">
                  <img
                    src="../../images/construction1.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Speacially construction is a niche sector within the
                      construction industry that focuses on projects requiring
                      specialized skills, materials and techniques
                    </p>
                  </div>
                  <a href="" className="btn btn-primary small-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
    <Footer />
    
    </>
  )
}

export default Blog