import React from "react";

import cl from './BlockBody.module.css'


const BlockBody = (props) => {
  return (
    <div className={cl.body}>
      {props.children}
    </div>
  )
};

export default BlockBody;
