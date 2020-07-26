import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {
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
            <a href="signin">Sign in</a>
            <a href="cart.html">Cart</a>
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
