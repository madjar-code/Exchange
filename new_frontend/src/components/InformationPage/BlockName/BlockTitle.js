import React from "react";

import cl from './BlockTitle.module.css'


const BlockTitle = ({ title }) => {
  return (
    <div className={cl.title}>
      {title}
    </div>
  )
};

export default BlockTitle;
