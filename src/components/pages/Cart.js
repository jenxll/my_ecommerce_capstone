import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CartItem from "../cart/CartItem";

export default function Cart() {
  const { clearCart, cart } = useContext(CartContext);

  function renderCart() {
    return cart.map((item) => {
      return <CartItem key={item.id} item={item} />;
    });
  }
  function renderTotal() {
    if (cart.length > 0) {
      return cart.reduce((prev, curr) => prev + curr.price, 0);
    }
    return false;
  }

  return (
    <div className="cart-content">
      <h1>Cart</h1>
      {renderCart()}
      <div className="totalCart">
        <h1>Your Total is</h1> {renderTotal() || "0"}
      </div>
      <div className="store-clear-cart">
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}
