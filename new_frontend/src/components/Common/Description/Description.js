import React from "react";

import cl from './Description.module.css'


const Description = ({ title, description }) => {
  return (
    <div>
      <p className={cl.lastItem}>{title}</p>
      <div
        className={cl.shortDescription}
      >
        {(!description)
          ? 'не указано'
          : description}
      </div>
    </div>
  )
};

export default Description;
