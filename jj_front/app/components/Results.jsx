import React, { Component} from 'react';
import router from 'app/router/';
import Nav from 'Nav';
import Footer from 'Footer';


class Results extends Component {

  constructor(props){
    super(props)
    this.state = {
      details : {}
    }
  }

  componentDidMount() {
    // Hack for local storage
    var checkLocalStorage = setInterval(()=>{
      if(localStorage.getItem('eventDetails')){
        this.setState({
          details : JSON.parse(localStorage.getItem('eventDetails'))
        })
        localStorage.removeItem('eventDetails');
        console.log('state is:', this.state.details);
        clearInterval(checkLocalStorage)
      }
    },200);
    
  }

  render(){
    return(
      <div>
        <Nav/>
      <div className="results-div">
        <div className="mood-bar">moodbar hi{this.props.params.test}</div>
        <div className="info">info</div>
      </div>
        <Footer/>
      </div>
    )
  }
}

export default Results;
