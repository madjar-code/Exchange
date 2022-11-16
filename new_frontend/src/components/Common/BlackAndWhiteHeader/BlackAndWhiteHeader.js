import React from "react";

import cl from './BlackAndWhiteHeader.module.css'


const BlackAndWhiteHeader = ({ title }) => {
  return (
    <header className={cl.pageHeader}>
      <p className={cl.pageTitle}>
        {title}
      </p>
    </header>
  )
};

export default BlackAndWhiteHeader;
