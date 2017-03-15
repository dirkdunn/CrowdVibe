import React, { Component} from 'react';
import router from 'app/router/';
import Nav from 'Nav';
import Footer from 'Footer';


class Results extends Component {

  constructor(props){
    super(props)
    this.state = {
      details : {
        emotions: {},
        info: {},
        tweets: {}
      },
      toneArray : []
    }
  }

  componentDidMount() {
    // Hack for local storage
    var checkLocalStorage = setInterval(()=>{
      if(localStorage.getItem('eventDetails')){
        this.setState({
          toneArray : JSON.parse(localStorage.getItem('eventDetails')).emotions.document_tone.tone_categories[0].tones,
          details : JSON.parse(localStorage.getItem('eventDetails'))
        })
        localStorage.removeItem('eventDetails');
        console.log('tone array', this.state.toneArray);
        console.log('state is:', this.state.details);
        clearInterval(checkLocalStorage)
      }
    },200);
    
  }

  render(){
      // const toneArray = this.state.details.emotions.document_tone.tone_categories[0].tones;

      // console.log(this.state.toneArray);
    // const dominantTone = Math.max();

    // console.log('toneAray: ', toneArray);

    return(
      <div>
        <Nav/>
          <div className="row">
            <div className="col-md-6 mood">

            </div>
            <div className="col-md-6 info">
              <h2>{ this.state.details.info.name}</h2>
              <img src={this.state.details.info.img} alt="band logo"/>
              <p>{this.state.details.info.info}</p>
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
