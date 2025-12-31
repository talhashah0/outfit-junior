import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: "12px" }}>Home</Link>
      <Link to="/shop" style={{ marginRight: "12px" }}>Shop</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
