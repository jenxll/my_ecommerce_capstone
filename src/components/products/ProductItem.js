/// consider searching your cart for the item first, and only allowing them to add it if it doesn't exist

export default function ProductItem(props) {
  return (
    <div className="product-card-container">
      <h5>{props.item.title}</h5>
      <img src={props.item.image} alt="main product" />
      <h6>{props.item.description}</h6>
      <h6>${props.item.price}</h6>
      <button onClick={() => props.addProduct(props.item)}>Add to Cart</button>
    </div>
  );
}
