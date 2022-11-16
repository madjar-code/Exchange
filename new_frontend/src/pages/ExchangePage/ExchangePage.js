import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BlackAndWhiteHeader from "../../components/Common/BlackAndWhiteHeader/BlackAndWhiteHeader";
import ExchangeImageBlock from "../../components/ExchangePage/ExchangeImageBlock/ExchangeImageBlock";
import APIService from "../../API/APIService";
import OfferRequestHeader from "../../components/ExchangePage/OfferRequestHeader/OfferRequestHeader";
import OfferItems from "../../components/ExchangePage/OfferItems/OfferItems";
import RequestItems from "../../components/ExchangePage/RequestItems/RequestItems";
import UserElement from "../../components/ExchangePage/UserElement/UserElement";
import AuthContext from "../../context/AuthContext";

import cl from './ExchangePage.module.css'


const ExchangePage = () => {
  const params = useParams()
  const currentExchangeSlug = params.currentExchangeSlug

  let [exchangeItem, setExchangeItem] = useState(null)
  let [isOfferActive, setOfferActive] = useState(true)
  let [isOwner, setOwner] = useState(false)
  
  let navigate = useNavigate()

  let { user } = useContext(AuthContext)

  useEffect(() => {
    APIService.getOneExchangeItem(
      setExchangeItem, currentExchangeSlug)
    console.log(exchangeItem)
  }, [])

  useEffect(() => {
    if (user.user_id == exchangeItem?.user) {
      setOwner(true)
    }
  })

  const deleteExchangeItem = (exchangeItemSlug) => {
    APIService.deleteExchangeItem(exchangeItemSlug)
    setTimeout(() => {navigate('/')}, 1500)
  }

  return (
    <div>
      <BlackAndWhiteHeader title={'Обмен'}/>
      <ExchangeImageBlock exchangeItem={exchangeItem}/>
       
      <div className={cl.offerRequest}>
        <OfferRequestHeader 
          setState={setOfferActive}/>

        {
          isOfferActive
          ? <OfferItems exchangeItem={exchangeItem}/>
          : <RequestItems text={exchangeItem?.requirements_text}/>
        }

      </div>
      <UserElement
        isOwner={isOwner}
        userSlug={exchangeItem?.user_slug}
        username={exchangeItem?.username}/>
      {
        isOwner
        ? 
        <button
          onClick={() => deleteExchangeItem(exchangeItem?.slug)}
          className={cl.deleteButton}
          >
          Удалить объявление
        </button>
        :
        <></>
      }
      
    </div>
  )
};

export default ExchangePage;
