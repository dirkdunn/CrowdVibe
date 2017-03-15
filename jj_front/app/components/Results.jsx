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
      toneArray : [],
      tweets : []
    }
  }

  componentDidMount() {
    // Hack for local storage
    var checkLocalStorage = setInterval(()=>{
      if(localStorage.getItem('eventDetails')){
        this.setState({
          toneArray : JSON.parse(localStorage.getItem('eventDetails')).emotions.document_tone.tone_categories[0].tones,
          details : JSON.parse(localStorage.getItem('eventDetails')),
          tweets : JSON.parse(localStorage.getItem('eventDetails')).tweets.statuses
        })
        localStorage.removeItem('eventDetails');
        console.log('tone array', this.state.toneArray);
        console.log('state is:', this.state.details);
        clearInterval(checkLocalStorage)
      }
    },200);
    
  }

  render(){

    let moods = this.state.toneArray.map(function(mood,index){
      console.log(mood)
      return (
        <li key={mood.score}>{mood.tone_name} - {mood.score}</li>
        )
    });

    let tweets = this.state.tweets.map((tweet,index)=>{
      console.log('tweets are:',tweet)
      return (
        <li key={tweet.id_str}>
          <img className="profilepice" src={tweet.user.profile_image_url} alt="profile image"/>
          <p className="tweettext">{tweet.text}</p>
          <p className="location">{tweet.place.full_name}</p>
        </li>
        );
    });

    console.log('this.state.tweets, ',this.state.tweets);
    // console.log('dominan: ', dominantTone);

    return(
      <div>
        <Nav/>
          <div className="row">
            <div className="col-md-6 mood">
            <ul>
              {moods}
            </ul>
            </div>
            <div className="col-md-6 info">
              <h2>{ this.state.details.info.name }</h2>
              <img src={this.state.details.info.img} alt="band logo"/>
              <p>{this.state.details.info.info}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 tweets">
              <ul className="tweets">
                {tweets}
              </ul>
            </div>
          </div>
        <Footer/>
      </div>
    )
  }
}

export default Results;
