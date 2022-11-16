import React from "react";

import TitlesOfOfferedBooks from '../../Common/TitlesOfOfferedBooks/TitlesOfOfferedBooks'

import icon from './test.png'
import cl from './ExchangeImageBlock.module.css'


const ExchangeImageBlock = ({ exchangeItem }) => {
  return (
    <div className={cl.imageBlock}>
      {/* <img
        src={picture1}
        className={cl.leftPicture}/> */}

      <TitlesOfOfferedBooks
        exchangeItem={exchangeItem}/>

      {/* <div className={cl.leftBookNames}>
        {exchangeItem?.offered_books.map(
          (item) => item.title
        )}
      </div> */}

      {/* <img
        src={icon}
        className={cl.icon}/> */}
      {/* <img
        src={picture2}
        className={cl.rightPicture}/> */}
      {/* <p className={cl.rightBookNames}>
        {exchangeItem?.requirements_text.map(
          (bookName) => bookName
        )}
      </p> */}
      {/* <div className={cl.rightBookNames}>
        {exchangeItem?.requirements_text}
      </div> */}
    </div>

  )
};

export default ExchangeImageBlock;
