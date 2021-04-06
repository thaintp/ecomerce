import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { TopBar, NavBar } from 'components';
import { Home, Products } from 'pages';
import styles from 'App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <TopBar />
          <hr />
        <NavBar />

        <Switch className={styles.content}>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
