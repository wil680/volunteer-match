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
        <Link to="/dashboard">Donate</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
}

function Logo() {
  return (
    <a>
      <h1 className="logo">Volunteer Match</h1>
    </a>
  );
}
