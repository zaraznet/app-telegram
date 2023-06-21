import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
function Card({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">$ {price}</span>
      </h4>

      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;

/*
Этот код определяет функциональный React-компонент `Card`, который отображает карточку продукта с кнопками добавления и удаления. Компонент принимает 
 три свойства через пропсы: `food`, `onAdd` и `onRemove`.

- `food` - объект, содержащий информацию о продукте, такую как заголовок, изображение, цена и идентификатор;
- `onAdd` - функция, которая вызывается, когда пользователь добавляет продукт в корзину;
- `onRemove` - функция, которая вызывается при удалении продукта из корзины.

Компонент `Card` включает функцию-хук `useState`, которая используется для отслеживания количества выбранных продуктов. 
Значение счетчика устанавливается равным `0` при создании компонента - `const [count, setCount] = useState(0);`.
У компонента есть две функции для увеличения и уменьшения значения счетчика - `handleIncrement()` и `handleDecrement()`, каждая из которых также вызывает
 соответствующую функцию переданную в компонент через пропсы, для добавления или удаления продукта.
Функциональный компонент отображает разметку JSX, которая содержит информацию о продукте, кнопки добавления и удаления продукта, а также `span`,
 который показывает количество продуктов, добавленных в корзину.
Таким образом, этот код создает компонент карточки продукта, который может использоваться в React-приложениях для отображения элементов меню и управления
 количеством продуктов, выбранных пользователем.


  import React, { useState } from "react"; - импортирует библиотеки React и хука useState.
2. import "./Card.css"; - импортирует стилевой файл Card.css.
3. import Button from "../Button/Button"; - импортирует компонент кнопки Button.
4. function Card({ food, onAdd, onRemove }) { ... } - определяет функциональный компонент Card, который принимает три свойства через пропсы: food, onAdd, и onRemove.
5. const [count, setCount] = useState(0); - использует хук useState, чтобы создать переменную count со значением 0 и функцию setCount. count используется
 для отслеживания количества добавленных продуктов.
6. const { title, Image, price, id } = food; - деструктурирование объекта food, чтобы получить заголовок, изображение, цену и идентификатор продукта.
7. const handleIncrement = () => { ... } - задает функцию handleIncrement, которая увеличивает количество продуктов на 1 и вызывает функцию onAdd с передачей
 в неё объекта food. Эта функция используется для добавления продукта в корзину.
8. const handleDecrement = () => { ... } - задает функцию handleDecrement, которая уменьшает количество продуктов на 1 и вызывает функцию onRemove
 с передачей в неё объекта food. Эта функция используется для удаления продукта из корзины.
9. <span ...>{count}</span> - отображает количество продуктов, добавленных в корзину, при условии, что этого количества больше 0.
10. <img src={Image} alt={title} /> - отображает изображение продукта.
11. <Button ... onClick={handleIncrement} /> - вызывает кнопку с +, используется для добавления продукта в корзину. При клике на кнопке вызывается функция
 handleIncrement.
12. <Button ... onClick={handleDecrement} /> - вызывает кнопку с -, используется для удаления продукта из корзины. При клике на кнопке вызывается функция handleDecrement.
13. export default Card; - экспорт по умолчанию функционального компонента Card.


*/