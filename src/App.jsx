import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { TopBar, NavBar, Footer } from 'components';
import { Home, Products } from 'pages';
import styles from 'App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <TopBar />
        <hr />
        <NavBar />
        <hr />

        <Switch className={styles.content}>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <hr/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
