import React, { useState } from "react";

const Input = ({ renderTextBelow }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col items-center bg-slate-500 mt-4 p-4 gap-2 rounded-sm text-white">
      <h2>Render Props Pattern</h2>
      <input
        className="bg-inherit border-2 border-solid"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {renderTextBelow(inputValue)}
    </div>
  );
};

export default Input;
