import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Outfit Junior</h1>
        <p>Modern fashion for the next generation</p>

        <Link to="/shop" className="cta">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
