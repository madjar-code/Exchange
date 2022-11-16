import React from "react";

import cl from './Label.module.css'


const Label = ({ text }) => {
  return (
    <div className={cl.label}>
      {text}
    </div>
  )
};

export default Label;
