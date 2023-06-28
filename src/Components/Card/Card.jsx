
import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import "./Card.css";
import Button from "../Button/Button";


function Card({ item }) {
  const { addItemToCart, removeItemFromCart, getItemQuantity } = useContext(CartContext);
  const { title, Image, price, id } = item;

  const handleAddItem = () => {
    addItemToCart(item);
  };

  const handleRemoveItem = () => {
    removeItemFromCart(item);
  };

  const quantity = getItemQuantity(id);

  return (
    <div className="card">
      <span className={`${quantity !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {quantity}
      </span>
      <div >
        <img className="image__container" src={Image}  alt="" /> 
      </div>
      <h4 className="card__title">
        {title} <span className="card__price"> {price} RUB</span>
      </h4>
      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleAddItem} />
        {quantity !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleRemoveItem} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;


