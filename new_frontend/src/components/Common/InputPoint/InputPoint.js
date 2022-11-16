import React from "react";

import cl from './InputPoint.module.css'


const InputPoint = ({ title,
                      value,
                      changeSomething, 
                      titleSize='100px' }) => {
  return (
    <p
      // style={{
      //   gridTemplateColumns:
      //     `${titleSize} 1fr`}} 
      className={cl.inputPoint}>
      {/* <span className={cl.inputPointTitle}>
        {title}:
      </span> */}
      <input
        value={value}
        onChange={(e) => changeSomething(e)}
        placeholder={title}
        className={cl.input}/>
    </p>
  )
};

export default InputPoint;
