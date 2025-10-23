import { Link } from "react-router-dom";
import '../App.css';

function Nav() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/count">
        Count
      </Link>
      <Link className="nav-link" to="/likes">
        Likes
      </Link>
      <Link className="nav-link" to="/useeffect">
      UseEffect</Link>
    </nav>
  );
}

export default Nav;