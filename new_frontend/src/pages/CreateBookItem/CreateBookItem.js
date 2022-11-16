import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import InputPoints from "../../components/CreateBookItem/InputPoints/InputPoints";
import BlackAndWhiteHeader from "../../components/Common/BlackAndWhiteHeader/BlackAndWhiteHeader";
import CCDescription from "../../components/Common/CCDescription/CCDescription";
import CCButton from "../../components/Common/CCButton/CCButton";
import AuthContext from '../../context/AuthContext'
import APIService from "../../API/APIService";

import cl from './CreateBookItem.module.css'


const CreateBookItem = () => {
  let { authTokens } = useContext(AuthContext)
  let navigate = useNavigate()

  let [credentials,
       setCredentials] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    // storage: ''
  })

  const createBook = (credentials) => {
    APIService.createBookItem(credentials, authTokens)
    navigate('/bs-me')
  }

  return (
    <div style={{ backgroundColor: 'var(--black-white)', height: '100vh'}}>
      <BlackAndWhiteHeader
        title={'Добавить книгу'}/>
      <InputPoints
        credentials={credentials}
        setCredentials={setCredentials}/>
      <CCDescription
        credentials={credentials}
        setCredentials={setCredentials}
        title={'Описание'}/>
      <CCButton
        credentials={credentials}
        createOrChange={createBook}
        title={'Создать книгу'}/>
    </div>
  )
};

export default CreateBookItem;
