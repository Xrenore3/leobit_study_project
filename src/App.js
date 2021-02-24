import Home from "./pages/home/Home";
import Products from './pages/products/Products';
import About from "./pages/about/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import GlobalsStyles from './components/globals/GlobalsStyles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from "styled-components";
import {mainTheme} from './utils/main_theme'

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <GlobalsStyles />
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
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>)
}

export default App;
