import React from "react";
import AddMovie from "./addMovie";
import './App.css';
import MovieList from "./MovieList";
import { MovieProvider } from "./movieListContext";
import Nav from "./Nav";



function App() {

  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
