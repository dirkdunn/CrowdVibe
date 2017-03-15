/*
TODO:
  Connect to ticketmaster. Filter using city (done)
  Connect to twitter API
  Filter tweets via coordinates
  Run Tweets through Watson to get mood ()
*/

// TM standard API url
// https://app.ticketmaster.com/discovery/v2/events.json?apikey=o3BJoz7MHeA4gc4KtbnDyaz2yr76GowY

/*Dependencies*/
/*convert request to node-fetch*/

var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');
var request = require('request');
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'VQvVL296AEwFa3bKOeA2YZcru',
  consumer_secret: 'PTVkszSQfR2JeJJ7CJAdy668z5MX3B6pY84lJhT4x0zjQB6Tn8',
  access_token_key: '2923491953-9S3fKixcvHNYfzrAvF38PRCIBjUpuedrjpXUXOf',
  access_token_secret: '640Q9WXcFXGJkqnXGVu8GtEMxpkYtDOOHMk2r3hfo4Jre'
});
var tone_analyzer = watson.tone_analyzer({
  username: process.env.WATSON_API_USERNAME,
  password: process.env.WATSON_API_PASSWORD,
  version: 'v3',
  version_date: '2016-05-19 '
});

function getTweets(lattitude,longitude,until,since){
  return new Promise(function(resolve,reject){
    client.get('search/tweets', {
      q:'',
      // since: since,
      until:until,
      count:'20',
      geocode: lattitude+','+longitude+',.25mi'
    }, function(error, tweets, response) {
       console.log(tweets);
       if(error){
        reject(error)
       } else {
        resolve(JSON.parse(response.body));
       }
    });
  });
  
}

function watsonAnalyze(input_text){
  // console.log('body is: ', body);
  return new Promise(function(resolve,reject){
    var textToAnalyze = input_text || 'Analyze this mudda bugga!!!!';

    tone_analyzer.tone({ text: textToAnalyze },
      function(err, tone) {
        if (err){
          console.log('error occured.', err);
          reject(err);
        }
        else{
          console.log(JSON.stringify(tone, null, 2));
          resolve(tone);
        }
    });
  })
};

function getEvents(body){
  return new Promise(function(resolve,reject){
    var city = body.city || 'Austin';
    var url ="https://app.ticketmaster.com/discovery/v2/events.json?apikey="+process.env.TM_API_KEY+"&city="+city;

    request(url, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode);

      if(error){
        reject(error)
      } else {
        var requestBody = JSON.parse(response.body);
        resolve(requestBody['_embedded']['events']);
      }
    });
  });
}

/* Text analyze */
router.post('/watson', function(req, res, next) {
  watsonAnalyze(req.body).then(function(response){
    res.json(response);
  }).catch(function(error){
    res.json(error)
  })
});

router.post('/ticketmaster',function(req,res){

  /*
  Locating LAT & LONG
  requestBody._embedded.events (Array, ['_embedded']['venues']['location'])

  Austin360 Ampitheatre
  "longitude": "-97.64039993",
  "latitude": "30.13310378"

  Request DOCS
  https://www.npmjs.com/package/request
  */

  getEvents(req.body).then(function(response){
    res.json(response);
  }).catch(function(error){
    res.json(error);
  });

});


// Twitter API & Formulas
// geocode: “37.781157,-122.398720,1mi”.
// https://api.twitter.com/1.1/search/tweets.json?q=&geocode=-22.912214,-43.230182,1km&lang=pt&result_type=recent
// https://github.com/BoyCook/TwitterJSClient
// "2015-12-21".split('-').slice(0,2).join('-') + '-' + (parseInt("2015-12-21".split('-')[2])+1)

// {q: 'node.js'}
// until:2015-12-21

router.get('/twitter',function(req,res){
  //getTweets(lattitude,longitude,until,since){
    getTweets('30.134466','-97.638717','2017-03-14').then(function(response){
      res.json(response)
    }).catch(function(error){
      res.send(error);
    })
});


router.post('/details',function(req,res){
  var info = {
    lattitude : req.body.coords || '30.134466',
    longitude : req.body.coords|| '-97.638717',
    name : req.body.name,
    date: req.body.date || '2017-03-14',
    location : req.body.location
  };

  var tweetText = '';

  getTweets(info.lattitude,info.longitude,info.date).then(function(tweets){
    tweets.statuses.forEach(function(tweet,index){
      tweetText += tweet.text;
    });

    watsonAnalyze(tweetText).then(function(response){
      res.json(response)
    }).catch(function(error){
      res.send(error);
    });
    
  }).catch(function(error){
    res.send(error);
  });

})

module.exports = router;
