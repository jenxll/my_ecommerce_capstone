import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

export default function Cart() {
  const { clearCart } = useContext(CartContext);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}
