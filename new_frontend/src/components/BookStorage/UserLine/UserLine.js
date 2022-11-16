import React from "react";
import { useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';

import cl from './UserLine.module.css'


const UserLine = ({ username, path }) => {
  let navigate = useNavigate()

  return (
    <div className={cl.userLine}>
      <PersonIcon
        onClick={() => navigate(path)}
        className={cl.userAvatar}/>
      {/* <img
        src={avatar}
        onClick={() => navigate('/my-profile')}
        className={cl.userAvatar}/> */}
      <p
        onClick={() => navigate(path)}
        className={cl.name}>{username}</p>
    </div>
  )
};

export default UserLine;
