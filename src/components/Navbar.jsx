import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">OUTFIT JUNIOR</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
