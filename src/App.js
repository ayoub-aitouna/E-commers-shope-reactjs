import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components";

import { Dashboard, ShopCart } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="switch-container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/ShopCart" component={ShopCart} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
