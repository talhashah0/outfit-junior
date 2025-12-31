import Navbar from "../components/Navbar";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Classic Hoodie",
    price: "$45",
    image: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    name: "Streetwear T-Shirt",
    price: "$25",
    image: "https://via.placeholder.com/300"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "$65",
    image: "https://via.placeholder.com/300"
  }
];

export default function Shop() {
  return (
    <>
      <Navbar />
      <div className="shop">
        <h1>Our Collection</h1>

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
