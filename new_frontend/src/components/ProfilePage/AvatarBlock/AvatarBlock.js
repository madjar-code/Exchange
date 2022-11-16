import React from "react";

import cl from './AvatarBlock.module.css'


const AvatarBlock = ({ username }) => {
  return (
    <div className={cl.avatarBlock}>
      {/* <img
        src={avatar}
        className={cl.avatar}/> */}
      <p className={cl.name}>{username}</p>
    </div>
  )
};

export default AvatarBlock;
