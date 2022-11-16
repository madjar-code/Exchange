import React from "react";

import InputPoint from "../../Common/InputPoint/InputPoint";


const InputPoints = ({ credentials, setCredentials }) => {
  const changeAddress = (e) => {
    setCredentials({...credentials, address: e.target.value})
  }

  const changeEmail = (e) => {
    setCredentials({...credentials, email: e.target.value})
  }

  return (
    <div>
      <InputPoint
        value={credentials.address}
        title={'Адрес'}
        changeSomething={changeAddress}
        titleSize={'70px'}/>
      <InputPoint
        value={credentials.email}
        title={'Email'}
        changeSomething={changeEmail}
        titleSize={'70px'}/>
    </div>
  )
};

export default InputPoints;
