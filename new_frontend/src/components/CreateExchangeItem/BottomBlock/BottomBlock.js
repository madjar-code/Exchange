import React from "react";

import cl from './BottomBlock.module.css'


const BottomBlock = () => {
  return (
    <div>
      <p className={cl.descriptionTitle}>Адрес</p>
      <textarea
        className={cl.EIDescription}/>
    </div>
  )
};

export default BottomBlock;
