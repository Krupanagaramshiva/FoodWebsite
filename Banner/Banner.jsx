import React from 'react';
import logo from '../../src/Banner/panner.png';
import logo1 from '../../src/Banner/bannerlogo.png';
import logo2 from '../../src/Banner/banner.special.png';
import './banner.css';

const Banner = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide" >
        <div className="carousel-inner ">
          <div className="carousel-item active">
          <img src={logo} className="d-block w-100" alt="1" />
               
          </div>
          <div className="carousel-item">
            <img src={logo2} className="d-block w-100 "  alt="2" />
          </div>
          <div className="carousel-item">
            <img src={logo1} className="d-block w-100 " alt="3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Banner;
