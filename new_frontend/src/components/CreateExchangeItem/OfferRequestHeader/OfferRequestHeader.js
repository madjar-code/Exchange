import React from "react";

import cl from './OfferRequestHeader.module.css'


const OfferRequestHeader = ({ title }) => {
  return (
    <div className={cl.header}>
      {title}
    </div>
  )
};

export default OfferRequestHeader;
