import { useParams } from "react-router-dom";
import "./Product.css";

const products = [
  {
    id: "1",
    name: "Essential Hoodie",
    price: "$45",
    image: "https://images.unsplash.com/photo-1520975922215-c3f5f1f9f3b6",
    description: "A premium everyday hoodie designed for comfort and style."
  },
  {
    id: "2",
    name: "Classic T-Shirt",
    price: "$25",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    description: "Minimal cotton tee with a modern relaxed fit."
  },
  {
    id: "3",
    name: "Denim Jacket",
    price: "$65",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    description: "Timeless denim jacket made for layering."
  },
  {
    id: "4",
    name: "Relaxed Joggers",
    price: "$40",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    description: "Comfort-first joggers with a clean silhouette."
  }
];

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
        <h1>{product.name}</h1>
        <span className="price">{product.price}</span>
        <p>{product.description}</p>

        <button className="coming-soon">Coming Soon</button>
      </div>
    </div>
  );
}
