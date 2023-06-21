import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



/*
Этот код является точкой входа для React-приложения. 
В начале импортируются необходимые библиотеки и компоненты, включая корневой компонент "App".
ReactDOM.createRoot() используется для создания основного узла приложения в указанном элементе DOM
 (в данном случае элементе с идентификатором "root").
root.render() выполняет отрисовку компонента App внутри React.StrictMode, который помогает выявить
 потенциальные проблемы в приложении во время разработки, путем активации дополнительных проверок и предупреждений.
В общем, этот код инициализирует и отображает React-приложение


1. import React from "react"; - импорт библиотеки React.
2. import ReactDOM from "react-dom/client"; - импорт модуля ReactDOM, который используется для рендеринга
 React-компонентов в элементы DOM.
3. import "./index.css"; - импорт стилевого файла index.css.
4. import App from "./App"; - импорт компонента App, который является корневым компонентом приложения.
5. const root = ReactDOM.createRoot(document.getElementById("root")); - создает версию корня приложения для
 вызова root.render(). Функция createRoot() используется для улучшения производительности, которая создает новую
  версию корня React с SSR (server-side rendering) уже встроенной.
6. root.render( ... ); - рендерит корневой компонент App в элементе с id="root".
7. <React.StrictMode> ... </React.StrictMode> - оборачивает компонент <App> в React сущность StrictMode, которая
 помогает идентифицировать проблемы в приложении, такие как устаревшие API и неоптимальный код.
*/