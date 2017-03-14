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
                RESTFUL FOOTBALL DATA.
              </div>
              <div className="titlesubtext">
                For football applications of your needs.
              </div>
              <a className="apibutton" href="#" role="button">Request an API Key</a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mainlandingparagraph">
              <h1>OUR PURPOSE</h1>
              <div className="paragraph">
                <p>The goal of the football-data API is to provide football data of all major european leagues in a machine-readable way. By data I mean fixtures, teams, players, results and more. All this information is provided via an easy-to-use RESTful API in JSON (only) representation.</p>
              </div>
              <div className="paragraph">
                <p>Target audience are software developers with an affinity to football in any way and the intent of building corresponding software.</p>
              </div>
              <div className="paragraph">
                <p>The on-site documentation should get you going quickly. I suggest you to install a JSON-View-Plugin either for Firefox or Chrome and then dive in via the Competition Resource and follow the HAL-style links of each resource to traverse the API.</p>
              </div>
              <div className="paragraph">
                <p>If you want to implement the API seriously in a (larger) project, read the exhaustive documentation to learn the tiny details.</p>
              </div>
              <div className="paragraph">
                <p>The API is in active development and as the current version number finally allegorizes: stable. Follow the blog for up-to-date information.</p>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
};

export default Main;
