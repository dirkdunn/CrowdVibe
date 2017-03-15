import React, {Component} from 'react';
/*how the routes are defined, using inde link show the main link selected only when it is required*/
import {Link, IndexLink} from 'react-router';

import * as Redux from 'react-redux';
import router from 'app/router/';

class Nav extends Component {

  render() {
    return (
      <div className="container-fluid thenav">
        <div className="top-bar">
          <ul className="" data-dropdown-menu>
              <li className="titlename navbar-left">
                <Link to="/main" className="eachLink" activeClassName="active">CrowdVibe</Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
};

export default Nav;
