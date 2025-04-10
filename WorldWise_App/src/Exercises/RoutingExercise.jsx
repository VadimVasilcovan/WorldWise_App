import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePageEx from "./pages/HomePageEx";
import BooksPage from "./pages/BooksPage";
import ListOfBooks from "./components/ListOfBooks";
import BoocksNumber from "./components/BoocksNumber";
import BooksDetails from "./components/BooksDetails";

const APITEST = "https://potterapi-fedeperin.vercel.app/en/books";
export default function RoutingExercise() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    async function GetListOfBooks() {
      try {
        const data = await fetch(`${APITEST}`);
        const result = await data.json();
        setBook(result);
      } catch (e) {
      } finally {
      }
    }
    GetListOfBooks();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageEx />} />
          <Route path="/app" element={<BooksPage book={book} />}>
            <Route path="bookList" element={<ListOfBooks book={book} />} />
            <Route path="BooksNumber" element={<BoocksNumber book={book} />} />
            <Route
              path="bookList/:index"
              element={<BooksDetails book={book} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
