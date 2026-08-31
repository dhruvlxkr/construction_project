import React from 'react'
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";

const Contactus = () => {
  return (
    <>
     <Header />
      <main>
        <Hero preHeadig="Quality Intergrity Value" Heading="Contact Us" Content=" We excel at transforming visions into reality."></Hero>
        <section className='section-9 py-5'>
                 <div className='container'>
                <div className="section-header text-center">
              {/* <span></span> */}
              <h2>Contact Us</h2>
              <p>
                Our Dedicated, experts  are here to help you with any of your questions, contacts us by <br /> filling out the form below and we will be in touch shortly
              </p>
            </div>
            <div className='row'>
                 <div className='col-md-3'>
                  <div className='card shadow border-0 p-4 mb-3'>
                 <div className="card-body">
                   <h3>Call Us</h3>
                  <a href="#">+91 8956533333</a>
                  <a href="#">+91 8956533333</a>
                   
                   <h3 className='mt-4'>You Can Write us</h3>
                   <a href="#">construction@gmail.com</a>
                    <a href="#">info@gmail.com</a>

                     <h3 className='mt-4'>Address</h3>
                     <div>Sawariya Construction Chittorgarh Rajasthan 310000</div>
                 </div>

                  </div>

                 </div>
                    <div className='col-md-9'>
                        <div className='card shadow border-0 p-4'>
                         <div className="card-body">
                             <form action="">
                          <div className="row mt-5">
                            <div className="col-md-6 mb-4">
                              <label htmlFor="" className='form-label'>Name</label>
                              <input type="text" className='form-control form-control-lg' placeholder='Enter Name' />
                            </div>
                            <div className="col-md-6 mb-4">
                              <label htmlFor="" className='form-label'>Email</label>
                              <input type="email" className='form-control form-control-lg' placeholder='Enter Email' />
                            </div>
                          </div>
                           <div className="row">
                            <div className="col-md-6 mb-4">
                              <label htmlFor="" className='form-label'>Phone</label>
                              <input type="text" className='form-control form-control-lg' placeholder='Enter Phone No' />
                            </div>
                            <div className="col-md-6 mb-4">
                              <label htmlFor="" className='form-label'>Subject</label>
                              <input type="text" className='form-control form-control-lg' placeholder='Enter Subject' />
                            </div>
                            <div>
                               <label htmlFor="" className='form-label'>Message</label>
                               <textarea name="message" id="message" className='form-control form-control-lg' rows={5} placeholder='Message'></textarea>
                            </div>
                          </div>
                          <button className='btn btn-primary large mt-3'>Submit</button>
                        </form>
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

export default Contactus