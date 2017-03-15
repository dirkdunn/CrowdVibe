import React, { Component } from 'react';
import Nav from 'Nav';
import Footer from 'Footer';
import SearchCity from './SearchCity';

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
              <SearchCity />
            </div>
          </div>
          <div className="row">
            <div className="cardsection">
              <div className="col-lg-4 card">
                This is a Test of the card
              </div>
              <div className="col-lg-4 card">
                This is a Test of the card
              </div>
              <div className="col-lg-4 card">
                This is a Test of the card
              </div>
              <div className="col-lg-4 card">
                This is a Test of the card
              </div>
              <div className="col-lg-4 card">
                This is a Test of the card
              </div>
              <div className="col-lg-4 card">
                This is a Test of the card
              </div>
            </div>
          </div>


        <Footer />
      </div>
    )
  }
};

export default Main;
