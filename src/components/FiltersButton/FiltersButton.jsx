import React, { useCallback, useEffect, useState } from "react";
import s from "./FilterButton.module.css";

const FiltersButton = (props) => {
  const { value, onClick, activeButton } = props;
  const isActive = activeButton === value
  
  const buttonClasses = isActive
    ? `${s.filters_button} ${s.active}`
    : s.filters_button;
  
  const handleOnClick = (evt) => {
    onClick(isActive ? null : evt.target.value);
  };

  return (
      <button 
        onClick={handleOnClick} 
        className={buttonClasses} 
        value={value}
      >
        {value}
      </button>
  );
};

export default FiltersButton;
