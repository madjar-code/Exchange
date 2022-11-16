import React from "react";

import ExchangeItem from "../../Common/ExchangeItem/ExchangeItem";

import cl from './ExchangeItems.module.css'


const ExchangeItems = ({ exchangeItems }) => {
  return(
    <div
      className={cl.workingField}>
        {exchangeItems.map((item, index) =>(
          <ExchangeItem key={index} exchangeItem={item}/>
        ))}
    </div>
  )
};

export default ExchangeItems;
