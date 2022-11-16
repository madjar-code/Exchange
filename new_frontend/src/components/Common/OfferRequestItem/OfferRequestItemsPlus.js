import React from "react";

import ExchangeTag from "../ExchangeTag/ExchangeTag";
import ExchangeTagToAdd from "../ExchangeTag/ExchangeTagToAdd";

import cl from './OfferRequestItem.module.css'


const OfferRequestItemPlus = ({title,
                               tagNames,
                               handleClick}) => {

  return (
    <div className={cl.offerRequestItem}>
      <p className={cl.itemTitle}>{title}:</p>
      <div className={cl.tagBlock}>
        {tagNames?.length
          ? tagNames.map((tagName, index) => (
            <ExchangeTag
              key={index}
              tagName={tagName}/>
          ))
          : <></>}
            <ExchangeTagToAdd
              tagName='+ Добавить книгу'
              handleClick={handleClick}/>
      </div>
    </div>
  )
};

export default OfferRequestItemPlus;
