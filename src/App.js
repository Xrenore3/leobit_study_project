import Home from "./pages/home/Home";
import Products from './pages/products/Products';
import About from "./pages/about/About";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/error/ErrorPage';
import GlobalsStyles from './components/globals/GlobalsStyles';
import { ThemeProvider } from "styled-components";
import { mainTheme } from './utils/main_theme'
import SingleProducts from './pages/single_product/SingleProducts';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { getAllProducts } from './redux/products_filters/products_filters_actions';

const App = ({ allProducts, allProductsLoading, getAllProducts }) => {

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <GlobalsStyles />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home allProducts={allProducts} allProductsLoading={allProductsLoading} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/products'>
            <Products allProducts={allProducts} allProductsLoading={allProductsLoading} />
          </Route>
          <Route path='/products/:id'>
            <SingleProducts />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>)
}

const mapStateToProps = (state) => ({
  allProducts: state.filtersData.filtredProducts,
  allProductsLoading: state.filtersData.allProductsLoading
})

export default connect(mapStateToProps, { getAllProducts })(App)
