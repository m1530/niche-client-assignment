import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Shared/Navigation/Navigation';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Navigation />
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </div>
    </Router>
  );
}

export default App;
