import React, { Component} from 'react';
import router from 'app/router/';
import Nav from 'Nav';
import Footer from 'Footer';


class Results extends Component {

  render(){
    return(
      <div>
        <Nav/>
      <div className="results-div">
        <div className="mood-bar">moodbar</div>
        <div className="info">info</div>
      </div>
      <Footer/>
      </div>
    )
  }
}

export default Results;
