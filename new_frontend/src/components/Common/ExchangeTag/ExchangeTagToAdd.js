import React from "react";

import cl from './ExchangeTag.module.css'


const ExchangeTagToAdd = ({tagName,
                           handleClick}) => {
  return (
    <span
      onClick={handleClick}
      className={cl.tag}>{tagName}</span>
  )
};

export default ExchangeTagToAdd;
