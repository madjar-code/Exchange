import React, { useState } from "react";

import cl from './ButtonBlock.module.css'


const ButtonBlock = ({ setState }) => {

  let [firstClassName, setFirstClassName] = useState(cl.switchButton)
  let [secondClassName, setSecondClassName] = useState(cl.switchButtonNotActive)

  const setStorageActive = (newState) => {
    if (newState === true){
      setFirstClassName(cl.switchButton)
      setSecondClassName(cl.switchButtonNotActive)
    }
    else {
      setFirstClassName(cl.switchButtonNotActive)
      setSecondClassName(cl.switchButton)
    }
    setState(newState)
  }

  return (
    <div className={cl.buttonBlock}>
      <button
        className={firstClassName}
        onClick={() => setStorageActive(true)}>
        Хранилище
      </button>
      <button
        className={secondClassName}
        onClick={() => setStorageActive(false)}>
        Объявления
      </button>
    </div>
  );
};

export default ButtonBlock;
