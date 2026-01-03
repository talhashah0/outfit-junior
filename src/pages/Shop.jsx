import { useState } from "react";
import "./Shop.css";

export default function Shop() {
  const [open, setOpen] = useState(null);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop</h1>

      {/* ================= APPAREL ================= */}
      <section className="shop-section">
        <h2 className="section-title">Apparel</h2>

        <div className="icon-grid">
          {/* TOP WEAR */}
          <div className="icon-column">
            <button
              className={`icon-tile ${open === "top" ? "active" : ""}`}
              onClick={() => toggle("top")}
            >
              <img
                src="https://www.svgrepo.com/show/438838/shirt-round.svg"
                alt="Top Wear"
                className="shop-icon"
              />
            </button>

            <div className={`dropdown ${open === "top" ? "open" : ""}`}>
              <ul className="item-list">
                <li>T-Shirts</li>
                <li>Casual Shirts</li>
                <li>Hoodies</li>
                <li>Sweaters</li>
                <li>Sweat Shirts</li>
                <li>Jackets</li>
                <li>Parachutes</li>
                <li>Coats</li>
              </ul>
            </div>
          </div>

          {/* BOTTOM WEAR */}
          <div className="icon-column">
            <button
              className={`icon-tile ${open === "bottom" ? "active" : ""}`}
              onClick={() => toggle("bottom")}
            >
              <img
                src="https://www.svgrepo.com/show/482546/pants-2.svg"
                alt="Bottom Wear"
                className="shop-icon"
              />
            </button>

            <div className={`dropdown ${open === "bottom" ? "open" : ""}`}>
              <ul className="item-list">
                <li>Pants</li>
                <li>Trousers</li>
                <li>Pajamas</li>
                <li>Tights</li>
              </ul>
            </div>
          </div>

          {/* FANCY WEAR */}
          <div className="icon-column">
            <button
              className={`icon-tile ${open === "fancy" ? "active" : ""}`}
              onClick={() => toggle("fancy")}
            >
              <img
                src="https://www.svgrepo.com/show/397713/party-popper.svg"
                alt="Fancy Wear"
                className="shop-icon"
              />
            </button>

            <div className={`dropdown ${open === "fancy" ? "open" : ""}`}>
              <ul className="item-list">
                <li>Boys Three Piece Suit</li>
                <li>Sherwani</li>
                <li>Kurta Shalwar</li>
                <li>Waistcoat</li>
                <li>Dress Coat</li>
                <li>Prince Coat</li>
                <li>Girls Suits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACCESSORIES ================= */}
      <section className="shop-section">
        <h2 className="section-title">Accessories</h2>

        <div className="icon-grid single">
          <div className="icon-column">
            <button
              className={`icon-tile ${open === "accessory" ? "active" : ""}`}
              onClick={() => toggle("accessory")}
            >
              <img
                src="https://www.svgrepo.com/show/506993/cel-rings-love.svg"
                alt="Accessories"
                className="shop-icon"
              />
            </button>

            <div className={`dropdown ${open === "accessory" ? "open" : ""}`}>
              <ul className="item-list">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
