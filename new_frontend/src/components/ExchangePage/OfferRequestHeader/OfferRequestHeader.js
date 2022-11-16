import React, { useState } from "react";

import cl from './OfferRequestHeader.module.css'


const OfferRequestHeader = ({setState}) => {

  const setLeftTitleActive = () => {
    setState(true)
    setLeftClassName(cl.leftHeaderTitleIsActive)
    setRightClassName(cl.rightHeaderTitleNotActive)
  }

  const setRightTitleActive = () => {
    setState(false)
    setLeftClassName(cl.leftHeaderTitleNotActive)
    setRightClassName(cl.rightHeaderTitleIsActive)
  }

  let [leftClassName, setLeftClassName] = useState(cl.leftHeaderTitleIsActive)
  let [rightClassName, setRightClassName] = useState(cl.rightHeaderTitleNotActive)

  return (
    <div className={cl.offerRequestHeader}>
      <p
        onClick={setLeftTitleActive}
        className={leftClassName}>Предложение</p>
      <p className={cl.verticalSeparator}>|</p>
      <p
        onClick={setRightTitleActive}
        className={rightClassName}>Запрос</p>
    </div>
  )
};

export default OfferRequestHeader;
