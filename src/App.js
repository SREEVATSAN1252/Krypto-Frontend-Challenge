import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./Components/components.css";
import Home from "./Components/Home";
import Cart from "./pages/Cart";
import FavProduct from "./Components/FavProduct";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product">
          <FavProduct/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
