import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../style/style.scss";
import Main from "../pages/Main";
import Product from "../pages/Product";
import Cart from "../pages/Cart.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Switch>
          <Route />
        </Switch>
      </Router>
      <Main></Main>
      <Product></Product>
      <Cart></Cart>
    </div>
  );
}

export default App;
