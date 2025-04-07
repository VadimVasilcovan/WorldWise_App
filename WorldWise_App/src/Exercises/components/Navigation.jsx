import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
        <Link to='bookList'>The List Of books</Link>
        <Link to='BooksNumber'>detailes</Link>
    </div>
  )
}
