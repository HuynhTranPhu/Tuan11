import React from 'react';
import Login from './components/Login/Login';
import Product from './components/products/Product';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import {
  BrowserRouter ,
  Route,
  Switch
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/products" exact component={Product}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="*" exact component={NotFound}></Route>
      </Switch>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
