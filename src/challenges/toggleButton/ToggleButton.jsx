import { useState } from "react";
const ToggleButton = () => {
  const [toggle, setToggle] = useState(true);

  const onToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={onToggle}
        className={`w-16 h-8 rounded-full p-1 transition-colors ${
          toggle ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-6 h-6 rounded-full bg-white transition-transform ${
            toggle ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>
      </button>
      <h6>Current state: {toggle ? "ON" : "OFF"}</h6>
    </div>
  );
};

export default ToggleButton;