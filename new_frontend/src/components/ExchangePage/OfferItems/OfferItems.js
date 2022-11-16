import React from "react";

import OfferRequestItem from '../../Common/OfferRequestItem/OfferRequestItem'
import BookOfferRequestItem from "../../Common/OfferRequestItem/BookOfferRequestItem";

import unique from "../../../utils/SecondaryFunctions";


const OfferItems = ({ exchangeItem }) => {
  let namesOfTheOfferedBooks = []
  let slugsForURL = []
  let namesOfTheAuthors = []
  let genreNames = []

  exchangeItem?.offered_books.map((offered_book) =>
    {
      namesOfTheOfferedBooks.push(offered_book.title)
      slugsForURL.push(offered_book.slug)
      namesOfTheAuthors.push(offered_book.author)
      genreNames.push(offered_book.genre)

      namesOfTheOfferedBooks = unique(namesOfTheOfferedBooks)
      slugsForURL = unique(slugsForURL)
      namesOfTheAuthors = unique(namesOfTheAuthors)
      genreNames = unique(genreNames)
    }
  )

  return (
    <div>
      <BookOfferRequestItem
        title={'Книги'}
        slugsForURL={slugsForURL}
        tagNames={namesOfTheOfferedBooks}/>
      <OfferRequestItem
        title={'Авторы'}
        tagNames={namesOfTheAuthors}/>
      <OfferRequestItem
        title={'Жанры'}
        tagNames={genreNames}/>
    </div>
  )
};

export default OfferItems;
