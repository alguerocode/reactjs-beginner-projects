import React from 'react';
import useFetch from './useFetch';

const Home = () => {
  const {data, isLoading, errorFetching} = useFetch(
    'GET',
    null,
    'http://localhost:7000/games'
  );
  function deleteHandler(id, e){
    e.preventDefault();
    fetch(`http://localhost:7000/games/${id}`,{
      method:'DELETE',
      body:null
    }).catch(err =>{
      alert('error in delete handler')
    })
    e.target.closest('div').remove()
  }
  return (
    <div className="home">
      <h1>Home Bage</h1>
      <h2>Player Games List</h2>
      <div className="player-list">
        {errorFetching && <h2>Error:{errorFetching.message}</h2>}
        {isLoading && <h3 className="loading">Loading...</h3>}
        {data &&
          data.map((el) => (
            <div key={el.id} className="element">
              <h3>{el.title}</h3>
              <p>The Winner is {el['theWinner']}</p>
              <p>{el.description}</p>
              <button onClick={deleteHandler.bind(this, el.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
