import React from "react";

import ExchangeTag from "../ExchangeTag/ExchangeTag";
import Plug from './Plug/Plug'

import cl from './OfferRequestItem.module.css'


const OfferRequestItem = ({title, tagNames}) => {
  return (
    <div className={cl.offerRequestItem}>
      <p className={cl.itemTitle}>{title}:</p>
      <div className={cl.tagBlock}>
        {tagNames?.length
          ? tagNames.map((tagName, index) => (
              <ExchangeTag key={index} tagName={tagName}/>
          ))
          : <Plug/>}
      </div>
    </div>
  )
};

export default OfferRequestItem;
