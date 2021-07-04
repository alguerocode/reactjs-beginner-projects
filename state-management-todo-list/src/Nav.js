import React,{useContext} from 'react';
import {MovieListContext} from "./movieListContext"
const Nav  = () => {
  const [movie] =useContext(MovieListContext);
  return ( 
    <div className="nav">
      <h3>salah alhashmi</h3>
      <p>list Of Movies:{movie.length}</p>
    </div>
   );
}
 
export default Nav;