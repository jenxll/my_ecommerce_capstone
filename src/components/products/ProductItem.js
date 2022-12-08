export default function ProductItem(props) {
  console.log(props);
  return (
    <div className="product-card-container">
      <h5>{props.item.title}</h5>
      <img src={props.item.image} />
      <h6>${props.item.price}</h6>
    </div>
  );
}
