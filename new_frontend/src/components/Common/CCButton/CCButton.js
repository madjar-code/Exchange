import React from "react";

import cl from './CCButton.module.css'


const CCButton = ({ credentials,
                    createOrChange,
                    title }) => {
  return (
    <button
      onClick={() =>
        createOrChange(credentials)}
      className={cl.button}>
      { title }
    </button>
  )
};

export default CCButton;
