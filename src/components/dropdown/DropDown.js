import "./DropDown.css";
import React from "react";

function DropDown({ options, setOptions }) {
  const handleChange = (event) => {
    console.log("id de select ", event.target.value);
    setOptions(event.target.value);
  };
  return (
    <div className="container-select">
      <select className="select" onChange={handleChange}>
        {options.map((item, i) => {
          return (
            <option key={`dfe${i}`} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropDown;
