import React from "react";

import cl from './AddingBookAtZero.module.css'


const AddingBookAtZero = ({ handleClick }) => {
  return (
    <div className={cl.addingBookAtZero}>
      <p className={cl.label}>
        Добавьте книги из своего хранилища
      </p>
      <button
        onClick={handleClick}
        className={cl.addBooks}>
        Добавить книги
      </button>
    </div>
  )
};

export default AddingBookAtZero;
