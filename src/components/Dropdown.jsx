import React from "react";

const Dropdown = ({ handleChange, option }) => {

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {option.title}
      </button>
      <ul className="dropdown-menu">
        {option.options.map((item, index) => 
          <li key={index}> 
            <a className="dropdown-item"  onClick={() => handleChange(item)} href="#">
              {item}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
