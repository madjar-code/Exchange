import React from "react";

import cl from './ExchangeTag.module.css'


const ExchangeTag = ({tagName}) => {
  return (
    <span className={cl.tag}>{tagName}</span>
  )
};

export default ExchangeTag;
