import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


function App() {
    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to ="/">ABshop</Link>
        </div>
        <div className="header-links">
           <a href="cart.html">Cart</a>
           {
               userInfo ? <Link to="/profile">{userInfo.name}</Link> :<
                   Link to="/signin">Sign in</Link>
           }
           
        </div>
    </header>
    <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Mugs</a>
            </li>
            <li>
                <a href="index.html">Shirts</a>
            </li>
            
        </ul>
    </aside>
    <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" exact={true} component={HomeScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen} ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/products" component={ProductsScreen}></Route>
          <Route path="/shipping" component={ShippingScreen}></Route>
          <Route path="/payment" component={PaymentScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>

    </div>
    </main>
    <footer className="footer">
        All rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
