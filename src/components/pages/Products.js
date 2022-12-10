import { useEffect, useState, useContext } from "react";
import ProductItem from "../products/ProductItem";

import { CartContext } from "../../context/CartProvider";

export default function Products(props) {
  // const filter = props.match.params.filter
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const { clearCart, addProduct } = useContext(CartContext);

  function renderProducts() {
    return products.map((item) => {
      return <ProductItem key={item.id} item={item} addProduct={addProduct} />;
    });
  }

  useEffect(() => {
    // const url = filter ? "/category/" + filter : ""  add {url} to filter

    fetch(`https://fakestoreapi.com/products ${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Products Error", err));
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      {renderProducts()}
      <button onClick={() => setCategory("category/electronics")}>
        Electronics
      </button>
      <button onClick={() => setCategory("category/jewelery")}>Jewelery</button>
      <button onClick={() => setCategory("catgory/men's clothing")}>
        Men's Clothing
      </button>
      <button onClick={() => setCategory("catgory/wommen's clothing")}>
        Women's Clothing
      </button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
