import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3>Jai Sawariya Construction</h3>
            <div className="pe5">
              <p>
                Our post-construction services gives you peace of mind knowing
                that we are still here for you even after.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h3 class="mb-3">Our Services</h3>
            <ul>
              <li>
                <a href="">Specialty Construction</a>
              </li>
              <li>
                <a href="">Civil Construction</a>
              </li>
              <li>
                <a href="">Residential Const</a>
              </li>
              <li>
                <a href="">Corporate Construction</a>
              </li>
              <li>
                <a href="">Building Construction</a>
              </li>
              <li>
                <a href="">Industrial Construction</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <h3 class="mb-3">Our Links</h3>
            <ul>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 class="mb-3">Contacts</h3>
            <span>888-00-0000</span>
            <p>
              info@example.com
              <br />
              Chittorgarh Rajasthan
            </p>
          </div>
          <hr className="mt-4"></hr>

          <div className="text center pt-2 text-center">
            Copyright @ 2026 Jai Sawariya Construction. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
