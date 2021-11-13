import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home/Home';
import AllProducts from './components/Home/AllProducts/AllProducts';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './PrivetRoute/PrivetRoute';
import Purchase from './components/Home/Purchase/Purchase';
import Review from './components/Home/Review/Review';
import ReadNews from './components/Home/ReadNews/ReadNews';
import AllNews from './components/Home/LatestNews/AllNews';
import About from './components/Home/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/allNews">
            <AllNews />
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/purchase/:productId">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/news/:newsId">
            <ReadNews></ReadNews>
          </PrivateRoute>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
