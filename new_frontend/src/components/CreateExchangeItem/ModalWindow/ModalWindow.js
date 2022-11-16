import React, { useState } from "react";

import SmallBWHeader from "../SmallBWHeader/SmallBWHeader";
import WorkingField from "../WorkingField/WorkingField";
import Wrapper from "../Wrapper/Wrapper";

import cl from './ModalWindow.module.css'


const ModalWindow = ({ active, setActive, bookItems, handleConfirmation, bookItemsWithStates }) => {  
  let [targetBookItems, setTargetBookItems] = useState([])

  const generate = () => {
    bookItemsWithStates.map(
      (bookItemWithState) => {
        if (bookItemWithState.state) {
          targetBookItems.push(bookItemWithState.bookItem)
        }
      })
  }

  return (
    <div 
      onClick={() => setActive(false)}
      className={active ? cl.modalActive: cl.modal}>
      <div
        onClick={e => e.stopPropagation()}
        className={active ? cl.modal__contentActive: cl.modal__content}>

        <SmallBWHeader/>
        <Wrapper>
          <WorkingField
            bookItems={bookItems}
            bookItemsWithStates={bookItemsWithStates}/>
          <button
            onClick={() => {
              generate()
              handleConfirmation(targetBookItems)
              targetBookItems = []
              setTargetBookItems(targetBookItems)}}
            className={cl.addingBookItems}>
              Добавить книги
          </button>
        </Wrapper>
      </div>      
    </div>
  )
};

export default ModalWindow;
