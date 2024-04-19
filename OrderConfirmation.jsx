import React from "react";
import NavBar from "./NavBar";

function OrderConfirmation({ id }) {
  console.log("orderId in OrderConfirmation:", id); 
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h3 className="header bg-success">Order Confirmation</h3>
        <hr />
      </div>
      <div className="text-center">
        <h1>Your Order Id: {id}</h1>
        <hr />
        <p className="text-white bg-dark">
          Your order has been successfully placed. Thank you for shopping with
          us!
        </p>
      </div>
    </div>
  );
}

export default OrderConfirmation;
