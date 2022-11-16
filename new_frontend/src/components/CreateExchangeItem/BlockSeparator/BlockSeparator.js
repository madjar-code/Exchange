import React from "react";

import cl from './BlockSeparator.module.css'


const BlockSeparator = () => {
  return (
    <div className={cl.blockSeparator}>
      <div className={cl.whiteRectangle}/>
    </div>
  )
};

export default BlockSeparator;
