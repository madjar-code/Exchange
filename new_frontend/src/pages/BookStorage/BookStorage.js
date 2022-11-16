import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Header from '../../components/Common/Header/Header'
import UserLine from "../../components/BookStorage/UserLine/UserLine";
import ButtonBlock from "../../components/BookStorage/ButtonBlock/ButtonBlock";
import BookItems from "../../components/BookStorage/BookItems/BookItems";
import MyExchangeItems from "../../components/BookStorage/MyExchangeItems/MyExchangeItems";
import CreateExchangeItem from '../../components/BookStorage/CreateExchangeItem/CreateExchangeItem'
import AddButton from "../../components/BookStorage/AddButton/AddButton";
import Label from "../../components/BookStorage/Label/Label";

import AuthContext from "../../context/AuthContext";
import APIService from "../../API/APIService";


const BookStorage = () => {
  const params = useParams()
  const userSlug = params.userSlug

  let [myStorage, setMyStorage] = useState(false)
  let [isStorageActive, setStorageActive] = useState(true)

  let [currentUser, setCurrentUser] = useState(null)
  let [bookItems, setBookItems] = useState([])
  let [exchangeItems, setExchangeItems] = useState([])
  
  let { authTokens } = useContext(AuthContext)

  useEffect(() => {
    if (!userSlug) {
      APIService.getCurrentUser(
        setCurrentUser, authTokens)
      APIService.getCurrentBookItems(
        setBookItems, authTokens)
      APIService.getCurrentExchangeItems(
        setExchangeItems, authTokens)
      setMyStorage(true)
    }
    else {
      APIService.getOneUser(
        setCurrentUser, userSlug)
      APIService.getExchangeItemsForUser(
        setExchangeItems, userSlug)
      APIService.getBookItemsForUser(
        setBookItems, userSlug)
      setMyStorage(false)
    }
  }, [userSlug])


  let noBooksMessage = ''
  let noExchangeItemsMessage = ''
  let path = ''

  if (myStorage) {
    noBooksMessage = 'У вас пока нет книг в хранилище. Можете добавить :)'
    noExchangeItemsMessage = 'У вас пока нет ваших объявлений. Создайте!'
    path = '/my-profile'
  }
  else {
    noBooksMessage = 'У пользователя нет книг в хранилище'
    noExchangeItemsMessage = 'У пользователя нет объявлений'
    path = `/user-${currentUser?.slug}`
  }

  return(
    <Header>
      <div>
        <UserLine 
          username={currentUser?.username}
          path={path}/>
        <ButtonBlock
          setState={setStorageActive}/>
        {
          isStorageActive
          ?
          <div>          
            {
            (bookItems.length > 0)
            ?
            <BookItems
              myStorage={myStorage}
              bookItems={bookItems}/>
            :
            <Label
              text={noBooksMessage}/>
            }
            { myStorage ? <AddButton/> : <></>}
            
          </div>
          :
          <div>
            {
            (exchangeItems.length > 0)
            ?
            <MyExchangeItems
              exchangeItems={exchangeItems}/>
            :
            <Label
              text={noExchangeItemsMessage}/>
            }
            { myStorage ? <CreateExchangeItem/> : <></>}
          </div>
        }      
      </div>
    </Header>
  );
};

export default BookStorage;
