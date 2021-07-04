import {useState} from 'react';
import Game from './game';

const CreateGame = () => {
  const [isSubmit, setSubmit] = useState(false);
  const [title, setTitle] = useState(null);
  const [descripe, setDescripe] = useState(null);
  const [turn, setTurn] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <div className="create-game">
      {!isSubmit && (
        <div>
          <h1>Create Game Page</h1>
          <form onSubmit={submitHandler}>
            <h2>Create New Game</h2>
            <h3>Game title:</h3>
            <input
              type="text"
              id="input"
              placeholde="title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <h3>the first one:</h3>
            <input
              type="text"
              id="input"
              placeholder="X or O"
              maxLength="1"
              pattern="(X|O)"
              onChange={(e) => {
                setTurn(e.target.value);
              }}
              required
            />
            <h3>Description:</h3>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="write a description for game"
              required
              onChange={(e)=>{
                setDescripe(e.target.value)
              }}
            ></textarea>
            <input type="submit" value="SUBMIT" id="submit"/>
          </form>
        </div>
      )}
      <div className="game">
        {isSubmit && (
          <Game title={title} description={descripe} firstTurn={turn} />
        )}
      </div>
    </div>
  );
};

export default CreateGame;
