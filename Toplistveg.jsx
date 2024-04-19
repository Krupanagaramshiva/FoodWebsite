import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Customer.css";
import { Link } from 'react-router-dom';
const Toplistveg = () => {

    const [data,setdata]=useState([]);

    useEffect(()=>
    { 
        axios.get('http://localhost:3000/user?_limit=5')
        .then((res)=>setdata(res.data))
        .catch(error =>console.log(error))
    },[]
    )
    let resultArray = data.map((d, index) =>  
    <div className="cart" key={index}>
            <span className="prdName">{d.itemname}</span>
            <img src={d.image} height={100} width="100" />
            <span className="prdPrice">₹{d.price}</span>
            <Link to={"/view/"+d.id}>view</Link>
            <br />
        </div>
    
 );
  return (
    <div>
      <div>
      <h1 ><span>Biryani Adda Special </span></h1>
      </div>
      {resultArray}
    </div>
  )
}

export default Toplistveg

