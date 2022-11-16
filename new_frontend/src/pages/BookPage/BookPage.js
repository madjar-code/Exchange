import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BlackAndWhiteHeader from "../../components/Common/BlackAndWhiteHeader/BlackAndWhiteHeader";
import InfoItem from '../../components/Common/InfoItem/InfoItem'
import BookTitle from "../../components/BookPage/BookTitle/BookTitle";
import Description from "../../components/Common/Description/Description";
import APIService from "../../API/APIService";

import cl from './BookPage.module.css'


const BookPage = () => {
  const params = useParams()
  const bookSlug = params.bookSlug

  let [bookItem, setBookItem] = useState(null)

  useEffect(() => {
    APIService.getOneBookItem(setBookItem, bookSlug)
  }, [])

  return(
    <div className={cl.page}>
      <BlackAndWhiteHeader title={'Подробно о книге'}/>
      <BookTitle bookItem={bookItem}/>
      <div className={cl.infoBlock}>
        <InfoItem title={'Автор'} data={bookItem?.author}/>
        <InfoItem title={'Жанр'} data={bookItem?.genre}/>
        {
          bookItem?.description 
          ? <Description
              title={'Описание'}
              description={bookItem?.description}/>
          : <Description
              title={'Описание'}
              description={'Нет отписания'}/>
        }
        
      </div>
    </div>
  )
};

export default BookPage;
