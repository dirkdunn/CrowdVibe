import React, {Component} from 'react';
var {Link} = require('react-router');
import Nav from 'Nav';
import Footer from 'Footer';
import * as Redux from 'react-redux';
import router from 'app/router/';

class About extends Component {

  render() {
    return (
      <div className="font-main">
        <Nav/>
        <div className="contact">
          Testing 1 2 3
          <div className="contactform">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="col-md-6 col-lg-6 formentry">
                  <form className="form">
                    <div className="form-group">
                      <label for="exampleInputName2">Name</label>
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe">
                      </input>
                    </div>
                      <div className="form-group">
                        <label for="exampleInputEmail2">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
                        </input>
                        <textarea className="form-control" rows="3"></textarea>

                      </div>
                        <button type="submit" className="btn btn-default">Send invitation</button>
                      </form>
                    </div>
                  </div>
            </div>

              </div>
            </div>
            <div className="mapsection">
              Hello there
              <iframe width="800" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDcV8OiTF_Lk4UCZLszjEPyAbBV-1p-tBk&q=Austin+TX" allowFullScreen></iframe>

            </div>
            <Footer/>
          </div>
        )
        }
        };

        export default About;
