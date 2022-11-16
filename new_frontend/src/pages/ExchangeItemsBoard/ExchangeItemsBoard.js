import React, { useState, useEffect } from "react"

import EIBFooter from "../../components/ExchangeItemsBoard/EIBFooter/EIBFooter";
import ExchangeItems from "../../components/ExchangeItemsBoard/ExchangeItems/ExchangeItems";
import Header from "../../components/Common/Header/Header";
import APIService from "../../API/APIService"


const ExchangeItemsBoard = () => {
  let [exchangeItems, setExchangeItems] = useState([])

  useEffect(() => {
    APIService.getExchangeItems(
      setExchangeItems)
  }, [])

  return (
    <div>
      <Header>
        <ExchangeItems
          exchangeItems={exchangeItems}/>
        <EIBFooter/>
      </Header>
    </div>
  )
};

export default ExchangeItemsBoard;
