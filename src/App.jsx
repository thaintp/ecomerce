import { Router, Switch, Route } from "react-router-dom";
import { TopBar, NavBar, Footer } from "components";
import { Home, Products, Detail, Seller } from "pages";
import "style.scss";

import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [showSellerBoard, setShowSellerBoard] = useState(false);

  const { account: currentAccount } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentAccount) {
      setShowSellerBoard(currentAccount.roles.includes("seller"));
    }
  }, [currentAccount]);

  return (
    <Router history={history}>
      <div className="App">
        <TopBar />
        <hr />
        <NavBar />
        <hr />

        <Switch className="App__content">
          <Route exact path="/">
            {showSellerBoard ? <Seller /> : <Home />}
          </Route>
          <Route path="/products/:category/:id">
            <Detail />
          </Route>
          <Route path="/products/:category">
            <Products />
          </Route>
          <Route path="/seller">
            <Seller />
          </Route>
        </Switch>

        <hr />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
