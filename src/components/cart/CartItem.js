export default function CartItem(props) {
  return (
    <div className="cart-item-container">
      <h5>{props.item.title}</h5>
      <img src={props.item.image} alt="main product" />
      <h6>{props.item.description}</h6>
      <h6>${props.item.price}</h6>
    </div>
  );
}
