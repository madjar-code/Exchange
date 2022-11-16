import React, { useState, useEffect, useContext } from "react";

import RequestBlock from "../../components/CreateExchangeItem/RequestBlock/RequestBlock";
import OfferBlock from "../../components/CreateExchangeItem/OfferBlock/OfferBlock";
import BlockSeparator from "../../components/CreateExchangeItem/BlockSeparator/BlockSeparator";
import ModalWindow from "../../components/CreateExchangeItem/ModalWindow/ModalWindow";
import BlackAndWhiteHeader from "../../components/Common/BlackAndWhiteHeader/BlackAndWhiteHeader";
import BottomBlock from "../../components/CreateExchangeItem/BottomBlock/BottomBlock";
import CCButton from "../../components/Common/CCButton/CCButton";
import AuthContext from "../../context/AuthContext";
import APIService from '../../API/APIService'


const CreateExchangeItem = () => {
  let [modalIsActive, setModalActive] = useState(false)
  let [offeredBooks, setOfferedBooks] = useState([])

  let [bookItems, setBookItems] = useState([])
  let [bookItemsWithStates,
       setBookItemsWithStates] = useState([])

  let { authTokens } = useContext(AuthContext)

  const handleAddingBookItems = () => {
    setModalActive(true)
  }

  const handleConfirmation = (targetBookItems) => {
    setOfferedBooks(targetBookItems)
    setModalActive(false)
  }

  const readiness = () => {
    offeredBooks.map((offeredBook, index) => {
      delete offeredBook.slug
    })
    APIService.createExchangeItem(authTokens, offeredBooks)
  }

  useEffect(() => {
    APIService.getCurrentBookItems(
      setBookItems, authTokens)
  }, [])

  useEffect(() => {

    bookItems.map((bookItem) => {
      bookItemsWithStates.push(
        {bookItem: bookItem, state: false}
      )
    })
  }, [bookItems])

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'var(--black-white)'
    }}>
      <BlackAndWhiteHeader
        title={'Создать объявление'}/>
      <RequestBlock/>
      <BlockSeparator/>
      <OfferBlock
        offeredBooks={offeredBooks}
        handleClick={handleAddingBookItems}/>
      <BlockSeparator/>
      <BottomBlock/>

      <ModalWindow
        active={modalIsActive}
        setActive={setModalActive}
        bookItems={bookItems}
        bookItemsWithStates={bookItemsWithStates}
        handleConfirmation={handleConfirmation}/>
      <button onClick={readiness}>
        Готово!
      </button>
    </div>
  )
};

export default CreateExchangeItem;
