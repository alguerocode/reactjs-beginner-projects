import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h2>LOGO</h2>
      </Link>

      <ul className="nav-links">
        <Link to="/about">
          <li>about</li>
        </Link>
        <Link to="/shop">
          <li>shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
