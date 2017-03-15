import React, { Component} from 'react';
import router from 'app/router/';
import Nav from 'Nav';
import Footer from 'Footer';


class Results extends Component {

  render(){
    return(
      <div>
        <Nav/>
          <div className="row">
            <div className="col-md-6 mood">
            </div>
            <div className="col-md-6 info">
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 tweets">
            </div>
          </div>
        <Footer/>
      </div>
    )
  }
}

export default Results;
