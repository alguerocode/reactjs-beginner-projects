import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <header>TicTacToe</header>
        <div className="links">
          <div className="home-link">
            <Link to="/" className="link">Home</Link>
          </div>
          <div className="new-game-link">
            <Link to="/new-game" className="link">New Game</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
