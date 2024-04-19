import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Customer.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Customer = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
  }, []);
  let resultArray = data.map((d, index) => (
    <div className="cart">
      <span className="prdName">{d.itemname}</span>
      <img src={d.image} height={100} width="100" />
      <span className="prdPrice">₹{d.price} </span>
      <Link to={"/view/"+d.id}>view</Link>
    
      <br />
    </div>
  ));
  return (
    <>
      <div className="mb-4">
        <NavBar />
      </div>
      <br /> <br />
      <div className="mb-5">{resultArray}</div>

    </>
  );
};

export default Customer;
