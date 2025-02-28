import React, { useState } from "react";

const Accordion = () => {
  const [clickedAccordion, setlickedAccordion] = useState(null);
  console.log(clickedAccordion);

  const data = [
    {
      header: "Header 01",
      content: "Content 01",
    },
    {
      header: "Header 02",
      content: "Content 02",
    },
    {
      header: "Header 03",
      content: "Content 03",
    },
    {
      header: "Header 04",
      content: "Content 04",
    },
  ];

  const handleClick = (i) => {
    console.log("Index here", i);
    setlickedAccordion(i);
  };
  return (
    <div className="componentContainer">
      {data.map((item, index) => {
        return (
          <div
            className="accordionContainer"
            onClick={() => handleClick(index)}
          >
            <div className="accordionHeader">{item.header}</div>
            {clickedAccordion === index && (
              <div className="accordionBody">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
