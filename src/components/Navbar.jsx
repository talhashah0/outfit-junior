import { NavLink } from "react-router-dom";
import { Home, ShoppingBag, Phone } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="oj-navbar">
      <div className="oj-navbar-inner">
        {/* LEFT */}
        <NavLink to="/" className="oj-brand">
          <div className="oj-logo">OJ</div>
          <span className="oj-name">OUTFIT JUNIOR</span>
        </NavLink>

        {/* RIGHT */}
        <div className="oj-links">
          <NavLink to="/" className="oj-link">
            <span className="text">HOME</span>
            <Home className="icon" />
          </NavLink>

          <NavLink to="/shop" className="oj-link">
            <span className="text">SHOP</span>
            <ShoppingBag className="icon" />
          </NavLink>

          <NavLink to="/contact" className="oj-link">
            <span className="text">CONTACT</span>
            <Phone className="icon" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
