import React from "react";

import cl from './CCDescription.module.css'


const CCDescription = ({ credentials,
                         setCredentials, 
                         title }) => {
  return (
    <div>
      <p className={cl.descriptionTitle}>{title}</p>
      
      <div className={cl.wrapper}>
      <textarea
        value={credentials.description}
        onChange={(e) => setCredentials(
          {...credentials, description: e.target.value}
        )}
        className={cl.description}/>
      </div>
    </div>
  )
};

export default CCDescription;
