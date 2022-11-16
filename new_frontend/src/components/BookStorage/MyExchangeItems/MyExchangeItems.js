import React from "react";

import ExchangeItem from "../../Common/ExchangeItem/ExchangeItem";


const MyExchangeItems = ({ exchangeItems }) => {
  return (
    <div>
      {
        exchangeItems.map((exchangeItem, index) =>
        (<ExchangeItem
            exchangeItem={exchangeItem}
            key={index}/>))
      }
    </div>
  )
};

export default MyExchangeItems;
