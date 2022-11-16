import React, { useState, useContext } from 'react'

import AuthContext from '../../context/AuthContext'

import cl from './LoginSignupPage.module.css'


const SignupPage = () => {

  let { signupUser } = useContext(AuthContext)
  let [credentials, setCredentials] = useState(
    { username: '', email: '', password: '' })

  return (
    <div>
      <div className={cl.signupBlock}>
        <p className={cl.label}>Регистрация</p>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className={cl.authInput} />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          className={cl.authInput} />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className={cl.authInput} />
        <button
          onClick={(e) => signupUser(e, credentials)}
          className={cl.signupButton}>Зарегистрироваться</button>
        <div className={cl.loginLabel}><a href="/login" className={cl.link}>Войдите</a>, если у вас есть аккаунт</div>
      </div>
    </div>
  )
}

export default SignupPage
