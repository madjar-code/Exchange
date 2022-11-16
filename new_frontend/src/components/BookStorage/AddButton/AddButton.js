import React from "react";
import { useNavigate } from "react-router-dom";

import cl from './AddButton.module.css'


const AddButton = () => {
  let navigate = useNavigate()

  const createBook = () => {
    navigate('/cbi')
  }

  return (
    <button
      onClick={createBook}
      className={cl.addButton}
    >
      +
    </button>
  )
};

export default AddButton;
