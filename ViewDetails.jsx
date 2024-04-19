import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ViewDetails.css';
import NavBar from './NavBar';

function ViewDetails() {
  const [qty, setQty] = useState(1);
  const [productObj, setProductObj] = useState({
    id: 0,
    category: '',
    itemname: '',
    price: 0,
    image: '',
    description: '',
  });

  const { id } = useParams();
  const navigate =useNavigate()

  useEffect(() => {
    getSelectedProductDetails();
  }, []);

  function getSelectedProductDetails() {
    axios.get(`http://localhost:3000/user/`+id)
      .then((res) => {
        setProductObj(res.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }

  function addToCartButtonClick() {
    let userId = sessionStorage.getItem("USER_ID");
    if(userId == null || userId == undefined)
    {
        alert("Please Login before adding items to Cart");
        navigate("/Login");
        return;
    }
    let cartObj = {};
    cartObj.id = 0; 
    cartObj.image =productObj.image;
    cartObj.itemname = productObj.itemname;			
    cartObj.price = productObj.price;
    cartObj.quantity  =  qty;
    cartObj.total       =   productObj.price * qty;			  			 
    cartObj.userName   =   sessionStorage.getItem("USER_ID");

    let url = "http://localhost:3000/cart";
    axios.post(url,  cartObj).then((resData)=>
    {
        navigate("/ShoppingCart");
    })
  }
  return (
    <div>
     
      <div>
        <NavBar/>
      </div>
      <hr />

      <div className="detailsCard">
    
      <h3 className='header'>Product Details</h3>
      <hr />
        <img src={productObj.image}  alt="Product" />
        <br />
        <span className="prdName">{productObj.itemname}</span> <br />
        <span className='qtyButtons'>
          Quantity : &nbsp;&nbsp;
          <button onClick={() => setQty(qty + 1)}>+</button>
          &nbsp;&nbsp;
          {qty}
          &nbsp;&nbsp;
          <button onClick={() => { if (qty > 1) setQty(qty - 1) }}>-</button>
        </span>{' '}
        <br />

        <span className='price'> Unit Price :<span className='rupee'>₹</span>  {productObj.price.toFixed(2)}</span>
        <br />
        <button className='addToCartButton' onClick={addToCartButtonClick}>Add To Cart</button>
      </div>

      <hr />
     
    </div>
  );
}

export default ViewDetails;
