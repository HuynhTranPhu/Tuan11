import React from 'react';
import {  
    Link,
    NavLink,
  } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="nav">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link to="" className="navbar-brand">MENU</Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/products" className="nav-item nav-link">Products</NavLink>
                        <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                        
                    </div>
                    <div className="navbar-nav ml-auto">
                    
                              <div className="nav-item dropdown">
                                  <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</Link>
                                      
                                  <div className="dropdown-menu">
                                      <Link to="/login" className="dropdown-item">Login</Link>
                                      <Link to="/" className="dropdown-item">Register</Link>
                                      <Link to="/" className="dropdown-item" >Logout</Link>
                                  </div>
                              </div>
                        
                              
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    </div>
    );
};

export default Navbar;