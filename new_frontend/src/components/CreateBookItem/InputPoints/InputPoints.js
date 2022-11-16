import React from "react";
import InputPoint from "../../Common/InputPoint/InputPoint";

import cl from './InputPoints.module.css'


const InputPoints = ({ credentials, setCredentials }) => {
  const changeTitle = (e) => {
    setCredentials({...credentials, title: e.target.value})
  }

  const changeAuthor = (e) => {
    setCredentials({...credentials, author: e.target.value})
  }

  const changeGenre = (e) => {
    setCredentials({...credentials, genre: e.target.value})
  }

  return (
    <div className={cl.inputPoints}>
      <InputPoint
        title={'Название'}
        changeSomething={changeTitle}/>
      <InputPoint
        title={'Автор'}
        changeSomething={changeAuthor}/>
      <InputPoint
        title={'Жанр'}
        changeSomething={changeGenre}/>
    </div>
  )
};

export default InputPoints;
