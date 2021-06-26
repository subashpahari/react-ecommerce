import "./App.css";
import HomePage from "./components/pages/homepage/Homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
