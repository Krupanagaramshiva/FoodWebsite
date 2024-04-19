import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css';
import { FaInstagram, FaFacebook, FaYoutube,FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
         <footer>
        <h1 className='mainheader'>
        <span className="birayani">BIRYANI</span> /
          <span className="adda">adda</span>
        </h1>
        <hr />
        <div className="container">
       <div className="row">
        <div className="footer-col">
            <h4>service</h4>
            <ul>
                <li><Link>Company</Link></li>
                <li><Link>About us</Link></li>
                <li><Link>Help center</Link></li>
                <li><Link>Blog</Link></li>
            </ul>
        </div>
        <div className="footer-col">
            <h4>category</h4>
            <ul>
                <li><Link>veg</Link></li>
                <li><Link>Non-veg</Link></li>
            </ul>
        </div>
        <div className="footer-col">
            <h4>Consumer</h4>
            <ul>
                <li><Link>payments</Link></li>
                <li><Link>shipping</Link></li>
                <li><Link>product Returns</Link></li>
                <li><Link>product Returns</Link></li>
            </ul>
        </div>
       </div>
        </div>
        <hr />
        <h1 className='header'>Copyright 2024 © biryaniAdda eCommerce website. 
        <span className='end'>
          <FaInstagram className='icon' />
          <FaFacebook className='icon' />
          <FaYoutube className='icon' />
          <FaWhatsapp className='icon'/>
        </span>
            </h1>
         </footer>
    </div>
  )
}

export default Footer
