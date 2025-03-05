import { useState } from "react";

import Accordion from "./challenges/accordion/Accordion";
import ToggleButton from "./challenges/toggleButton/ToggleButton";
import SearchData from "./challenges/searchData/SearchData";
import TodoList from "./challenges/todoList/TodoList";
import Input from "./designPatterns/renderProps/Input";
import "./App.css";
import DogImages from "./designPatterns/HOC/DogImages";
function App() {
  const renderValue = (value) => <>The Value is {value}</>;
  const renderMultipledValue = (value) => (
    <>The Multiplied Value is {isNaN(value) ? "Invalid number" : value * 10}</>
  );
  return (
    <div className="App">
      {/* Challenge-1 : Accordion => render the following Accordion component to view on the UI */}
      {/* <Accordion />  */}
      {/* Challenge-2 : ToggleButton => render the following Toggle Button component to view on the UI */}
      {/* <ToggleButton /> */}
      {/* Challenge-3 : SearchData => render the following SearchData component to view on the UI */}
      {/* <SearchData/> */}
      {/* Challenge-4 : TodoList Component */}
      {/* <TodoList/> */}
      {/* //render-props design pattern */}
      {/* <Input renderTextBelow={renderValue} />
      <Input renderTextBelow={renderMultipledValue} /> */}
      {/* Higher Order Component design pattern */}
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages />
    </div>
  );
}

export default App;
