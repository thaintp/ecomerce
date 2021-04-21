import { Router, Switch, Route, Redirect } from "react-router-dom";
import {
  TopBar,
  NavBar,
  Footer,
  SellerTopBar,
  SellerSidebar,
} from "components";
import {
  Home,
  Products,
  Detail,
  Seller,
  Cart,
  SellerOrders,
  SellerProducts,
  PostProduct,
} from "pages";
import "style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { clearMessage } from "./actions/message";
import { getCartDetail } from "actions/cart";
import { history } from "./helpers/history";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [showSellerBoard, setShowSellerBoard] = useState(false);
  const [sellerCategory, setSellerCategory] = useState("Overview");

  const { account: currentAccount } = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentAccount) {
      setShowSellerBoard(currentAccount.roles.includes("seller"));
      if (!currentAccount.roles.includes("seller")) dispatch(getCartDetail());
    } else {
      setShowSellerBoard(false);
    }
  }, [currentAccount, dispatch]);

  return (
    <Router history={history}>
      <div className={"App-loading" + (loading ? "" : " hidden")}>
        <span className="spinner-border spinner-border-sm mr-2"></span>
      </div>
      {showSellerBoard ? (
        <div className="App-seller">
          <Container fluid className="h-100 p-0">
            <Row className="App-seller__topbar">
              <Col xs={2} className="App-seller__logo my-auto">
                <img src="/images/logo.svg" alt="" />
              </Col>
              <Col xs={10}>
                <SellerTopBar sellerCategory={sellerCategory} />
              </Col>
            </Row>
            <Row className="App-seller__sidebar">
              <Col xs={2}>
                <SellerSidebar
                  sellerCategory={sellerCategory}
                  setSellerCategory={setSellerCategory}
                />
              </Col>
              <Col xs={10}>
                <Switch className="App__content">
                  <Route exact path="/seller/overview">
                    <Seller />
                  </Route>
                  <Route exact path="/seller/orders">
                    <SellerOrders />
                  </Route>
                  <Route exact path="/seller/products/add">
                    <PostProduct />
                  </Route>
                  <Route exact path="/seller/products">
                    <SellerProducts />
                  </Route>
                  <Route path="/seller/:category">
                    <Seller />
                  </Route>
                  <Route path="/">
                    <Redirect to="/seller/overview" />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
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
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>

          <hr />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
