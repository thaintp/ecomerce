import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TopBar, NavBar, Footer } from "components";
import { Home, Products, Detail } from "pages";
import "style.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <hr />
        <NavBar />
        <hr />

        <Switch className="App__content">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category/:id">
            <Detail />
          </Route>
          <Route path="/products/:category">
            <Products />
          </Route>
        </Switch>

        <hr />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
