import React from "react";
import OfferRequestHeader from "../OfferRequestHeader/OfferRequestHeader";

import cl from './RequestBlock.module.css'


const RequestBlock = () => {
  return (
    <div className={cl.requestBlock}>
      <OfferRequestHeader
        title={'Хотите'}/>
      <textarea
        className={cl.requestTextarea}/>
    </div>
  )
};

export default RequestBlock;
