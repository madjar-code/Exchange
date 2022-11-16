import React from "react";
import { useNavigate } from "react-router-dom";

import APIService from "../../../API/APIService";

import cl from './EIBFooter.module.css'


const EIBFooter = () => {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate('/cei')
  }

  return (
    <footer>
      <button
        onClick={handleClick}
        className={cl.createButton}>
        Создать объявление
      </button>
    </footer>
  )
};

export default EIBFooter;
