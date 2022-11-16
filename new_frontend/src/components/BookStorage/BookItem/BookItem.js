import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import BookIcon from '@mui/icons-material/Book';
import CloseIcon from '@mui/icons-material/Close';

import APIService from "../../../API/APIService";

import cl from './BookItem.module.css'


const BookItem = ({ title, slug, myStorage }) => {
  let navigate = useNavigate()

  const handleDelete = () => {
    APIService.deleteBookItem(slug)
  }

  return (
    <div
      className={cl.bookItem}>
      <BookIcon
        sx={{ fontSize: '40px' }}
        onClick={() => {
          navigate(`/bs-me/book-${slug}`)
        }}
        className={cl.icon}/>
      <p
        onClick={() => {
          navigate(`/bs-me/book-${slug}`)
        }}
        className={cl.bookTitle}>{title}</p>
      
      {
        myStorage
        ?
        <CloseIcon
          sx={{ fontSize: '40px'}}
          onClick={handleDelete}
          className={cl.deleteBook}/>
        :
        <></>
      }
    </div>
  )
};

export default BookItem;
