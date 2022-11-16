import React from "react";
import { useNavigate } from "react-router-dom";

import cl from './Logo.module.css'


const Logo = () => {
  let navigate = useNavigate()
  return (
    <p
      onClick={() => navigate('/')}
      className={cl.logo}>
      <span className={cl.blue}>Ex</span>
      Change
    </p>
  )
};

export default Logo;
