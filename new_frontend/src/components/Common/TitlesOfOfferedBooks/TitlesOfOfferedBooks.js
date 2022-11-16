import React from "react";

import cl from './TitlesOfOfferedBooks.module.css'


const TitlesOfOfferedBooks = ({ exchangeItem }) => {
  let titles = ''

  exchangeItem?.offered_books.map (
    item => {
      titles += item.title + ', '
    }
  )

  return (
    <div className={cl.offeredBooks}>
      {titles.slice(0, -2)}
    </div>
  )
};

export default TitlesOfOfferedBooks;
