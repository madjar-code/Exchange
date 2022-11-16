import React, { useState, useContext } from "react";

import OfferRequestItem from "../../Common/OfferRequestItem/OfferRequestItem";
import OfferRequestItemPlus from "../../Common/OfferRequestItem/OfferRequestItemsPlus";
import AddingBookAtZero from "../AddingBookAtZero/AddingBookAtZero";
import OfferRequestHeader from "../OfferRequestHeader/OfferRequestHeader";

import unique from "../../../utils/SecondaryFunctions";

import cl from './OfferBlock.module.css'


const OfferBlock = ({ handleClick, offeredBooks }) => {

  let namesOfTheOfferedBooks = []
  let namesOfTheAuthors = []
  let genreNames = []
  
  offeredBooks.map((offeredBook) =>
    {
      namesOfTheOfferedBooks.push(offeredBook.title)
      namesOfTheAuthors.push(offeredBook.author)
      genreNames.push(offeredBook.genre)

      namesOfTheOfferedBooks = unique(namesOfTheOfferedBooks)
      namesOfTheAuthors = unique(namesOfTheAuthors)
      genreNames = unique(genreNames)
    }
  )

  return (
    <div className={cl.offerBlock}>
      <OfferRequestHeader
        title={'Отдаёте'}/>
  
      {offeredBooks.length ?
      <>
        <OfferRequestItemPlus
          title={'Книги'}
          tagNames={namesOfTheOfferedBooks}
          handleClick={handleClick}/>
        <OfferRequestItem
          title={'Жанры'}
          tagNames={genreNames}/>
        <OfferRequestItem
          title={'Авторы'}
          tagNames={namesOfTheAuthors}/>
      </>
      :
      <AddingBookAtZero
        handleClick={handleClick}/>}
      
    </div>
  )
};

export default OfferBlock;
