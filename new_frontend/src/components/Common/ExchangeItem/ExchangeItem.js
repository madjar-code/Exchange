import React from "react";
import { useNavigate } from "react-router-dom";

import TitlesOfOfferedBooks from '../TitlesOfOfferedBooks/TitlesOfOfferedBooks'

import cl from './ExchangeItem.module.css'



const ExchangeItem = ({ exchangeItem }) => {
  let navigate = useNavigate()
  let address = exchangeItem?.address

  if (!address) {
    address = 'Адрес не указан'
  }

  return(
    <div 
      onClick={() => {
        navigate(`/exchange-${exchangeItem?.slug}`)}}
      className={cl.card}>
      <div className={cl.infoBlock}>

        <TitlesOfOfferedBooks
          exchangeItem={exchangeItem}/>

        {/* <img src={icon} className={cl.icon}/>
        
        <RequirementsText
          exchangeItem={exchangeItem}/> */}

        <div className={cl.address}>{address}</div>
        <div className={cl.date}>{exchangeItem?.creation_date}</div>
      </div>
    </div>
  )
};

export default ExchangeItem;
