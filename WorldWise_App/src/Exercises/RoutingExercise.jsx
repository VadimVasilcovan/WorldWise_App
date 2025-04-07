import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePageEx from './pages/HomePageEx';
import BooksPage from './pages/BooksPage';
import ListOfBooks from './components/ListOfBooks';

const APITEST = 'https://potterapi-fedeperin.vercel.app/en/books'
export default function RoutingExercise() {
  const [book, setBook]=useState([])
  useEffect(()=>{
    async function GetListOfBooks() {
      try{
        const data = await fetch (`${APITEST}`);
        const result = await data.json();
        setBook(result);
      }catch(e){

      }finally{

      }
    }
    GetListOfBooks();
    
  },[])
  console.log(book)
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePageEx/>}/>
            <Route path='/app' element={<BooksPage/>}>
              <Route index element={<Navigate replace to='books' />} />
              <Route path='books' element={<ListOfBooks/>}/>
              {/* <Route path='/books:id' element={}/> */}
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}