import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br /> <span className="">Total Price: ${totalPrice.toFixed(2)}</span>
      <Button
        title={`${cartItems.length === 0 ? "Order !" : "Checkout"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;

/*
Этот код представляет собой компонент корзины для приложения React. 
Он принимает два свойства: cartItems, которое представляет собой массив товаров, добавленных в корзину, 
и onCheckout, функцию, которая вызывается при нажатии на кнопку "Оформить заказ".
В этом компоненте вычисляется общая стоимость товаров в корзине с помощью метода reduce(). 
Если корзина пуста, выводится сообщение "No items in cart", в противном случае отображается общая стоимость товаров.
Компонент также содержит кнопку "Оформить заказ". Если корзина пуста, кнопка становится неактивной (disabled). 
При нажатии на кнопку вызывается функция onCheckout.

1. import React from "react"; - импорт библиотеки React.
2. import "./Cart.css"; - импорт стилевого файла Cart.css.
3. import Button from "../Button/Button"; - импорт React-компонента Button, который располагается в Button.js.
4. function Cart({ cartItems, onCheckout }) { - определение функционального компонента Cart. cartItems и onCheckout - это свойства, переданные компоненту через пропсы.
5. const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0); - вычисляет общую стоимость товаров в корзине, используя метод reduce().
6. <div className="cart__container"> - открывающийся тег <div> с установленным стилем CSS.
7. {cartItems.length === 0 ? "No items in cart" : ""} - выводит сообщение, если корзина пуста.
8. <br /> - разрыв строки.
9. <span className="">Total Price: ${totalPrice.toFixed(2)}</span> - отображение общей стоимости с двумя знаками после запятой.
10. <Button ... /> - вызывается компонент кнопки, используется для оформления заказа.
11. export default Cart; - экспорт по умолчанию функционального компонента Cart.
*/