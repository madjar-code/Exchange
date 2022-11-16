import React from "react";
import { useNavigate } from "react-router-dom";

import cl from './CreateExchangeItem.module.css'


const CreateExchangeItem = () => {
  let navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/cei')}
      className={cl.createExchangeItem}>
        + 
      </button>
  )
};

export default CreateExchangeItem;
