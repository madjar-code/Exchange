import React from "react";
import { useNavigate } from "react-router-dom";

import cl from './GoToStorage.module.css'


const GoToStorage = ({ userSlug }) => {
  let navigate = useNavigate()
  return (
    <button 
      className={cl.goToStorage}
      onClick={() => navigate(`/obs-oe-${userSlug}`)}>
        К хранилищу пользователя {'->'}
    </button>
  )
};

export default GoToStorage;
