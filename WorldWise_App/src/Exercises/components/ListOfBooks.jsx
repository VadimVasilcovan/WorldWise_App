import React from 'react'
import BookCardBox from './BookCardBox'
import { Link } from "react-router-dom";

export default function ListOfBooks({book}) {
  console.log(book)




 
 
  return (
    <div>
    {book.map(books =>(
    <Link  to={`${books.index}`}>
        <h1>{books.title}</h1>
    </Link>
      ))}
    </div>
  )
}
