import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home-overlay"></div>

      <div className="home-content">
        <h1 className="home-title">OUTFIT JUNIOR</h1>

        <p className="home-subtitle">
          Luxury Kidswear · Comfort · Style
        </p>

        <Link to="/shop" className="home-btn">
          SHOP COLLECTION
        </Link>
      </div>
    </section>
  );
};

export default Home;
