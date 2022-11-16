import React, { useState, useContext } from 'react'

import AuthContext from '../../context/AuthContext'

import cl from './LoginSignupPage.module.css'


const LoginPage = () => {

  let { loginUser } = useContext(AuthContext)
  let [credentials, setCredentials] = useState(
    { email: '', password: '' })

  return (
    <div>
      <div
        className={cl.loginBlock}>
        <p className={cl.label}>Вход</p>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setCredentials({...credentials, email: e.target.value })}
          className={cl.authInput}/>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className={cl.authInput}/>
        <button
          onClick={(e) => loginUser(e, credentials)}
          className={cl.loginButton}>Войти</button>
        <div className={cl.signupLabel}><a href="/signup" className={cl.link}>Зарегистрируйтесь</a>, если нет аккаунта.</div>
      </div>
    </div>
  )
}

export default LoginPage
