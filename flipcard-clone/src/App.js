
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductListPage from './containers/PoductListPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import ProductDetailsPage from './containers/ProductDetailsPage';
import CardPage from './containers/CardPage';
import { updateCart } from './actions/cart.action';



function App() {

  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth)

  useEffect(() => {

    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.authenticate])

  useEffect(() => {
    console.log('App.js - Update Cart')
    dispatch(updateCart());
  }, [auth.authenticate])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<CardPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage />} />
          <Route path="/:slug" element={<ProductListPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

