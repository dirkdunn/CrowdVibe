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
      var tweettext= tweet.text

      return (
        <div className="tweetdiv row" key={tweet.id_str}>
          <img className="profilepic col-lg-2" src={tweet.user.profile_image_url} alt="profile image"/>
          <p className="tweettext col-lg-8">{tweet.text}</p>
          <p className="location col-lg-2">{tweet.place.full_name}</p>
        </div>
        );
    });

    console.log('this.state.tweets, ',this.state.tweets);
    // console.log('dominan: ', dominantTone);

    return(
      <div>
        <Nav/>
        <div className="topsection">
          <div className="row topsection">
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
        </div>
        <div className="bottomsection">
          <div className="row bottomsection">
            <div className="col-md-12 tweets">
              <ul className="tweets">
                {tweets}
              </ul>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Results;
