import { useEffect, useState } from "react";
import ProductItem from "../products/ProductItem";

export default function Products(props) {
  // const filter = props.match.params.filter
  const [products, setProducts] = useState([]);

  function renderProducts() {
    return products.map((item) => {
      return <ProductItem key={item.id} item={item} />;
    });
  }

  useEffect(() => {
    // const url = filter ? "/category/" + filter : ""  add {url} to filter

    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error("Products Error", err));
  }, []);

  return (
    <div className="products-container">
      <h1>Product data</h1>
      {renderProducts()}
    </div>
  );
}
