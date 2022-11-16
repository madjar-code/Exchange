import React from "react";

import cl from './BookTitle.module.css'


const BookTitle = ({ bookItem }) => {
  return (
    <div className={cl.titleBlock}>
      <p className={cl.title}>{bookItem?.title}</p>
      {/* <BookImage/> */}
    </div>
  )
};

export default BookTitle;
