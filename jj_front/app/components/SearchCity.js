import React, {Component} from 'react';
import {Link} from 'react-router';
import * as Redux from 'react-redux';
import router from 'app/router/';

class SearchCity extends Component {

  render() {
    return (
      <div className="font">
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search for city by name"/>
          <button className="apibutton">Search For Vibes</button>
        </form>
        </div>
        )
      }
    };

        export default SearchCity;
