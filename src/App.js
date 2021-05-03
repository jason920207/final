import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout } from './components'
import { Home, PortfolioPage, ContactPage } from './pages'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/portfolio"><PortfolioPage /></Route>
          <Route exact path="/contact"><ContactPage /></Route>
          <Route render={() => <h1>404 not found ！</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
