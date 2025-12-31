import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Classic Hoodie",
    price: "$45",
    image: "https://via.placeholder.com/300x350?text=Front",
    hoverImage: "https://via.placeholder.com/300x350?text=Back"
  },
  {
    id: 2,
    name: "Street T-Shirt",
    price: "$25",
    image: "https://via.placeholder.com/300x350?text=Front",
    hoverImage: "https://via.placeholder.com/300x350?text=Back"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "$65",
    image: "https://via.placeholder.com/300x350?text=Front",
    hoverImage: "https://via.placeholder.com/300x350?text=Back"
  },
  {
    id: 4,
    name: "Jogger Pants",
    price: "$40",
    image: "https://via.placeholder.com/300x350?text=Front",
    hoverImage: "https://via.placeholder.com/300x350?text=Back"
  }
];

export default function Shop() {
  return (
    <div className="shop">
      <h1>Our Collection</h1>

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="product-image">
              <img src={item.image} alt={item.name} className="img-front" />
              <img src={item.hoverImage} alt={item.name} className="img-back" />
            </div>

            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
