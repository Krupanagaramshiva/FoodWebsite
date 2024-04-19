import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import OrderConfirmation from './OrderConfirmation';
import './shoppingcart.css';

function ShoppingCart() {
  const [cartArray, setCartArray] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    checkUserLogin();
    getCartItems();
  }, []);

  function checkUserLogin() {
    let userId = sessionStorage.getItem("USER_ID");
    if (userId == null || userId === undefined) {
      navigate("/Login");
    }
  }

  function getCartItems() {
    let userId = sessionStorage.getItem("USER_ID");
    if (userId != null) {
      let url = "http://localhost:3000/cart?userName=" + userId;
      axios.get(url).then((resData) => {
        setCartArray(resData.data);
        setTotalAmount(calculateTotal(resData.data));
      });
    }
  }

  function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.total, 0);
  }

  function checkOutButtonClick() {
    let orderObj = {
      orderDate: new Date(),
      userName: cartArray[0].userName,
      totalAmount: totalAmount,
    };
  
    let url = "http://localhost:3000/order";
    axios.post(url, orderObj).then((res) => {
      setOrderPlaced(true);
      setOrderId(res.data.id); // Set the orderId state with the newly created order ID
      clearCart();
      navigate("/order");
    });
  }
  
  function clearCart() {
    setCartArray([]);
    setTotalAmount(0);
  }

  function removeItem(index) {
    const itemId = cartArray[index].id;
    const removedItemTotal = cartArray[index].total;
    const updatedCart = [...cartArray];
    updatedCart.splice(index, 1);
    setCartArray(updatedCart);
    
    const newTotalAmount = totalAmount - removedItemTotal;
    setTotalAmount(newTotalAmount);

    const url = `http://localhost:3000/cart/${itemId}`;
    axios.delete(url).then(() => {
      console.log("Item removed from server successfully.");
    }).catch(error => {
      console.error("Error removing item from server:", error);
    });
  }

  let resultArray = cartArray.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td><img src={item.image} alt="Product" className="productImage" /></td>
      <td>{item.itemname}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.total}</td>
      <td>
        <button onClick={() => removeItem(index)} className="actionButton">Remove</button>
      </td>
    </tr>
  ));

  if (orderPlaced) {
    console.log("orderId:", id); // Add this line to check orderId
    return <OrderConfirmation orderId={id} userName={cartArray[0].userName} totalAmount={totalAmount} />;
  }
  
  

  return (
    <>
      <div>
        <NavBar />
      </div>
      <h3>Shopping Cart</h3>
      <hr />

      <table className="shoppingCartTable">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {resultArray}
        </tbody>
      </table>
      <h1 className='totalamount'>
        Final Total : <span >{totalAmount.toFixed(2)}</span>
      </h1>
      <hr />
      <button onClick={checkOutButtonClick} className="checkoutButton">Check Out (Place Order)</button>
    </>
  );
}

export default ShoppingCart;
