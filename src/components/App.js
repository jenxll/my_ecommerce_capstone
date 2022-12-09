import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../style/index.scss";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./navigation/Navbar";
import Icons from "./helpers/Icons";
import "../style/main.scss";
Icons();

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
