import React, {Component} from 'react';
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var {Link, IndexLink} = require('react-router');

import * as Redux from 'react-redux';
import router from 'app/router/';

class Nav extends Component {
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  render() {
    return (
      <div className="container-fluid thenav">
        <div className="top-bar">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox"/>
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a href="#/main">
                  <li>Home</li>
                </a>
                <a href="#/blog">
                  <li>Blog</li>
                </a>
                <a href="#/documentation">
                  <li>Documentation</li>
                </a>
                <a href="#/settings">
                  <li>Settings</li>
                </a>
                <a href="#/about">
                  <li>About</li>
                </a>
              </ul>
            </div>

          </nav>

          <ul className="" data-dropdown-menu>
              <li className="titlename navbar-left">Football-Data<div className="orgbold">.org</div></li>
              <li className="navbar-right topright">
                <Link to="/about" className="eachLink" activeClassName="active">About</Link>
              </li>
              <li className="navbar-right topright">
                <Link to="/settings" className="eachLink" activeClassName="active">Settings</Link>
              </li>
              <li className="navbar-right topright">
                <Link to="/documentation" className="eachLink" activeClassName="active">Docs</Link>
              </li>
              <li className="navbar-right topright">
                <Link to="/blog" className="eachLink" activeClassName="active">Blog</Link>
              </li>
              <li className="navbar-right topright">
                <Link to="/main" className="eachLink" activeClassName="active">Home</Link>
              </li>
            </ul>
        </div>


      </div>
    );
  }
};

export default Nav;
