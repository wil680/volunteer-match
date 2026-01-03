import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Menu />
    </nav>
  );
}

function Menu() {
  return (
    <ul className="navbar-ul">
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/browse">Browse</Link>
      </li>

      <li>
        <Link to="/donate">Donate</Link>
      </li>
      <li>
        <Link to="/login" id="signin">
          Sign In
        </Link>
      </li>
    </ul>
  );
}

function Logo() {
  return (
    <Link to="/" className="logo">
      Volunteer Match
    </Link>
  );
}
