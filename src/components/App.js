import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../style/index.scss";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./navigation/Navbar";
import icons from "./helpers/icons";
import About from "./pages/About";
import Footer from "./pages/Footer";
import CartProvider from "../context/CartProvider";

import "../style/main.scss";

icons();

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
