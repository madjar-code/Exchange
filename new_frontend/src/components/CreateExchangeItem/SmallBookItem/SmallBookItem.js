import React from "react";

import cl from './SmallBookItem.module.css'


const SmallBookItem = ({ bookItemWithState }) => {
  return (
    <div className={cl.element}>
      {bookItemWithState.bookItem?.title}
      <input
        type="checkbox"
        className={cl.flag}
        onChange={
          () => {bookItemWithState.state =
                 !bookItemWithState.state}}/>
    </div>
  )
};

export default SmallBookItem;
