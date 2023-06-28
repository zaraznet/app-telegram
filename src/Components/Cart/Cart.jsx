import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Button from "../Button/Button";
import { useCart } from "./CartContext";

function Cart() { 
  const { cartItems } = useCart();
  
  const navigate = useNavigate();
 
  const handleCheckoutClick = () => {
    navigate('/Order');
  };
  
  const buttonTitle = "Корзина";
 
  return (  
    <>
    <div className="cart__container">  
        <Button  
          title={buttonTitle}  
          type={"checkout"}  
          disable={cartItems.length === 0}  
          onClick={handleCheckoutClick}
        />   
    </div>  
    </>
  ); 
}
 
export default Cart;


