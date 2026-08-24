import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Pagination} from 'swiper/modules';

import Header from "../common/Header";
import Footer from "../common/Footer";
import 'swiper/css/pagination';
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
                  <a className="btn btn-primary large-btn">Contact Now</a>
                  <a class="btn btn-secondary ms-2 large-btn">New Project</a>
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
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>
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
                  <a href="" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-4 py-5">
          <div className="container py-5">
              <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects</h2>
              <p>
                created in close partnership with our clients and collaborators. this approach merges industry expertise decades of exprience.<br/> innovation and flexibility to consistently deliver excellence
              </p>
            </div>

            <div className="row pt-4">
              <div className="col-md-4 col-lg-4">
                 <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img
                    src="../../images/icon-1.svg"
                    alt=""
                  />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solution</h3> 
                  </div>
                  <p>Small actions create big impacts. it all begins and ends with each employee committing to safer work practices daily ensuring they return home safety.</p>
                 </div>
              </div>

               <div className="col-md-4 col-lg-4">
                 <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img
                    src="../../images/icon-2.svg"
                    alt=""
                  />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solution</h3> 
                  </div>
                  <p>Small actions create big impacts. it all begins and ends with each employee committing to safer work practices daily ensuring they return home safety.</p>
                 </div>
              </div>

               <div className="col-md-4 col-lg-4">
                 <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img
                    src="../../images/icon-3.svg"
                    alt=""
                  />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solution</h3> 
                  </div>
                  <p>Small actions create big impacts. it all begins and ends with each employee committing to safer work practices daily ensuring they return home safety.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

         <section className="section-3 p-5 bg-light">
          <div className="container-fluid ">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h2>Discover our diverse range of projects</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 col-lg-3">
              <div className="items">
                <div className="service-image">
                  <img
                    src="../../images/construction2.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Kolkata Project</h3>
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
                    src="../../images/construction2.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Kolkata Project</h3>
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
                    src="../../images/construction2.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Kolkata Project</h3>
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
                    src="../../images/construction2.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Kolkata Project</h3>
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
          </div>
        </section>
        <section className="section-5 py-5">
          <div className="container">
             <div className="section-header text-center">
              <span>Testimonials</span>
              <h2>What people are saying about us</h2>
              <p>
               We offer a diverse array of construction services, spanning residental, commercial and industrial projects.
              </p>
            </div>
            <div>
               <Swiper
               modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
             >
                <SwiperSlide>
                      <div className="card shadow border-0">
                       <div className="card-body p-5">
                         <div className="rating">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                         </div>
                         <div className="content pt-4 pb-1">
                           <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus iste, libero voluptates sit rerum praesentium blanditiis odit nemo vero.
                           </p>
                         </div>
                         <hr />
                         <div className="meta d-flex">
                           <div> <img
                    src="../../images/author-2.jpg"
                    alt=""
                    className="w-100"
                  /></div>
                           <div>
                            <h6 className="name ps-3">John Ibrahim</h6>
                            <small className="ps-3">CEO</small>
                           </div>
                         </div>
                       </div>
                      </div>
               </SwiperSlide>
               <SwiperSlide>
                      <div className="card shadow border-0">
                       <div className="card-body p-5">
                         <div className="rating">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                         </div>
                         <div className="content pt-4 pb-1">
                           <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus iste, libero voluptates sit rerum praesentium blanditiis odit nemo vero.
                           </p>
                         </div>
                         <hr />
                         <div className="meta d-flex">
                           <div> <img
                    src="../../images/author-2.jpg"
                    alt=""
                    className="w-100"
                  /></div>
                           <div>
                            <h6 className="name ps-3">John Ibrahim</h6>
                            <small className="ps-3">CEO</small>
                           </div>
                         </div>
                       </div>
                      </div>
               </SwiperSlide>
               <SwiperSlide>
                      <div className="card shadow border-0">
                       <div className="card-body p-5">
                         <div className="rating">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                         </div>
                         <div className="content pt-4 pb-1">
                           <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus iste, libero voluptates sit rerum praesentium blanditiis odit nemo vero.
                           </p>
                         </div>
                         <hr />
                         <div className="meta d-flex">
                           <div> <img
                    src="../../images/author-2.jpg"
                    alt=""
                    className="w-100"
                  /></div>
                           <div>
                            <h6 className="name ps-3">John Ibrahim</h6>
                            <small className="ps-3">CEO</small>
                           </div>
                         </div>
                       </div>
                      </div>
               </SwiperSlide>
               <SwiperSlide>
                      <div className="card shadow border-0">
                       <div className="card-body p-5">
                         <div className="rating">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                         </div>
                         <div className="content pt-4 pb-1">
                           <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus iste, libero voluptates sit rerum praesentium blanditiis odit nemo vero.
                           </p>
                         </div>
                         <hr />
                         <div className="meta d-flex">
                           <div> <img
                    src="../../images/author-2.jpg"
                    alt=""
                    className="w-100"
                  /></div>
                           <div>
                            <h6 className="name ps-3">John Ibrahim</h6>
                            <small className="ps-3">CEO</small>
                           </div>
                         </div>
                       </div>
                      </div>
               </SwiperSlide>
               <SwiperSlide>
                      <div className="card shadow border-0">
                       <div className="card-body p-5">
                         <div className="rating">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                         </div>
                         <div className="content pt-4 pb-1">
                           <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus iste, libero voluptates sit rerum praesentium blanditiis odit nemo vero.
                           </p>
                         </div>
                         <hr />
                         <div className="meta d-flex">
                           <div> <img
                    src="../../images/author-2.jpg"
                    alt=""
                    className="w-100"
                  /></div>
                           <div>
                            <h6 className="name ps-3">John Ibrahim</h6>
                            <small className="ps-3">CEO</small>
                           </div>
                         </div>
                       </div>
                      </div>
               </SwiperSlide>
          </Swiper>
            </div>
          </div>
        </section>
        <section className="section-6 py-4">
          <div className="container py-4">
          <div className="section-header text-center">
              <span>Blog & News</span>
              <h2>Articles & Blog Posts</h2>
              <p>
                We Specialize in a wide range of construction services. including residential commercial and industrial projects.
              </p>
            </div>
          <div className="row">
             <div className="col-md-3 col-lg-3">
                 <div className="card shadow border-0">
                  <div className="card-img-top">
                   <img
                    src="../../images/construction3.jpg"
                    alt=""
                    className="w-100"
                  />

                  </div>
                 
                    <div className="card-body p-4">
                     <div>
                      <a href="#" className="title">Dummy Blog Link</a>
                     </div>
                     <a href="#" className="btn btn-primary">Read More</a>
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
