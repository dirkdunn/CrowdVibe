import React, { Component } from 'react';
import Nav from 'Nav';
import Footer from 'Footer';
import SearchCity from './SearchCity';

import * as Redux from 'react-redux';
import router from 'app/router/';

class Main extends Component {

  constructor(props){
    super(props)

    this.state = {
      events: []
    }
  }

  populateEvents(events){
    // go through dom and add events
    console.log('from main: ', events)
    this.setState({
      events: this.state.events.concat(events)
    })
  }

  render(){

    let events = this.state.events.map((event,index)=>{
      console.log(event.latitude,event.longitude)
      // data="{latitude:"+event.latitude+", longitude: "+event.longitude+"}"
      const coords = JSON.stringify({
        latitude : event.latitude,
        longitude : event.longitude
      });
      return (
        <div  data-coords={coords} className="col-md-4 card event" key={index}>
          <h5>{event.name}</h5>
          <img src={event.eventImage} alt="event"/>
          {/* <p>{event.info}</p> */}
        </div>
      )
    });

    return (
      <div className="font-main">
        <Nav/>
          <div className="mainlandingsection">
            <div className="mainlandingsectiontext">
              <div className="feelingstitle">
                Real Acts. Real Feelings. Now.
              </div>
              <div className="titlesubtext">
                Find Out What's Going On
              </div>
              <SearchCity populateEvents={this.populateEvents.bind(this)}/>
            </div>
          </div>
          <div className="row">
            <div className="cardsection">
              {events}
            </div>
          </div>

        <Footer />
      </div>
    )
  }
};

export default Main;
