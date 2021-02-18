import Home from "./pages/home/Home";
import Products from './pages/products/Products';
import About from "./pages/about/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar";
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='*'>
          <ErrorPage/>
        </Route>



      </Switch>

    </Router>)
}

export default App;
