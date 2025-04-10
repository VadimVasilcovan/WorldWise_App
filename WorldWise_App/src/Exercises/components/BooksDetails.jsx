import React from 'react'

export default function BooksDetails({book}) {
  console.log(book.number)
  return (
    <div>
        {book.number}
        
    </div>
  )
}
