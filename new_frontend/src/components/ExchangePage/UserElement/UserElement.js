import React from "react";
import { useNavigate } from "react-router-dom";

import avatar from './user.png'
import cl from './UserElement.module.css'


const UserElement = ({ isOwner, username, userSlug }) => {
  let navigate = useNavigate()

  let path = '/my-profile'
  if (!isOwner) {
    path = `/user-${userSlug}`
  }

  return(
    <div className={cl.userElement}>
      <img
        src={avatar}
        onClick={() => navigate(path)}
        className={cl.userAvatar}/>
      <p
        onClick={() => navigate(path)}
        className={cl.name}>
          {username}
      </p>
    </div>
  )
};

export default UserElement;
