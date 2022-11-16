import React from "react";

import ActiveExchangeTag from "../ExchangeTag/ActiveExchangeTag";
import Plug from './Plug/Plug'

import cl from './OfferRequestItem.module.css'


const BookOfferRequestItem = ({title, slugsForURL, tagNames}) => {
  return (
    <div className={cl.offerRequestItem}>
      <p className={cl.itemTitle}>{title}:</p>
      <div className={cl.tagBlock}>
        {tagNames?.length
          ? tagNames.map((tagName, index) => {
              const slugForURL = slugsForURL[index]
              return (
                <ActiveExchangeTag
                  key={index}
                  tagName={tagName}
                  slugForURL={slugForURL}/>)
            })
          : <Plug/>}
      </div>
    </div>
  )
};

export default BookOfferRequestItem;
