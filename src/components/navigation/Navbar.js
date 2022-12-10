import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <NavLink exact to="/">
        <button>
          Home
          <FontAwesomeIcon icon="house" />
        </button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <NavLink to="/products">
        <button>Store</button>
      </NavLink>
      <NavLink to="/cart">
        <button>
          Cart
          <FontAwesomeIcon icon="shopping-cart" />
        </button>
      </NavLink>
    </div>
  );
}
