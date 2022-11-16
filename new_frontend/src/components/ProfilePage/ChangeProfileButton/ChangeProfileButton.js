import React from "react";

import cl from './ChangeProfileButton.module.css'


const ChangeProfileButton =
  ({ handleChangeProfile }) => {
  return (
    <button
      onClick={handleChangeProfile}
      className={cl.changeButton}>
        &#10000;Изменить
    </button>
  )
};

export default ChangeProfileButton;
