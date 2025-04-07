import React from 'react'

export default function BookCardBox({ books }) {
  const { title, originalTitle, releaseDate, description, pages, cover } = books
  return (
    <div>
      <h1>{title}</h1>
      <h3>{originalTitle}</h3>
      <p>Release Date: {releaseDate}</p>
      <p>{description}</p>
      <p>Pages: {pages}</p>
      <img src={cover} alt={title} width="150" />
    </div>
  )
}
