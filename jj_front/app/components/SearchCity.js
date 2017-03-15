import React, {Component} from 'react';
import {Link} from 'react-router';
import * as Redux from 'react-redux';
import router from 'app/router/';
import Request from 'superagent';


class SearchCity extends Component {
  constructor(props){
    super(props)

    this.state = {
      events: []
    }
  }

  onFormSubmit(){
    var url="http://localhost:3000/api/ticketmaster/";
    Request.post(url)
        .send({'city':'Chicago'})
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .then((response) => {
        console.log('Response from Twitter', response);

        // console.log(response.body);
        response.body.forEach((event,index)=>{
          this.setState({
            events : this.state.events.concat({
              name: event.name,
              eventImage: event.images[0].url,
              date: event.dates.start.localDate,
              info: event.info,
              latitude: event._embedded.venues[0].location.latitude,
              longitude: event._embedded.venues[0].location.longitude
            })
          })
        })

        console.log(this.state.events);
        this.props.populateEvents(this.state.events);
      });
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input className="searchcity center" type="search" ref="location" placeholder="Search For City By Name"/>
          <button className="apibutton">Search For Vibes</button>
        </form>
      </div>
      )
    }
  };

        export default SearchCity;
