import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
  return (
    <div className="cart">
      <h3>Order Summery </h3>
      <p>Selected Items :{cart.length}</p>
      <p>Total Shipping Charge: $</p>
      <p>Tax: $</p>
      <h4>Grand Total: $1559</h4>
    </div>
  );
};

export default Cart;
