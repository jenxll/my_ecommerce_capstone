import { useEffect, useState, useContext } from "react";
import ProductItem from "../products/ProductItem";

import { CartContext } from "../../context/CartProvider";

export default function Products(props) {
  // const filter = props.match.params.filter
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const { clearCart, addProduct } = useContext(CartContext);

  function renderProducts() {
    return products.map((item) => {
      return <ProductItem key={item.id} item={item} addProduct={addProduct} />;
    });
  }

  useEffect(() => {
    const url = filter.length > 0 ? "/category/" + filter : ""; // add {url} to filter

    fetch(`https://fakestoreapi.com/products${url}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Products Error", err));
  }, [filter]);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="store-controls">
        <div className="store-filter-container">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          <div className="store-clear-cart">
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      </div>
      {renderProducts()}
    </div>
  );
}
