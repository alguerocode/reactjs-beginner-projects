import React, { useContext, useState } from 'react';
import { MovieListContext } from './movieListContext';
const AddMovie = () => {
  const [movies, setMovie] = useContext(MovieListContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const updateName = (e) => {
    setName(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }
  const addMovie = e => {
    e.preventDefault();
    const newMovie = {
      name: name.trim(),
      price: price.trim(),
      id: Math.floor((Math.random() + 1) * 10)
    }
    setMovie(movies.concat(newMovie));
    setName('');
    setPrice('');
  }
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button type="submit">submit</button>
    </form>
  );
}

export default AddMovie;