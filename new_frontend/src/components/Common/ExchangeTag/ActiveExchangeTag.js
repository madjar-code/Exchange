import React from "react";
import { useNavigate } from 'react-router-dom'

import cl from './ExchangeTag.module.css'


const ActiveExchangeTag = ({ tagName, slugForURL }) => {
  let navigate = useNavigate()

  const hanldeBookClick = (slugForURL) => {
    navigate(`/book-${slugForURL}`)
  }

  return (
    <span
      onClick={() => hanldeBookClick(slugForURL)}
      className={cl.activeTag}>
        {tagName}
    </span>
  )
};

export default ActiveExchangeTag;
