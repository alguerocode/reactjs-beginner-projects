import {useEffect, useState} from 'react';
import Check from './useCheck';
import {Link} from 'react-router-dom';
// import useFetch from './useFetch';

const Game = (props) => {
  const {title, description, firstTurn} = props;
  let arr;
  let [tries, setTry] = useState(8);
  const [gameEnd ,setEnd] =useState(false)
  const [XArr, setXArr] = useState([]);
  const [OArr, setOArr] = useState([]);
  const [turn, setTurn] = useState(firstTurn);
  useEffect(() => {});
  const usefetching = (winner) => {
    fetch('http://localhost:7000/games', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: description,
        theWinner: winner
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((err) => {
      console.log(err);
    });
  };

  function clickHandler(e) {
    const box = e.target;
    box.textContent = turn;
    box.disabled = true;
    if (turn === 'X') {
      arr = XArr;
      arr.push(parseInt(box.id));
      setTry(tries - 1);
      console.log(tries);
      setXArr(arr);
      if (Check(XArr)) {
        alert('X is winner');
        usefetching('X');
        setEnd(true)
      } else {
        if (tries === 0) {
          alert('there are no tries');
          usefetching('niether');
          setEnd(true)
        } else {
          setTurn('O');
        }
      }
    } else {
      arr = OArr;
      arr.push(parseInt(box.id));
      setOArr(arr);
      setTry(tries - 1);
      if (Check(OArr)) {
        alert('O is Winner');
        usefetching('O');
        setEnd(true)
      } else {
        if (tries === 0) {
          alert('there are no tries');
          usefetching('niether');
        setEnd(true)
        } else {
          setTurn('X');
        }
      }
    }
  }
  return (
    <div className="game-play">
      {!(gameEnd) &&<div><h1>{title}</h1>
      <h2>player turn is: {turn}</h2>
      <div className="game-board">
        <button id="1" onClick={clickHandler}></button>
        <button id="2" onClick={clickHandler}></button>
        <button id="3" onClick={clickHandler}></button>
        <button id="4" onClick={clickHandler}></button>
        <button id="5" onClick={clickHandler}></button>
        <button id="6" onClick={clickHandler}></button>
        <button id="7" onClick={clickHandler}></button>
        <button id="8" onClick={clickHandler}></button>
        <button id="9" onClick={clickHandler}></button>
      </div>
      <p>{description}</p>
      </div>}
      <div className="end-game">
        <Link to="/" className="link">
          End Game
        </Link>
      </div>
    </div>
  );
};

export default Game;
