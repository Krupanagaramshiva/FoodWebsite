
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  

  function navigateToProductsByCategory(category)
  {
     
       window.location.href = "/ProductByCategory/"+ category;
  }

  return (
    
    <div className="container">
      <nav className="fixed-top navbar navbar-expand-sm bg-dark navbar-dark" style={{ height: '70px' }}>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

        <NavLink className="navbar-brand" to="/">
          <span className="birayani">BIRYANI</span> /
          <span className="adda">adda</span>
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
        

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/adminCurd"
                activeClassName="active"
              >
                Admin
                <div className="border-bottom border-primary"></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ShoppingCart">
                cart
              </NavLink>
            </li>

            <li class="nav-item dropdown">
      <a 	class="nav-link dropdown-toggle" href="#" id="navbardrop" 
			data-bs-toggle="dropdown">
       Categories
      </a>
      <div class="dropdown-menu">       
        <a href="javascript:void(0);" class="dropdown-item" onClick={()=> navigateToProductsByCategory('veg')}>VEG</a>
        <a href="javascript:void(0);" class="dropdown-item" onClick={()=> navigateToProductsByCategory('non-veg')}>NON-VEG</a>
      </div>   
	</li>
          </ul>
        </div>
      </nav>
    </div>
  );  
};

export default NavBar;
