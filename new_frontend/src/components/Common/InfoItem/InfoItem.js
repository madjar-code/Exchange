import React from "react";

import cl from './InfoItem.module.css'


const InfoItem = ({title, data}) => {
  return (
    <p className={cl.infoItem}>
      <span className={cl.infoItemTitle}>
        {title}:
      </span> {data}
    </p>
  )
};

export default InfoItem;
