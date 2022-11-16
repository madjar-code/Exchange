import React from "react";

import BookItem from "../BookItem/BookItem";

import cl from './BookItems.module.css'


const BookItems = ({ bookItems, myStorage }) => {
  return (
    <div
      className={cl.storageBlock}>
        {bookItems.map((book, index) => {
          return <BookItem
                    key={index}
                    slug={book.slug}
                    title={book.title}
                    myStorage={myStorage}/>
        })}
    </div>
  )
};

export default BookItems;
