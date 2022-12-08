import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/products">Store</NavLink>
      <NavLink to="/cart"> Cart</NavLink>
    </div>
  );
}
