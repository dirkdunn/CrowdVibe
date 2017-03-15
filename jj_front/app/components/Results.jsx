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
      var tweettext= tweet.text;

      if(index < this.state.tweets.length-3){
        return (
        <div className="row">
        <div className="tweetdiv col-md-3 col-md-offset-1" key={this.state.tweets[index].id_str}>
          <img className="profilepic col-lg-2" src={this.state.tweets[index].user.profile_image_url} alt="profile image"/>
          <p className="tweettext col-lg-8">{this.state.tweets[index].text}</p>
          <p className="location col-lg-2">{this.state.tweets[index].place.full_name}</p>
        </div>
        <div className="tweetdiv col-md-3 col-md-offset-1" key={this.state.tweets[index+1].id_str}>
          <img className="profilepic col-lg-2" src={this.state.tweets[index+1].user.profile_image_url} alt="profile image"/>
          <p className="tweettext col-lg-8">{this.state.tweets[index+1].text}</p>
          <p className="location col-lg-2">{this.state.tweets[index+1].place.full_name}</p>
        </div>
        <div className="tweetdiv col-md-3 col-md-offset-1" key={this.state.tweets[index+2].id_str}>
          <img className="profilepic col-lg-2" src={this.state.tweets[index+2].user.profile_image_url} alt="profile image"/>
          <p className="tweettext col-lg-8">{this.state.tweets[index+2].text}</p>
          <p className="location col-lg-2">{this.state.tweets[index+2].place.full_name}</p>
        </div>
        </div>
        );
      }

    });

    console.log('this.state.tweets, ',this.state.tweets);
    // console.log('dominan: ', dominantTone);

    return(
      <div>
        <Nav/>
        <div className="topsection">
          <div className="row topsection">
            <div className="col-md-6 mood">
            <h2>Watson Analysis</h2>
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
        <div className="bottomsection tweets">
            {tweets}
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Results;
