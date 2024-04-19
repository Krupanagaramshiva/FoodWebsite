import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner/Banner";
import "./home.css";
import Footer from "./Footer";
import Toplistveg from "./Toplistveg";
import Bannerposter from "./Bannerposter";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="banner">
        <Banner />
      </div>
     <hr />
      <div className="bannerposter">
          <Bannerposter/>
        </div>

<hr />
       <div className="toplist">
        <Toplistveg/>
       </div>
      <hr />
      <div className="section">
          <Footer/>
        </div>

      

        
      </div>
    
  );
};

export default Home;
