import React, { useState, createContext } from 'react';

export const MovieListContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry poter",
      price: "$30",
      id: 304
    },
    {
      name: 'book of sun',
      price: "$50",
      id: 3043
    },
    {
      name: 'hello world',
      price: "$10",
      id: 30
    }
  ])
  return (
    <MovieListContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieListContext.Provider>
  )
}