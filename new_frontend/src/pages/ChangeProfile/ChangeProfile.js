import React, { useState, useContext, useEffect  } from "react";

import BlackAndWhiteHeader from "../../components/Common/BlackAndWhiteHeader/BlackAndWhiteHeader";
import InputPoints from "../../components/ChangeProfile/InputPoints/InputPoints";
import CCDescription from '../../components/Common/CCDescription/CCDescription'
import CCButton from "../../components/Common/CCButton/CCButton";
import APIService from '../../API/APIService'
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const ChangeProfile = () => {
  let [currentUser,
       setCurrentUser] = useState(null)

  let [credentials, 
       setCredentials] = useState({
    address: '',
    email: '',
    description: ''
  })

  let { authTokens } = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(() => {
    getMyProfile()
  }, [])

  const getMyProfile = async () => {
    let response = await fetch('/api/users/current/',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    credentials.address = data.address
    credentials.email = data.email
    credentials.description = data.description
    setCredentials(credentials)
    setCurrentUser(data)
  }

  const changeProfile = (credentials) => {
    APIService.changeProfile(credentials, authTokens)
    navigate('/my-profile')
  }

  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'var(--black-white)'
    }}>
      <BlackAndWhiteHeader
        title={'Изменить профиль'}/>
      <InputPoints 
        credentials={credentials}
        setCredentials={setCredentials}/>
      <CCDescription
        credentials={credentials}
        setCredentials={setCredentials}
        title={'Немного о себе'}/>
      <CCButton
        credentials={credentials}
        createOrChange={changeProfile}
        title={'Сохранить'}/>
    </div>
  )
};

export default ChangeProfile;
