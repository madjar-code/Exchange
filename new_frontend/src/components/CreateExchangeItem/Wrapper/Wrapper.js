import React from "react";

import WorkingField from "../WorkingField/WorkingField";

import cl from './Wrapper.module.css'


const Wrapper = ({ children }) => {
  return (
    <div className={cl.wrapper}>
      {children}
    </div>
  )
};

export default Wrapper;
