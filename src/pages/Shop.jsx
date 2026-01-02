import { useState } from "react";
import "./Shop.css";

export default function Shop() {
  const [openTile, setOpenTile] = useState(null);

  const toggle = (tile) => {
    setOpenTile(openTile === tile ? null : tile);
  };

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop</h1>

      {/* APPAREL */}
      <section className="shop-section">
        <h2 className="section-title">Apparel</h2>

        <div className="tile-grid">
          {/* TOP WEAR */}
          <div className="shop-tile" onClick={() => toggle("top")}>
            <h3>👕 Top Wear</h3>

            {openTile === "top" && (
              <ul className="tile-content">
                <li>T-Shirts</li>
                <li>Casual Shirts</li>
                <li>Hoodies</li>
                <li>Sweaters</li>
              </ul>
            )}
          </div>

          {/* BOTTOM WEAR */}
          <div className="shop-tile" onClick={() => toggle("bottom")}>
            <h3>👖 Bottom Wear</h3>

            {openTile === "bottom" && (
              <ul className="tile-content">
                <li>Pants</li>
                <li>Trousers</li>
              </ul>
            )}
          </div>

          {/* FANCY WEAR */}
          <div className="shop-tile" onClick={() => toggle("fancy")}>
            <h3>👑 Fancy Wear</h3>

            {openTile === "fancy" && (
              <ul className="tile-content">
                <li>Boys Three Piece Suit</li>
                <li>Sherwani</li>
                <li>Kurta Shalwar</li>
                <li>Waistcoat</li>
                <li>Dress Coat</li>
                <li>Prince Coat</li>
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section className="shop-section">
        <h2 className="section-title">Accessories</h2>

        <div className="tile-grid single">
          <div className="shop-tile" onClick={() => toggle("accessories")}>
            <h3>🧸 Accessories</h3>

            {openTile === "accessories" && (
              <ul className="tile-content">
                <li>Gallace</li>
                <li>Belt</li>
                <li>Bow</li>
                <li>Cap</li>
                <li>Booties</li>
                <li>Socks</li>
                <li>Blankets</li>
                <li>Swaddles</li>
                <li>Bibs</li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
