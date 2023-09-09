import { useState } from "react";

const Dropdown = () => {
  const [isActive, setMouseHover] = useState(false);
  const [isnotActive, setMouseRemoved] = useState(false);
  const list = ["Delhi", "Hyderabad", "Mumbai", "Kerala"];
  const [value, setValue] = useState("");

  const displaySelected = (e) => {
    // console.log(e.target.textContent);
    setValue(e.target.textContent);
    setMouseHover(false);
    setMouseRemoved(true);
  };
  const dropdownListavailable = () => {
    setMouseHover(true);
  };

  const results = list.map((result, index) => {
    return (
      <a href="#" key={index} onClick={displaySelected}>
        {result}
      </a>
    );
  });

  return (
    <div className="container">
      <h1>Select Your State</h1>
      <div className="dropdown">
        <button
          className="dropdown_button dropbtn "
          onMouseEnter={dropdownListavailable}
        >
          I'm From
        </button>
        <div
          className="dropdown-content"
          style={{ display: `${isActive ? "block" : "none"}` }}
        >
          {results}
        </div>
      </div>
      <div
        className="stateStatement"
        style={{ display: `${isnotActive ? "block" : "none"}` }}
      >
        I'm from {value}
      </div>
    </div>
  );
};

export default Dropdown;
