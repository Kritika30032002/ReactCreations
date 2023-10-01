import React, { Component } from 'react';
import {NavLink, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";

export class Navigation extends Component {
    render() {
        return (

          <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm" aria-label="Fourth navbar example">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">React.ts</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-cards">My Cards</NavLink>
                </li>

                

              </ul>
              <ul className="navbar-nav mb-2 mb-md-0 ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>



        )
    }
}

export default Navigation
