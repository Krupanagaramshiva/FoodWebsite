import React from 'react'
import logo from '../src/Banner/cloudkitchen.jpg'
import './bannnerposter.css';

const Bannerposter = () => {
  return (
    <div className='container'>
        <div className='imgwrapper'>
            <img src={logo} alt="image" />
            </div>
        <div className="contentwrapper">
          <div className="content">
            <span className="textwrapper">
              <span>Cloud Kitchen</span>
              <h1>Biryani Adda</h1>
              <p>
              A cloud kitchen specializing in biryani, crafted with premium ingredients and a commitment to organic vegetables, offers a diverse array of regional styles. From the fiery spices of Andhra to the aromatic richness of Kerala, and from the robustness of Guntur to the vibrant flavors of Mumbai, each biryani promises a unique culinary adventure. Our chefs skillfully blend traditional recipes with modern techniques, ensuring that every dish is a harmonious balance of flavors and textures, cooked to perfection.
              <br /><br />
              At our cloud kitchen, we strive to elevate the biryani experience, offering not just a meal but a journey through the diverse landscape of Indian cuisine. Whether you crave the tangy zest of Andhra biryani, the fragrant allure of Kerala biryani, or the hearty indulgence of Mumbai biryani, our menu promises to tantalize your taste buds and transport you to the bustling streets and vibrant kitchens of India.
              </p>
              <a href="">vistpage</a>
            </span>
          </div>

        </div>
      
    </div>
  )
}

export default Bannerposter
