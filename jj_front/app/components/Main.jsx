import React, { Component } from 'react';
import Nav from 'Nav';
import Footer from 'Footer';

import * as Redux from 'react-redux';
import router from 'app/router/';

class Main extends Component {
  render(){
    return (
      <div className="font-main">
        <Nav/>
          <div className="mainlandingsection">
            <div className="mainlandingsectiontext">
              <div className="footballdatatitle">
                Real Acts. Real Feelings. Now.
              </div>
              <div className="titlesubtext">
                Find Out What's Going On
              </div>
              <a className="apibutton" href="#" role="button">Request an API Key</a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mainlandingparagraph">
              <h1>OUR PURPOSE</h1>
              <div className="paragraph">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
};

export default Main;
