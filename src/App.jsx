import { useState } from "react";

import Accordion from "./challenges/accordion/Accordion";
import ToggleButton from "./challenges/toggleButton/ToggleButton";
import SearchData from "./challenges/searchData/SearchData";
function App() {
  return (
    <div>
      {/* Challenge-1 : Accordion => render the following Accordion component to view on the UI */}
      {/* <Accordion />  */}
      {/* Challenge-2 : ToggleButton => render the following Toggle Button component to view on the UI */}
      {/* <ToggleButton /> */}
      {/* Challenge-3 : SearchData => render the following SearchData component to view on the UI */}
      <SearchData/>
    </div>
  );
}

export default App;
