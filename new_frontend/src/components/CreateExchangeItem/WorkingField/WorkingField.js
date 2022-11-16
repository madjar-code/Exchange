import React, { useState } from "react";
import SmallBookItem from "../SmallBookItem/SmallBookItem";

import cl from './WorkingField.module.css'


const WorkingField = ({ bookItemsWithStates }) => {
  return (
    <div className={cl.workingField}>
      {bookItemsWithStates?.map(
        ((bookItemWithState, index) => (
          <SmallBookItem
            key={index}
            bookItemWithState={bookItemWithState}/>
      )))}
    </div>
  )
};

export default WorkingField;
