import React, {Component} from 'react';
import {Link} from 'react-router';
import * as Redux from 'react-redux';
import router from 'app/router/';
import Request from 'superagent';


class SearchCity extends Component {
  onFormSubmit(){
    var url="http://localhost:3000/api/ticketmaster/";
    Request.post(url)
        .send({'city':'Chicago'})
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .then((response) => {
        console.log('Response from Twitter', response.body);
      });
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.onFormSubmit}>
          <input className="searchcity center" type="search" ref="location" placeholder="Search for city by name"/>
          <button className="apibutton">Search For Vibes</button>
        </form>
      </div>
      )
    }
  };

        export default SearchCity;
