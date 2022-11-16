import React, { useState } from "react";

import Logo from "../../Common/Logo/Logo";
import MobileNavigation from "../../Common/Navigation/MobileNavigation";

import cl from './EIBHeader.module.css'


const EIBHeader = () => {
  let [allComponents, setAllComponents] = useState(true)

  return(
    <header className={cl.EIBHeader}>
      { allComponents
        ? 
        <div>
          <Logo/>
          <input
            className={cl.searchField}
            placeholder="Поиск..."/>
        </div>
        : 
        <></>
      }
      <MobileNavigation setLogo={setAllComponents}/>
    </header>
  )
};

export default EIBHeader;
