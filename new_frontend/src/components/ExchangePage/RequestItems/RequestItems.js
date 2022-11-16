import React from "react";

import OfferRequestItem from '../../Common/OfferRequestItem/OfferRequestItem'

import cl from './RequestItems.module.css'


const RequestItems = ({ text }) => {
  return (
    <div className={cl.requirementsText}>
      {text}
    </div>
  )
};

export default RequestItems;
